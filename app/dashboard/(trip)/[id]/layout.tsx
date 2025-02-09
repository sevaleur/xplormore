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
      <div className="h-[100px] absolute top-2 right-0 flex gap-4 items-center">
        <TopNav id={params.id} />
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Layout;
