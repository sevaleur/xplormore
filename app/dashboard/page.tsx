import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getAllTrips = async () => {
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

const DashboardPage = async () => {
  const trips = await getAllTrips();
  console.log(trips);
  return <div>Upcoming Trips</div>;
};

export default DashboardPage;
