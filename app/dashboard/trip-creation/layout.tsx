const TripCreationLayout = ({
  children,
  dynamic,
}: {
  children: React.ReactNode;
  dynamic: React.ReactNode;
}) => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/2 border-r border-default-50">{children}</div>
      <div className="w-1/2 flex flex-col">
        <div className="w-full h-full">{dynamic}</div>
      </div>
    </div>
  );
};

export default TripCreationLayout;
