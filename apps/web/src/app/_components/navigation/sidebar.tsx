"use client";

import { extraMenuItems } from "@/constant";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { usePathname } from "next/navigation";

import BrandLogo from "./brand";
import Menu from "./menu";
import MenuItem from "./menu-item";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, ...rest }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  // Toggle mobile menu
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Hamburger Icon */}
      <div className="md:hidden fixed right-1 top-1">
        <Button variant={"ghost"} size={"sm"} onClick={handleToggleMobileMenu}>
          <MenuIcon className="w-5 h-5 text-black" />
        </Button>
      </div>

      <aside
        className={cn(
          "hidden w-full h-screen bg-ss-background md:flex flex-col justify-between",
          className
        )}
        {...rest}
      >
        <section>
          {/* Logo */}
          <BrandLogo />

          {/* Menu */}
          <Menu pathname={pathname?.toLowerCase()} />
        </section>

        {/* Extra Options */}
        <section className="p-4">
          <p className="uppercase text-ss-muted font-[500] text-xs mb-1">
            General
          </p>
          {extraMenuItems.map((e) => (
            <MenuItem
              key={e.id}
              {...e}
              className="mb-2"
              isActive={pathname.toLowerCase() === e.route}
            />
          ))}
        </section>
      </aside>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-ss-background overflow-y-auto shadow-lg flex flex-col p-4">
          {/* Cross Button */}
          <div className="fixed top-2 right-2">
            <Button size={"sm"} onClick={handleToggleMobileMenu}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Logo */}
          <BrandLogo />

          {/* Menu for Mobile */}
          <Menu pathname={pathname?.toLowerCase()} />

          {/* Extra Options for Mobile */}
          <section className="p-4">
            <p className="uppercase text-ss-muted font-[500] text-xs mb-1">
              General
            </p>
            {extraMenuItems.map((e) => (
              <MenuItem
                key={e.id}
                {...e}
                className="mb-2"
                isActive={pathname.toLowerCase() === e.route}
              />
            ))}
          </section>
        </div>
      )}
    </>
  );
};
