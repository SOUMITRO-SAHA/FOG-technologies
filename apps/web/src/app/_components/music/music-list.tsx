"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";

interface IMusicListProps {
  label?: string;
  musicList?: any;
  isLoading?: boolean;
}

const defaultColumns: ColumnDef<any>[] = [
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "playing",
    header: "Playing",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "album",
    header: "Album",
  },
];

const MusicList: React.FC<IMusicListProps> = ({
  label = "Popular",
  musicList = [],
  isLoading = false,
}) => {
  const [list, setList] = React.useState(musicList);
  const columns = React.useMemo(() => defaultColumns, []);
  const data = React.useMemo(() => list, [list]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Handle drag end event
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const reorderedList = Array.from(list);
    const [removed] = reorderedList.splice(result.source.index, 1);
    reorderedList.splice(result.destination.index, 0, removed);

    setList(reorderedList); // Update state with new order
  };

  return (
    <section className="text-popover mt-16 mx-12">
      {/* Header section */}
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-lg font-semibold">{label}</h5>
        <Button size={"sm"} variant={"link"}>
          See All
        </Button>
      </div>

      {/* Table section */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="musicList">
          {(provided) => (
            <Table
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="rounded-md border overflow-hidden"
            >
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow
                    key={headerGroup.id}
                    className="hover:bg-transparent"
                  >
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      <Loader2 className="w-8 h-8 animate-spin" />
                    </TableCell>
                  </TableRow>
                ) : table?.getRowModel()?.rows?.length ? (
                  table.getRowModel().rows.map((row, index) => (
                    <Draggable key={row.id} draggableId={row.id} index={index}>
                      {(provided) => (
                        <TableRow
                          key={row.id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          data-state={row.getIsSelected() && "selected"}
                        >
                          {row.getVisibleCells().map((cell) => (
                            <TableCell key={cell.id}>
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
                {provided.placeholder}
              </TableBody>
            </Table>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default MusicList;
