"use client";

import { Input } from "@heroui/react";
import { useTransition } from "react";
import { createNewTrip } from "@/actions/trips";

const Nav = () => {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      createNewTrip();
    });
  };

  return (
    <nav className="h-[65px] border-b border-default-50 flex items-center px-6 gap-4">
      <div className="w-1/2">
        <Input size="sm" variant="faded" placeholder="search" />
      </div>
    </nav>
  );
};

export default Nav;
