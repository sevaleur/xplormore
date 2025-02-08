"use client";

import Image from "next/image";

import { Ticket, Bed, House } from "lucide-react";
import { COLOR_BLACK } from "@/app/_lib/colors";
import { LogOut } from "lucide-react";
import { Button, Tooltip } from "@heroui/react";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import Link from "next/link";

const createLinks = ({
  id,
  size,
  color,
}: {
  id: string;
  size: number;
  color: string;
}) => {
  const links = [
    {
      route: "/dashboard",
      name: "Home",
      icon: <House size={size} color={color} />,
    },
    {
      route: `/dashboard/trip/${id}/activities`,
      name: "Events",
      icon: <Ticket size={size} color={color} />,
    },
    {
      route: `/dashboard/trip/${id}/hotels`,
      name: "Hotels",
      icon: <Bed size={size} color={color} />,
    },
  ];
  return links;
};

const SideNav = () => {
  const path = usePathname();
  const links = createLinks({
    id: "60f33060-c7a9-4897-895d-6d3e405a3489",
    size: 24,
    color: COLOR_BLACK,
  });

  return (
    <nav className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-[80px] pt-4">
          {/* <Image src=" " alt="Logo" /> */}
        </figure>
      </div>
      {path === "/dashboard/trip/60f33060-c7a9-4897-895d-6d3e405a3489" ? (
        <div className="w-full flex flex-col gap-4 items-center">
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
        </div>
      ) : (
        <></>
      )}
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

export default SideNav;
