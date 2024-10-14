"use client";

import { SearchType, useSearch } from "@/context/search";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React, { useState } from "react";

interface ISearchComponent {
  type?: string;
  placeholder?: string;
}

export const SearchComponent: React.FC<ISearchComponent> = ({
  type = SearchType.MUSIC,
  placeholder = "Search...",
}) => {
  const [query, setQuery] = useState<string>("");
  const { search } = useSearch();

  const handleSearch = async () => {
    await search(query, type as SearchType);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className={cn(
        "w-80 h-10 rounded-full bg-red-950 shadow-inner border border-red-950 flex items-center justify-between focus-within:ring-1 focus-within:ring-ss-primary"
      )}
    >
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        className={cn(
          "h-full bg-transparent border-none outline-none w-[85%] pl-5 focus:ring-0 placeholder:text-ss-muted text-ss-muted text-sm"
        )}
      />
      <Search className="h-5 text-popover w-[15%] flex items-center justify-center" />
    </div>
  );
};

export default SearchComponent;
