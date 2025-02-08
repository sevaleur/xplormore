"use server";

import { revalidateTag } from "next/cache";
import { prisma } from "@/app/_lib/db";
import { getUserByClerkID } from "@/app/_lib/auth";
import { redirect } from "next/navigation";

export const createTrip = async (formData) => {
  const user = await getUserByClerkID();

  await prisma.trip.create({
    data: {
      userId: user.id,
      destination: formData.get("destination"),
      startDate: formData.get("start_date"),
      endDate: formData.get("end_date"),
      budget: Number(formData.get("budget")),
      travelStyle: formData.get("style"),
      pace: formData.get("pace"),
      planeTicket: formData.get("planeTickets") === "true" ? true : false,
      hotelReservation:
        formData.get("hotelReservation") === "true" ? true : false,
    },
  });

  revalidateTag("trips");
  revalidateTag("dashboard:trips");
  redirect("/dashboard/itinerary-creation");
};

export const getTrip = async ({ id: id }: { id: string }) => {
  const user = await getUserByClerkID();
  const trip = await prisma.trip.findUniqueOrThrow({
    where: {
      userId: user.id,
      id: id,
    },
  });

  return trip;
};

export const getLatestTrip = async () => {
  const user = await getUserByClerkID();
  const trips = await prisma.trip.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      destination: true,
      budget: true,
      startDate: true,
      endDate: true,
      travelStyle: true,
      pace: true,
      mustSee: true,
    },
  });

  const latest = trips[0];

  return latest;
};

export const getAllTrips = async () => {
  const user = await getUserByClerkID();
  const trips = await prisma.trip.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      destination: true,
      budget: true,
      id: true,
    },
  });

  return trips;
};
