"use server";

import { getTrip } from "@/app/_actions/trips";
/* import { getCurrent } from "@/app/_actions/weather"; */

import { Pencil } from "lucide-react";
import { Tooltip, Button } from "@heroui/react";
import { COLOR_BLACK } from "@/app/_lib/colors";

import Link from "next/link";
import TripDetails from "@/app/_ui/TripDetails";

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const id = (await props.params).id;
  const trip = await getTrip(id);

  /* const weather = await getCurrent();  */

  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <Tooltip content="Edit" placement="right" color="foreground">
          <Link href={`/dashboard/${id}/edit`}>
            <Button
              isIconOnly
              variant="light"
              size="lg"
              className="bg-white/40"
            >
              <Pencil size={24} color={COLOR_BLACK} />
            </Button>
          </Link>
        </Tooltip>
      </div>
      <Details
        city={trip.city}
        country={trip.country}
        budget={trip.budget}
        style={trip.travelStyle}
        pace={trip.pace}
        startDate={trip.startDate}
        endDate={trip.endDate}
      />
    </div>
  );
};

export default Page;
