"use client";

import Image from "next/image";
import Link from "next/link";

import { SignOutButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { CirclePlus } from "lucide-react";
import { Button, Tooltip } from "@heroui/react";

const links = [
  { route: "/dashboard", name: "Home" },
  { route: "/dashboard/events", name: "Events" },
  { route: "/dashboard/guests", name: "Guests" },
  { route: "/dashboard/activity", name: "Activity" },
  { route: "/dashboard/settings", name: "Settings" },
];

const isActive = (path: string, route: string) => {
  if (route === "/dashboard") {
    return path === "/dashboard";
  } else {
    return path.includes(route);
  }
};

const Side = () => {
  const path = usePathname();
  const activeClass = "bg-primary hover:bg-primary";

  return (
    <div className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          {/* <Image src=" " alt="Logo" /> */}
        </figure>
      </div>
      <div>
        {links.map((link) => (
          <div className="w-full" key={link.route}>
            <Link href={link.route}>
              <div
                className={`w-full h-full py-2 px-2 hover:bg-gray-400/60 rounded-lg ${
                  isActive(path, link.route) ? activeClass : ""
                }`}
              >
                {link.name}
              </div>
            </Link>
          </div>
        ))}
        <div className="mt-5">
          <Tooltip content="New Trip" placement="right" color="foreground">
            <Link href="/dashboard/trip-creation">
              <Button isIconOnly variant="light" size="lg">
                <CirclePlus size={24} color="#fff" />
              </Button>
            </Link>
          </Tooltip>
        </div>
      </div>
      <div className="absolute bottom-0 w-full left-0 px-4 py-2">
        <SignOutButton className="px-2 py-2 w-full border rounded-lg text-xl text-left">
          Sign Out
        </SignOutButton>
      </div>
    </div>
  );
};

export default Side;
