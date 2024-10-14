import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { SearchComponent } from "../search";

interface IHeaderTopItem {
  id: string;
  label: string;
  url: string;
}

const HeaderTopItems: IHeaderTopItem[] = [
  { id: uuid(), label: "Music", url: "/dashboard/home/music" },
  { id: uuid(), label: "Podcast", url: "/dashboard/home/podcast" },
  { id: uuid(), label: "Live", url: "/dashboard/home/live" },
  { id: uuid(), label: "Radio", url: "/dashboard/home/radio" },
];

export const HeaderTop = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center">
        {HeaderTopItems.map((item) => (
          <Link
            href={item.url}
            className={cn(
              buttonVariants({
                variant: "link",
                size: "sm",
              })
            )}
            key={item.id}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Search */}
      <div className="p-1">
        <SearchComponent />
      </div>
    </div>
  );
};

export default HeaderTop;
