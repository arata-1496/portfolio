import Contact from "../components/contact/Contact";
import Layout from "../components/Layout";

const ContactPage = () => {
  return (
    <div className="background-wave">
      <Layout pageType="other">
        <Contact />
      </Layout>
    </div>
  );
};

export default ContactPage;
