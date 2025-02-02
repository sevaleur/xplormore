import Side from "./Side";

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-screen h-screen">
      <aside className="w-[100px] min-w-[100px] max-w-[100px] h-full">
        <Side />
      </aside>
      <div className="w-[calc(100vw-100px)]">
        <main className="h-full p-8">{children}</main>
      </div>
    </div>
  );
};

export default Shell;
