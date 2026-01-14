import { WorksDate } from "../../data/WorksDate";
import Image from "next/image";
import Link from "next/link";

const WorksDetail = async ({ params }) => {
  const { slug } = await params;
  const date = WorksDate.find((item) => item.slug === slug);
  if (!date) return <p>作品が見つかりません</p>;
  const detail = date.detail;

  // sideButtonを作成------

  const dateIndex = WorksDate.findIndex((item) => item.slug === slug);
  const backDateIndex = dateIndex - 1;
  const nextDateIndex = dateIndex + 1;

  const backIndex = () => {
    if (dateIndex === 0) {
      return WorksDate.length - 1;
    } else {
      return backDateIndex;
    }
  };

  const nextIndex = () => {
    if (dateIndex === WorksDate.length - 1) {
      return 0;
    } else {
      return nextDateIndex;
    }
  };
  // ------sideButtonを作成

  return (
    <section className="works-detail">
      <div className="works-detail__box">
        <button className="works-detail__closeButton">
          <Link href="/works">×</Link>
        </button>
        <div className="works-detail__media">
          <Image
            className="works-detail__img"
            src={date.thumb}
            width={500}
            height={300}
            alt={date.title}
            priority
          />
          <p className="works-detail__title">{date.title}</p>
        </div>
        <div className="works-detail__text">
          <section className="works-detail__about">
            <h3>概要</h3>
            <p>{detail.about}</p>
          </section>
          <section className="works-detail__improvements">
            <h3>改善点</h3>
            <ul>
              {detail.improvements.map((improvement, index) => {
                return <li key={index}>{improvement}</li>;
              })}
            </ul>
          </section>

          <div className="works-detail__sideButton">
            <button>
              <Link href={`/works/${WorksDate[backIndex()].slug}`}>←</Link>
            </button>
            <button>
              <Link href={`/works/${WorksDate[nextIndex()].slug}`}>→</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorksDetail;
