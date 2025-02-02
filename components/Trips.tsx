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

const Trips = async () => {
  const trips = await getAllTrips();

  return (
    <div className="w-full h-full bg-white/40 rounded-lg backdrop-blur-lg px-8 py-4">
      {trips.map((trip) => (
        <div key={trip.destination}>
          <h2>{trip.destination}</h2>
          <p>{trip.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default Trips;
