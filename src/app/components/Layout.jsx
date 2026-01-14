import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";

const RootLayout = ({ pageType = "default", children }) => {
  return (
    <>
      <Header pageType={pageType} />
      <Hero pageType={pageType} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
