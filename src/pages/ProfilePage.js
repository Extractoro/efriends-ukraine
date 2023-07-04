import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import UserProfile from "../components/UserProfile/UserProfile";

const ProfilePage = () => {
  return (
    <>
      <Container>
        <UserProfile />
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage;
