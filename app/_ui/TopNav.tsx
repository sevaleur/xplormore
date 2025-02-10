import Link from "next/link";

import {
  Ticket,
  Bed,
  Plane,
  House,
  Gem,
  Heart,
  Sun,
  MessageCircleHeart,
  UserRoundPlus,
} from "lucide-react";
import { COLOR_BLACK } from "@/app/_lib/colors";
import { Button, Tooltip } from "@heroui/react";

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
      route: `/dashboard/${id}/locals`,
      name: "What the locals say",
      icon: <MessageCircleHeart size={size} color={color} />,
    },
    {
      route: `/dashboard/${id}/weather`,
      name: "Weather forecast",
      icon: <Sun size={size} color={color} />,
    },
    {
      route: `/dashboard/${id}/planetickets`,
      name: "Plane tickets",
      icon: <Plane size={size} color={color} />,
    },
    {
      route: `/dashboard/${id}/events`,
      name: "Events",
      icon: <Ticket size={size} color={color} />,
    },
    {
      route: `/dashboard/${id}/hotels`,
      name: "Hotels",
      icon: <Bed size={size} color={color} />,
    },
    {
      route: `/dashboard/${id}/gems`,
      name: "Hidden Gems",
      icon: <Gem size={size} color={color} />,
    },
    {
      route: `/dashboard/${id}/likes`,
      name: "My likes",
      icon: <Heart size={size} color={color} />,
    },
    {
      route: `/dashboard/${id}/invite`,
      name: "Invite adventurer",
      icon: <UserRoundPlus size={size} color={color} />,
    },
  ];
  return links;
};

const TopNav = ({ id }: { id: string }) => {
  const links = createLinks({ id: id, size: 24, color: COLOR_BLACK });

  return (
    <div className="flex gap-4 pl-4">
      {links &&
        links.map((link) => (
          <div key={link.route} className="w-fit">
            <Tooltip content={link.name} placement="bottom" color="foreground">
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
  );
};

export default TopNav;
