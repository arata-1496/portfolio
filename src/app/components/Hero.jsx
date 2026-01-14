import Image from "next/image";
import "./Hero.css";

const Hero = ({ pageType }) => {
  return (
    <section className="hero">
      {/* wave */}
      <Image
        src="/MV/wave-brower.svg"
        alt=""
        width={1440}
        height={600}
        className="hero-wave"
        priority
      />
      {pageType === "main" ? (
        <>
          {/* MV text */}
          <Image
            src="/MV/MV-text.svg"
            alt=""
            width={416}
            height={272}
            className="hero-title"
            priority
          />
        </>
      ) : (
        <></>
        // <Image
        //   src="/MV/icon.svg"
        //   alt="icon"
        //   width={317}
        //   height={60}
        //   className="hero-icon"
        //   priority
        // />
      )}
    </section>
  );
};

export default Hero;
