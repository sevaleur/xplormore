"use client";

import Image from "next/image";

import { LogOut, MapPinPlus } from "lucide-react";
import { Button, Tooltip } from "@heroui/react";
import { SignOutButton, UserButton } from "@clerk/nextjs";

import Link from "next/link";
import { COLOR_BLACK, COLOR_RED } from "../_lib/colors";

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
      <div className="w-full absolute bottom-[6rem] left-0 flex flex-col gap-4 items-center">
        <UserButton
          appearance={{
            elements: { userButtonAvatarBox: "h-[3rem] w-[3rem]" },
          }}
        />
        <Tooltip
          content="Add a local point of interest"
          placement="right"
          color="foreground"
        >
          <Link href="/dashboard/locals">
            <Button isIconOnly variant="flat" className="bg-white/40" size="lg">
              <MapPinPlus size={20} color={COLOR_BLACK} />
            </Button>
          </Link>
        </Tooltip>
        <Tooltip content="Sign out" placement="right" color="foreground">
          <SignOutButton>
            <Button isIconOnly variant="flat" className="bg-white/40" size="lg">
              <LogOut size={20} color={COLOR_RED} />
            </Button>
          </SignOutButton>
        </Tooltip>
      </div>
    </nav>
  );
};

export default SideNav;
