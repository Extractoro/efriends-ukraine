import styled from "styled-components";
import Container from "../Container/Container";
import { FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Foot>
      <Container>
        <Wrapper>
          <p>Logo</p>
          <div>
            <Link href="#">Політика конфіденційності</Link>
            <Link href="#">Контакти</Link>
            <Link href="#">Партнери</Link>
          </div>
          <Buttons>
            <Button href="#">
              <FaFacebook style={{ fontSize: "22px" }} />
              {/* <ButtonText>Facebook</ButtonText> */}
            </Button>
            <Button href="#">
              <FaTelegram style={{ fontSize: "22px" }} />
              {/* <ButtonText>Telegram</ButtonText> */}
            </Button>
            <Button href="#">
              <FaInstagram style={{ fontSize: "22px" }} />
              {/* <ButtonText>Instagram</ButtonText> */}
            </Button>
          </Buttons>
        </Wrapper>
      </Container>
    </Foot>
  );
};

const Foot = styled.div`
  position: relative;
  background-color: #543787;
  width: 100%;
  height: 83px;
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.a`
  display: flex;
  margin-right: 20px;
  width: 40px;
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  color: white;
  background-color: rgb(254, 183, 55);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1px, rgba(0, 0, 0, 0.14) 0px 1px 1px,
    rgba(0, 0, 0, 0.2) 0px 2px 1px;
  align-items: center;
  justify-content: center;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.75);
    background-color: #e4a431;
  }

  &:hover {
    background-color: #e4a431;
    top: 1px;
  }
`;

const Link = styled.a`
  position: relative;
  font-size: 16px;
  line-height: 1.6;
  margin-right: 40px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: 0;
  }

  &:hover {
    color: #feb737;
  }

  &:focus {
    color: #feb737;
    top: 1px;
  }
`;

export default Footer;
