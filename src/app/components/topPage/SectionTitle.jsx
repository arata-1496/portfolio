import "./SectionTitle.css";
import Image from "next/image";

const SectionTitle = ({ title, align = "left" }) => {
  return (
    <div className={`section-title section-title--${align}`}>
      <p className="section-title__text">{title}</p>
      <Image
        src="/MV/waves.svg"
        width={608}
        height={19}
        alt=""
        className="section-title__waves"
      />
    </div>
  );
};

export default SectionTitle;
