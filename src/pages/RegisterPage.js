import styled from "styled-components";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import Footer from "../components/Footer/Footer";

const RegisterPage = () => {
  return (
    <>
      <ContainerL>
        <RegisterForm />
        <Image
          src={require("../images/friends.png")}
          alt="friends"
          width="940"
        />
      </ContainerL>
      <Footer />
    </>
  );
};

const ContainerL = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 82.5vh;
  align-items: center;
`;

const Image = styled.img`
  width: 940px;
  object-fit: cover;
`;

export default RegisterPage;
