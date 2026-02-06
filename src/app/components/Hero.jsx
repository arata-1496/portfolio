import "./Hero.css";

const Hero = ({ pageType }) => {
  return (
    <div>
      {pageType === "main" ? (
        <div className="background-wave"></div>
      ) : (
        <div className="background-wave"></div>
      )}
    </div>
  );
};

export default Hero;
