"use server";

import { getAllTrips } from "@/app/_actions/trips";
import { COLOR_BLACK } from "@/app/_lib/colors";
import { CirclePlus } from "lucide-react";
import { Tooltip, Button } from "@heroui/react";

import SectionCard from "@/app/_ui/SectionCard";
import Link from "next/link";

const TripsSlot = async () => {
  const trips = await getAllTrips();

  return (
    <SectionCard>
      <div className="w-fit absolute top-4 right-4">
        <Tooltip content="Create a trip" placement="right" color="foreground">
          <Link href="/dashboard/create">
            <Button
              isIconOnly
              variant="light"
              size="lg"
              className="bg-white/40"
            >
              <CirclePlus size={24} color={COLOR_BLACK} />
            </Button>
          </Link>
        </Tooltip>
      </div>
      <div className="py-4 px-2">
        <h2 className="text-md text-black">Trips</h2>
      </div>
      {trips &&
        trips.map((trip) => (
          <div key={trip.id}>
            <Link href={`/dashboard/${trip.id}`}>
              <h2>{trip.destination}</h2>
              <p>{trip.budget}</p>
            </Link>
          </div>
        ))}
    </SectionCard>
  );
};

export default TripsSlot;
