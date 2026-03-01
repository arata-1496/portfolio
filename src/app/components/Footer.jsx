import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full relative">
      <Image
        className="w-full h-auto block"
        src="/MV/MV-wave-bottom.svg"
        alt="footer"
        width={1440}
        height={240}
        priority
      />
      <p className="absolute left-1/2 -translate-x-1/2 bottom-2 font-heebo text-xs md:text-base text-p-white whitespace-nowrap">
        © 2026 Arata Ishiguro Portfolio
      </p>
    </footer>
  );
};

export default Footer;
