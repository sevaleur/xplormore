import { bentoGrid } from "@/app/_lib/data";
import { Checkbox } from "@heroui/checkbox";

const GridItem = ({ content, idx }: { content: object; idx: number }) => {
  return (
    <div key={content.title} className={`${bentoGrid[idx].classNames}`}>
      <h3>{content.title}</h3>
      <p>{content.price}</p>
      <p>{content.type}</p>
      <div className="h-full w-full">
        <Checkbox />
      </div>
    </div>
  );
};

export default GridItem;
