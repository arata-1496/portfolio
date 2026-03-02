import SectionTitle from "../topPage/SectionTitle";
import ScrollReveal from "../ScrollReveal";
import Link from "next/link";
import Image from "next/image";
import WorksCarousel from "./WorksCarousel";

const WorksSection = () => {
  return (
    <section className="mt-32 md:mt-40 lg:mt-48 w-full relative pt-24 md:pt-32 lg:pt-40">
      {/* タイトル：右から */}
      <SectionTitle title="WORKS" align="right" animation="slide-right" />

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
        {/* カルーセル：右から */}
        <ScrollReveal animation="slide-right" delay={100} threshold={0.3}>
          <div className="w-full relative">
            <WorksCarousel limit={3} />
          </div>
        </ScrollReveal>

        {/* MOREリンク：右から（少し遅延） */}
        <ScrollReveal animation="slide-right" delay={250} threshold={0.3}>
          <div className="flex flex-col items-center mt-12 md:mt-16">
            <Link
              href="/works"
              className="flex flex-col items-center gap-1 group"
            >
              <span className="font-bebas text-h3 text-more-deep group-hover:text-normal transition-colors">
                MORE
              </span>
              <Image
                src="/MV/waves-small.svg"
                width={78}
                height={10}
                alt=""
                className="w-auto h-auto"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorksSection;
