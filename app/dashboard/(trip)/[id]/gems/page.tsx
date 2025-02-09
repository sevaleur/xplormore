"use server";

import { generateItineraryIdeas } from "@/app/_lib/ai";
import GridItem from "@/app/_ui/GridItem";

export const Page = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const id = params.id;
  const generatedItinerary = await generateItineraryIdeas(id);

  return (
    <div className="h-full w-full p-[4.5rem] grid grid-cols-3 grid-rows-4 gap-4">
      {generatedItinerary.map((content, idx) => (
        <GridItem key={content.title} content={content} idx={idx} />
      ))}
    </div>
  );
};

export default Page;
