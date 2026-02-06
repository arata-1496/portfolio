import Link from "next/link";
import { WorksDate } from "../../data/WorksDate";
import Image from "next/image";

// 追加分
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WorksList = ({ limit }) => {
  const list = limit ? WorksDate.slice(0, limit) : WorksDate;

  return (
    <div className="works-list">
      {list.map((work) => {
        return (
          <Link
            key={work.id}
            href={`/works/${work.slug}`}
            className="works-card"
          >
            <div className="works-card-inner">
              <Image
                className="works-card-inner__img"
                src={work.thumb}
                width={256}
                height={200}
                alt={work.title}
                priority
              />
              <div className="works-card-inner__logos">
                {work.logos?.slice(0, 3).map((logo, index) => {
                  return (
                    <Image
                      key={index}
                      src={logo}
                      width={30}
                      height={30}
                      alt=""
                    />
                  );
                })}
              </div>
            </div>
            <p className="works-card__title">{work.title}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default WorksList;

// const WorksList = ({ limit }) => {
//   const list = limit ? WorksDate.slice(0, limit) : WorksDate;

//   return (
//     <div className="works-list">
//       {list.map((work) => {
//         return (
//           <Link
//             key={work.id}
//             href={`/works/${work.slug}`}
//             className="works-card"
//           >
//             <div className="works-card-inner">
//               <Image
//                 className="works-card-inner__img"
//                 src={work.thumb}
//                 width={256}
//                 height={200}
//                 alt={work.title}
//                 priority
//               />
//               <div className="works-card-inner__logos">
//                 {work.logos?.slice(0, 3).map((logo, index) => {
//                   return (
//                     <Image
//                       key={index}
//                       src={logo}
//                       width={30}
//                       height={30}
//                       alt=""
//                     />
//                   );
//                 })}
//               </div>
//             </div>
//             <p className="works-card__title">{work.title}</p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default WorksList;
