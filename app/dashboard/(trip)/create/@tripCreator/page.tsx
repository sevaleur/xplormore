"use server";

import TripForm from "@/app/_ui/TripForm";

const TripCreatorSlot = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-white/40 rounded-lg backdrop-blur-lg px-8">
      <div className="p-4">
        <TripForm />
      </div>
    </div>
  );
};

export default TripCreatorSlot;
