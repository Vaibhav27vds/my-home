"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";

 
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Online Support</HoveredLink>
            <HoveredLink href="/interface-design">Customer Care</HoveredLink>
            <HoveredLink href="/seo">Design Center</HoveredLink>
            <HoveredLink href="/branding">Personalisation</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Smart Fan"
              href="https://algochurn.com"
              src="https://i.pinimg.com/564x/6e/b1/14/6eb114c0e55a2ce0aff1fec06ef880db.jpg"
              description="Make your fan smart"
            />
            <ProductItem
              title="Smart Bulb"
              href="https://tailwindmasterkit.com"
              src="https://i.pinimg.com/564x/6e/b1/14/6eb114c0e55a2ce0aff1fec06ef880db.jpg"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Smart Led"
              href="https://gomoonbeam.com"
              src="https://i.pinimg.com/564x/6e/b1/14/6eb114c0e55a2ce0aff1fec06ef880db.jpg"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Smart Air conditioner"
              href="https://userogue.com"
              src="https://i.pinimg.com/564x/6e/b1/14/6eb114c0e55a2ce0aff1fec06ef880db.jpg"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
