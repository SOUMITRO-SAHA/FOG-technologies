import { cn } from "@/lib/utils";
import React from "react";
import MusicCard from "../music/music-card";

interface ThirdSideBarProps {
  className?: string;
}

export const ThirdSideBar: React.FC<ThirdSideBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full h-screen third-sidebar flex items-end justify-center",
        className
      )}
    >
      <div className="w-[80%] mb-10">
        <MusicCard label="Beat it" artist="Michael Jackson" image="" />
      </div>
    </div>
  );
};

export default ThirdSideBar;
