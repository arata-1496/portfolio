import Header from "./Header";
import Footer from "./Footer";

const RootLayout = ({ pageType = "default", children }) => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1920px] mx-auto">
      <Header pageType={pageType} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
