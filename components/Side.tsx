"use client";

import Image from "next/image";
import Link from "next/link";

import {
  House,
  Calendar1,
  Ticket,
  TreePalm,
  Bed,
  Settings,
  CirclePlus,
  LogOut,
} from "lucide-react";
import { Button, Tooltip } from "@heroui/react";
import { SignOutButton, UserButton } from "@clerk/nextjs";

const createLinks = ({ size, color }: { size: number; color: string }) => {
  const links = [
    {
      route: "/dashboard",
      name: "Home",
      icon: <House size={size} color={color} />,
    },
    {
      route: "/dashboard/trips",
      name: "Trips",
      icon: <TreePalm size={size} color={color} />,
    },
    {
      route: "/dashboard/itinerary",
      name: "Itinerary",
      icon: <Calendar1 size={size} color={color} />,
    },
    {
      route: "/dashboard/events",
      name: "Events",
      icon: <Ticket size={size} color={color} />,
    },
    {
      route: "/dashboard/hotels",
      name: "Hotels",
      icon: <Bed size={size} color={color} />,
    },
    {
      route: "/dashboard/settings",
      name: "Settings",
      icon: <Settings size={size} color={color} />,
    },
    {
      route: "/dashboard/trip-creation",
      name: "Trip creation",
      icon: <CirclePlus size={size} color={color} />,
    },
  ];

  return links;
};

const Side = () => {
  const links = createLinks({ size: 24, color: "#020001" });

  return (
    <nav className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          {/* <Image src=" " alt="Logo" /> */}
        </figure>
      </div>
      <div className="w-full flex flex-col gap-4 items-center">
        {links.map((link) => (
          <div className="w-fit" key={link.route}>
            <Tooltip content={link.name} placement="right" color="foreground">
              <Link href={link.route}>
                <Button
                  isIconOnly
                  variant="light"
                  size="lg"
                  className="bg-white/40"
                >
                  {link.icon}
                </Button>
              </Link>
            </Tooltip>
          </div>
        ))}
      </div>
      <div className="absolute bottom-[2.5rem] left-0 w-full flex flex-col gap-4 items-center justify-center">
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

export default Side;
