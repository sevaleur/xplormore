const itineraryCreationLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full w-full grid place-content-center">{children}</div>
  );
};

export default itineraryCreationLayout;
