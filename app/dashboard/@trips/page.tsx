import { getAllTrips } from "@/actions/getAllTrips";

const TripsSlot = async () => {
  const trips = await getAllTrips();

  return (
    <div className="w-full h-full bg-white/40 rounded-lg backdrop-blur-lg px-8 py-4">
      <div className="py-4 px-2">
        <h2 className="text-md text-black">Upcoming Trips</h2>
      </div>
      {trips.map((trip) => (
        <div key={trip.destination}>
          <h2>{trip.destination}</h2>
          <p>{trip.budget}</p>
        </div>
      ))}
    </div>
  );
};

export default TripsSlot;
