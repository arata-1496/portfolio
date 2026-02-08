import Layout from "../components/Layout";
import SectionTitle from "../components/topPage/SectionTitle";
import WorksList from "../components/Works/WorksList";

const WorksPage = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-contain bg-top"
      style={{
        backgroundImage: 'url("/MV/wave-brower.svg")',
        backgroundPosition: "top 200px center", // ヘッダー分下げる
      }}
    >
      <Layout pageType="other">
        <section className="mt-32 md:mt-40 lg:mt-48 w-full relative pt-24 md:pt-32 lg:pt-40">
          <SectionTitle title="WORKS" align="right" />
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <WorksList />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default WorksPage;
