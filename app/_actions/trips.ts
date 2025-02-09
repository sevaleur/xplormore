"use server";

import { revalidateTag } from "next/cache";
import { prisma } from "@/app/_lib/db";
import { getUserByClerkID } from "@/app/_lib/auth";
import { redirect } from "next/navigation";

export const createTrip = async (formData) => {
  const user = await getUserByClerkID();

  const trip = await prisma.trip.create({
    data: {
      userId: user.id,
      destination: formData.get("destination"),
      startDate: new Date(formData.get("startDate")).toISOString(),
      endDate: new Date(formData.get("endDate")).toISOString(),
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
  redirect(`/dashboard/${trip.id}`);
};

export const getTrip = async (id: string) => {
  const user = await getUserByClerkID();
  const trip = await prisma.trip.findUniqueOrThrow({
    where: {
      userId: user.id,
      id: id,
    },
  });

  return trip;
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
