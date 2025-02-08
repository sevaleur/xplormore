"use client";

import Image from "next/image";

import { Ticket, Bed, House, Palmtree, Plane } from "lucide-react";
import { COLOR_BLACK } from "@/app/_lib/colors";
import { LogOut } from "lucide-react";
import { Button, Tooltip } from "@heroui/react";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import Link from "next/link";

const createLinks = ({ size, color }: { size: number; color: string }) => {
  const links = [
    {
      route: "/dashboard",
      name: "Home",
      icon: <House size={size} color={color} />,
    },
    {
      route: `/dashboard/trips`,
      name: "Trips",
      icon: <Palmtree size={size} color={color} />,
    },
    {
      route: `/dashboard/planetickets`,
      name: "Plane tickets",
      icon: <Plane size={size} color={color} />,
    },
    {
      route: `/dashboard/events`,
      name: "Events",
      icon: <Ticket size={size} color={color} />,
    },
    {
      route: `/dashboard/hotels`,
      name: "Hotels",
      icon: <Bed size={size} color={color} />,
    },
  ];
  return links;
};

const SideNav = () => {
  const links = createLinks({ size: 24, color: COLOR_BLACK });
  return (
    <nav className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          {/* <Image src=" " alt="Logo" /> */}
        </figure>
      </div>
      <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
        {links.map((link) => (
          <div key={link.route} className="w-fit">
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
