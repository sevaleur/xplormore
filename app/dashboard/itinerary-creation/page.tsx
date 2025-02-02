import { generateItineraryIdeas } from "@/utils/ai";
import { bentoGrid } from "@/utils/data";

const ItineraryCreation = async () => {
  const generatedItinerary = await generateItineraryIdeas();

  return (
    <div className="h-full w-full p-2 grid grid-cols-3 grid-rows-5 gap-4">
      {generatedItinerary.map((idea, idx) => (
        <div key={idea.title} className={`${bentoGrid[idx].classNames}`}>
          <h3>{idea.title}</h3>
          <p>{idea.price}</p>
          <p>{idea.type}</p>
        </div>
      ))}
    </div>
  );
};

export default ItineraryCreation;
