import Trips from "@/components/Trips";

const DashboardPage = async () => {
  return (
    <div className="h-full grid grid-rows-[200px_1fr]">
      <div className="self-center px-4">
        <h2 className="text-6xl">Dashboard</h2>
      </div>
      <div>
        <Trips />
      </div>
    </div>
  );
};

export default DashboardPage;
