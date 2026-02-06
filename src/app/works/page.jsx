import Layout from "../components/Layout";
import SectionTitle from "../components/topPage/SectionTitle";
import WorksList from "../components/Works/WorksList";

const WorksPage = () => {
  return (
    <div className="background-wave">
      <Layout pageType="other">
        <section className="works">
          <SectionTitle title="WORKS" align="right" />
          <div className="works-inner">
            <WorksList />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default WorksPage;
