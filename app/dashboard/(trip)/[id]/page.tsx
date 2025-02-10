"use server";

import { getTrip } from "@/app/_actions/trips";
import { Pencil } from "lucide-react";
import { Tooltip, Button } from "@heroui/react";
import Link from "next/link";

import Details from "@/app/_ui/Details";
import { COLOR_BLACK } from "@/app/_lib/colors";

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const trip = await getTrip(id);

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
      <div className="text-6xl">{trip.destination}</div>
      <Details
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
