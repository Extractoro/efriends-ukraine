import styled from "styled-components";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import NewsTypes from "../components/NewsTypes/NewsTypes";

const HomePage = () => {
  return (
    <Div>
      <Container>
        <NewsTypes />
      </Container>
      <Foot />
    </Div>
  );
};

const Div = styled.div`
  position: relative;
`;

const Foot = styled(Footer)`
  position: relative;
`;

export default HomePage;
