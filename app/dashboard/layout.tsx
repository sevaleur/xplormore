"use client";

import Shell from "@/components/Shell";
import { usePathname } from "next/navigation";

const Dashboard = ({
  children,
  rsvps,
  events,
}: {
  children: React.ReactNode;
  rsvps: React.ReactNode;
  events: React.ReactNode;
}) => {
  const path = usePathname();

  return (
    <Shell>
      {path === "/dashboard" ? (
        <div className="flex w-full h-full">
          <div className="w-1/2 border-r border-default-50">{children}</div>
          <div className="w-1/2 flex flex-col">
            <div className="border-b border-default-50 w-full h-1/2">
              {events}
            </div>
            <div className="w-full h-1/2">{rsvps}</div>
          </div>
        </div>
      ) : (
        <div className="h-full">{children}</div>
      )}
    </Shell>
  );
};

export default Dashboard;
