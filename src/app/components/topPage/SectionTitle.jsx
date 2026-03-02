import Image from "next/image";
import ScrollReveal from "../ScrollReveal";

const SectionTitle = ({ title, align = "left", animation }) => {
  const alignmentClasses = {
    left: "left-0 items-end",
    right: "right-0 items-start",
  };

  // ScrollRevealのdivにも同じflex方向を引き継がせる
  const innerAlignmentClasses = {
    left: "flex flex-col items-end w-full",
    right: "flex flex-col items-start w-full",
  };

  const content = (
    <>
      <p className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] leading-none text-[#204359] tracking-[0.07em]">
        {title}
      </p>
      <Image
        src="/MV/waves.svg"
        width={608}
        height={19}
        alt=""
        className="w-full h-auto"
      />
    </>
  );

  return (
    <div
      className={`
      absolute top-0
      w-1/2
      sm:w-full sm:max-w-[450px]
      md:max-w-[550px]
      lg:max-w-[608px]
      flex flex-col
      ${alignmentClasses[align]}
      `}
    >
      {animation ? (
        <ScrollReveal animation={animation} threshold={0.3} className={innerAlignmentClasses[align]}>
          {content}
        </ScrollReveal>
      ) : (
        content
      )}
    </div>
  );
};

export default SectionTitle;
