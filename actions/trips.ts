"use server";

import { revalidateTag } from "next/cache";
import { prisma } from "@/utils/db";
import { getUserByClerkID } from "@/utils/auth";
import { delay } from "@/utils/delay";

export const createNewTrip = async (formData) => {
  const user = await getUserByClerkID();

  await prisma.trip.create({
    data: {
      userId: user.id,
      destination: formData.get("destination"),
      startDate: new Date(formData.get("startDate")).toISOString(),
      endDate: new Date(formData.get("endDate")).toISOString(),
      budget: Number(formData.get("budget")),
      travelStyle: formData.get("style"),
      travelType: formData.get("type"),
      pace: formData.get("pace"),
      planeTicket: formData.get("planeTickets") === "true" ? true : false,
      hotelReservation:
        formData.get("hotelReservation") === "true" ? true : false,
      name: formData.get("destination"),
    },
  });

  /* revalidateTag("events");
  revalidateTag("dashboard:events"); */
};
