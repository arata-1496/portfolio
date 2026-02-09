import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ pageType = "default", children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header - 1920px制限 */}
      <div className="w-full">
        <div className="max-w-[1920px] mx-auto">
          <Header pageType={pageType} />
        </div>
      </div>
      {/* Main - 1920px制限 */}
      <main className="flex-1">
        <div className="max-w-[1920px] mx-auto">{children}</div>
      </main>

      {/* Footer - 全幅 */}
      <Footer />
    </div>
  );
};

export default Layout;
