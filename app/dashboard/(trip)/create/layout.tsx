const TripCreationLayout = ({
  children,
  tripCreator,
  dynamic,
}: {
  children: React.ReactNode;
  tripCreator: React.ReactNode;
  dynamic: React.ReactNode;
}) => {
  return (
    <div className="w-full h-full p-4 grid grid-rows-[80px_1fr] grid-cols-2 gap-4">
      <div className="w-full col-span-full row-span-1">{children}</div>
      <div className="w-full h-full">{tripCreator}</div>
      <div className="w-full col-start-2 col-end-3 flex flex-col gap-4">
        <div className="w-full h-1/2">{dynamic}</div>
      </div>
    </div>
  );
};

export default TripCreationLayout;
