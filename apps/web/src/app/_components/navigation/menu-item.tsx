import { buttonVariants } from "@/components/ui/button";
import { IMenuItem } from "@/constant";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface MenuItemProps extends IMenuItem {
  className?: string;
  isActive?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  route,
  className,
  isActive,
  ...rest
}) => {
  return (
    <Link
      href={route}
      className={cn(
        buttonVariants({
          variant: "ghost",
        }),
        "text-popover w-full gap-3 items-center justify-start",
        isActive && "bg-popover hover:bg-popover/40 text-ss-background",
        className
      )}
      {...rest}
    >
      {icon && <div className="flex items-center">{icon()}</div>}
      <span>{label}</span>
    </Link>
  );
};

export default MenuItem;
