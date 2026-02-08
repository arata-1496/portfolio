import Layout from "./components/Layout";
import Profile from "./components/Profile/profile";
import WorksSection from "./components/Works/WorksSection";
import Contact from "./components/contact/Contact";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative">
      {/* メインビジュアル */}
      <div
        className="relative w-full h-[80vh] sm:h-[70vh] md:h-[80vh] lg:h-screen flex items-center justify-center bg-no-repeat bg-cover md:bg-contain"
        style={{
          backgroundImage: 'url("/MV/wave-brower.svg")',
          backgroundPosition: "center",
        }}
      >
        {/* 中央のロゴ */}
        <Image
          src="/MV/MV-text.svg"
          width={416}
          height={200}
          alt="Portfolio Logo"
          className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-[600px] 2xl:w-[700px] max-w-4xl h-auto"
          priority
        />
      </div>

      <Layout pageType="main">
        <Profile />
        <WorksSection />
        <Contact />
      </Layout>
    </div>
  );
};

export default Home;
