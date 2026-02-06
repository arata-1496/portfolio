import Header from "./Header";
import Footer from "./Footer";

const RootLayout = ({ pageType = "default", children }) => {
  return (
    <>
      <Header pageType={pageType} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
