"use server";

import { revalidateTag } from "next/cache";
import { prisma } from "@/utils/db";
import { getUserByClerkID } from "@/utils/auth";

export const createNewTrip = async (formData) => {
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
};
