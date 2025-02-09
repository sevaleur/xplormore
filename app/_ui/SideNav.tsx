"use client";

import Image from "next/image";

import { LogOut } from "lucide-react";
import { Button, Tooltip } from "@heroui/react";
import { SignOutButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";

const SideNav = () => {
  return (
    <nav className="w-full h-full px-3 relative">
      <div className="mb-12">
        {/* <Link href="/dashboard">
          <figure className="w-[80px] pt-4"> 
            <Image src=" " alt="Logo" />
          </figure>
        </Link> */}
      </div>
      <div className="w-full absolute bottom-[4.5rem] left-0 flex flex-col gap-4 items-center">
        <UserButton
          appearance={{
            elements: { userButtonAvatarBox: "h-[3rem] w-[3rem]" },
          }}
        />
        <Tooltip content="Sign out" placement="right" color="foreground">
          <SignOutButton>
            <Button isIconOnly variant="flat" className="bg-white/40" size="lg">
              <LogOut size={20} color="#ff2d2d" />
            </Button>
          </SignOutButton>
        </Tooltip>
      </div>
    </nav>
  );
};

export default SideNav;
