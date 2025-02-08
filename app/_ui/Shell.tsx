import SideNav from "./SideNav";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen h-screen">
      {}
      <aside className="fixed left-0 top-0 w-[100px] h-full">
        <SideNav />
      </aside>
      <div className="pl-[100px] w-[calc(100vw-100px)]">
        <main className="h-full p-8">{children}</main>
      </div>
    </div>
  );
};

export default Shell;
