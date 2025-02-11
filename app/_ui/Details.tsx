import { Pace, TravelStyle } from "@prisma/client";

const Details = ({
  destination,
  budget,
  style,
  pace,
  startDate,
  endDate,
}: {
  destination: string;
  budget: number;
  style: TravelStyle;
  pace: Pace;
  startDate: Date;
  endDate: Date;
}) => {
  return (
    <div className="relative">
      <div className="text-6xl my-4">
        <h1>{destination}</h1>
      </div>
      <div className="pl-4">
        <div className="flex gap-4">
          <p className="italic text-md">{`${startDate.toDateString()} - ${endDate.toDateString()}`}</p>
        </div>
        <div className="flex gap-4">
          <p>Budget: </p>
          <p>{budget}$</p>
        </div>
        <div className="flex gap-4">
          <p>Preferred style: </p>
          <p>{style}</p>
        </div>
        <div className="flex gap-4">
          <p>Preferred pace: </p>
          <p>{pace}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
