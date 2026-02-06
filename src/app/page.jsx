import Layout from "./components/Layout";
import Profile from "./components/Profile/profile";
import WorksSection from "./components/Works/WorksSection";
import Contact from "./components/contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="main-wave" />
      <Layout pageType="main">
        {/* <Profile /> */}
        {/* <WorksSection /> */}
        {/* <Contact /> */}
      </Layout>
    </div>
  );
};

export default Home;
