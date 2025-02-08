"use client";

import Shell from "@/app/_ui/Shell";
import { usePathname } from "next/navigation";

const Dashboard = ({
  children,
  trips,
  planeTickets,
  events,
}: {
  children: React.ReactNode;
  trips: React.ReactNode;
  planeTickets: React.ReactNode;
  events: React.ReactNode;
}) => {
  const path = usePathname();

  return (
    <Shell>
      {path === "/dashboard" ? (
        <div className="w-full h-full p-4 grid grid-rows-[100px_1fr] grid-cols-2 gap-4">
          <div className="w-full col-span-full row-span-1">{children}</div>
          <div className="w-full h-full">{trips}</div>
          <div className="w-full col-start-2 col-end-3 flex flex-col gap-4">
            <div className="w-full h-1/2">{events}</div>
            <div className="w-full h-1/2">{planeTickets}</div>
          </div>
        </div>
      ) : (
        <div className="h-full">{children}</div>
      )}
    </Shell>
  );
};

export default Dashboard;
