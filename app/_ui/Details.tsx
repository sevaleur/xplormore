import { Pace, TravelStyle } from "@prisma/client";

const Details = ({
  budget,
  style,
  pace,
  startDate,
  endDate,
}: {
  budget: number;
  style: TravelStyle;
  pace: Pace;
  startDate: Date;
  endDate: Date;
}) => {
  return (
    <div className="relative">
      <div className="flex gap-4">
        <p>Budget: </p>
        <p>{budget}$</p>
      </div>
    </div>
  );
};

export default Details;
