import Profile from "../components/Profile/profile";
import Layout from "../components/Layout";

const ProfilePage = () => {
  return (
    <div className="background-wave">
      <Layout pageType="other">
        <div className="profile-page">
          <Profile />
        </div>
      </Layout>
    </div>
  );
};

export default ProfilePage;
