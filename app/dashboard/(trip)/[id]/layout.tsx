import TopNav from "@/app/_ui/TopNav";

const Layout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) => {
  return (
    <div className="w-full h-full relative p-4">
      <div className="absolute top-[4rem]">
        <div className="mb-4">{children}</div>
        <div className="flex gap-4">
          <TopNav id={params.id} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
