import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

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
    },
  });

  return trips;
};
