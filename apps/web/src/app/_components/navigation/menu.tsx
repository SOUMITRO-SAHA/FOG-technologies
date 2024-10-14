import { menuItems } from "@/constant";
import React from "react";
import MenuItem from "./menu-item";
import { cn } from "@/lib/utils";

const Menu = ({ pathname }: { pathname?: string }) => {
  return (
    <div className={cn("p-4 pt-0")}>
      <p className="uppercase text-ss-muted font-[500] text-xs mb-1">Menu</p>
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          {...item}
          className="mb-3"
          isActive={pathname?.toLowerCase() === item.route}
        />
      ))}
    </div>
  );
};

export default Menu;
