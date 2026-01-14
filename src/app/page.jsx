import Layout from "./components/Layout";
import Profile from "./components/Profile/profile";
import WorksSection from "./components/Works/WorksSection";
import Contact from "./components/contact/Contact";

const Home = () => {
  return (
    <Layout pageType="main">
      <Profile />
      <WorksSection />
      <Contact />
    </Layout>
  );
};

export default Home;
