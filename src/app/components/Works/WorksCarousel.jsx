import { WorksDate } from "../../data/WorksDate";
import WorksCard from "./worksCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

const WorksCarousel = () => {
  const featuredWorks = WorksDate.slice(0, 5);

  return (
    <div className="w-full mx-auto relative">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="px-4 pt-1 pb-5">
          {featuredWorks.map((work) => (
            <CarouselItem
              key={work.id}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="px-2">
                <WorksCard work={work} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 md:-left-12" />
        <CarouselNext className="-right-4 md:-right-12" />
      </Carousel>
    </div>
  );
};
export default WorksCarousel;
