import Profile from "../components/Profile/profile";
import Layout from "../components/Layout";

const ProfilePage = () => {
  return (
    <Layout pageType="other">
      <div className="profile-page">
        <Profile />
      </div>
    </Layout>
  );
};

export default ProfilePage;
