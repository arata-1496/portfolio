import Layout from "../components/Layout";
import Contact from "../components/contact/Contact";

const ContactPage = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-contain"
      style={{
        backgroundImage: 'url("/MV/wave-brower.svg")',
        backgroundPosition: "top 200px center",
      }}
    >
      <Layout pageType="other">
        <Contact />
      </Layout>
    </div>
  );
};

export default ContactPage;
