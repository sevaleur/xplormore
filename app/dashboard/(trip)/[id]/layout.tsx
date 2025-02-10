import TopNav from "@/app/_ui/TopNav";

const Layout = ({
  children,
  params,
  itinerary,
  images,
}: {
  children: React.ReactNode;
  params: { id: string };
  itinerary: React.ReactNode;
  images: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full relative p-4">
      <div className="flex gap-4 items-center">
        <TopNav id={params.id} />
      </div>
      <div className="w-full h-full p-4 grid grid-rows-[1fr_1fr] grid-cols-2 gap-4">
        <div className="w-full h-full bg-white/40 rounded-lg backdrop-blur-lg px-8 py-4 relative">
          {children}
        </div>
        <div className="w-full h-full bg-white/40 rounded-lg backdrop-blur-lg px-8 py-4 relative">
          {itinerary}
        </div>
        <div className="w-full h-full row-[1_/_3] col-[2_/_3] bg-white/40 rounded-lg backdrop-blur-lg px-8 py-4 relative">
          {images}
        </div>
      </div>
    </div>
  );
};

export default Layout;
