"use server";

import SectionCard from "@/app/_ui/SectionCard";
import TripForm from "@/app/_ui/TripForm";

const TripCreatorSlot = () => {
  return (
    <SectionCard>
      <div className="p-4">
        <TripForm />
      </div>
    </SectionCard>
  );
};

export default TripCreatorSlot;
