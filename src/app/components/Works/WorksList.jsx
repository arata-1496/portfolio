import { WorksDate } from "../../data/WorksDate";
import WorksCard from "./worksCard";

const WorksList = ({ limit }) => {
  const list = limit ? WorksDate.slice(0, limit) : WorksDate;

  return (
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center max-w-6xl">
      {list.map((work) => {
        return <WorksCard key={work.id} work={work} />;
      })}
    </div>
  );
};

export default WorksList;
