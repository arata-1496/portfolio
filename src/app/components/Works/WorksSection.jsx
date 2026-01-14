import SectionTitle from "../topPage/SectionTitle";
import WorksList from "./WorksList";
import Link from "next/link";
import Image from "next/image";

const WorksSection = () => {
  return (
    <section className="works">
      <SectionTitle title="WORKS" align="right" />
      <div className="works-inner">
        <div className="works-content">
          <WorksList limit={3} />
        </div>
        <div className="works-actions">
          <div className="works-side">
            <div className="works-detail__sideButton">
              <button>←</button>
              <button>→</button>
            </div>
          </div>
          <div className="works-more">
            <Link className="works-more__text" href="/works">
              MORE
            </Link>
            <Image
              src="/MV/waves-small.svg"
              width={78}
              height={10}
              alt=""
              className="works-more__waves"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
