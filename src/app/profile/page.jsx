import Layout from "../components/Layout";
import Profile from "../components/Profile/profile";

const ProfilePage = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat bg-contain"
      style={{
        backgroundImage: 'url("/MV/wave-brower.svg")',
        backgroundPosition: "top 200px center",
      }}
    >
      <Layout pageType="other">
        <Profile />
      </Layout>
    </div>
  );
};

export default ProfilePage;
