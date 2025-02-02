import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

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
