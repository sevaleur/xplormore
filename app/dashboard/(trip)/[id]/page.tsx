"use server";

import { getTrip } from "@/app/_actions/trips";

const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const trip = await getTrip(id);

  return <div className="text-8xl">{trip.destination}</div>;
};

export default Page;
