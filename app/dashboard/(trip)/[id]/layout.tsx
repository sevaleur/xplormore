import TopNav from "@/app/_ui/TopNav";
import SectionCard from "@/app/_ui/SectionCard";

const Layout = ({
  children,
  params,
  images,
}: {
  children: React.ReactNode;
  params: { id: string };
  images: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full relative p-4">
      <div className="flex gap-4 items-center">
        <TopNav id={params.id} />
      </div>
      <div className="w-full h-full p-4 grid grid-rows-[1fr_1fr] grid-cols-2 gap-4">
        <SectionCard>{children}</SectionCard>
        <SectionCard>{images}</SectionCard>
      </div>
    </div>
  );
};

export default Layout;
