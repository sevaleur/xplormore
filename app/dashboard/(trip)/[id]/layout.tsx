import TopNav from "@/app/_ui/TopNav";
import SectionCard from "@/app/_ui/SectionCard";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const id = (await params).id;

  return (
    <div className="w-full h-full relative p-4">
      <div className="flex gap-4 items-center">
        <TopNav id={id} />
      </div>
      <div className="w-full h-full p-4">
        <SectionCard>{children}</SectionCard>
      </div>
    </div>
  );
};

export default Layout;
