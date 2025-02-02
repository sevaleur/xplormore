import TripForm from "@/components/TripForm";

const TripCreatorSlot = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between bg-white/40 rounded-lg backdrop-blur-lg px-8">
      <div>
        <h4 className="text-md text-black">Fill out the form</h4>
      </div>
      <div className="p-4">
        <TripForm />
      </div>
    </div>
  );
};

export default TripCreatorSlot;
