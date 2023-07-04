import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "../Container/Container";

const AuthNavigation = () => {
  return (
    <>
      <AuthNav>
        <Container>
          <Wrapper>
            <p>Logo</p>
            <div>
              <Link to="/register" exact="true">
                Зареєструватись
              </Link>
              <Link to="/login" exact="true">
                Увійти
              </Link>
            </div>
          </Wrapper>
        </Container>
      </AuthNav>
    </>
  );
};

const Link = styled(NavLink)`
  position: relative;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: 0.5;
  margin-right: 18px;
  color: #333333;
  text-decoration: none;
  padding-right: 15px;
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

const AuthNav = styled.div`
  background-color: #e9e7fd;
  border-bottom: 1px solid #333333;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

export default AuthNavigation;
