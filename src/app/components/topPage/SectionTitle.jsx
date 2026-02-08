import Image from "next/image";

const SectionTitle = ({ title, align = "left" }) => {
  const alignmentClasses = {
    left: "left-0 items-end", // 左配置、テキスト右寄せ
    right: "right-0 items-start", // 右配置、テキスト左寄せ
  };

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
      <p className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px]leading-none text-[#204359] tracking-[0.07em]">
        {title}
      </p>
      <Image
        src="/MV/waves.svg"
        width={608}
        height={19}
        alt=""
        className="w-full h-auto"
      />
    </div>
  );
};

export default SectionTitle;
