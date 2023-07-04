import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Container from "../Container/Container";
import { useLogoutUserMutation } from "../../redux/auth/authApi";

const Navigation = () => {
  const [logout] = useLogoutUserMutation();
  return (
    <>
      <AuthNav>
        <Container>
          <Wrapper>
            <p>Logo</p>
            <div>
              <Link to="/home" exact="true">
                Home
              </Link>
              <Link to="/profile" exact="true">
                Profile
              </Link>
              <Link to="/map" exact="true">
                Map
              </Link>
              <Link to="/blog" exact="true">
                Blog
              </Link>
              <Link to="/events" exact="true">
                Events
              </Link>
              <Link to="/apartment" exact="true">
                Search apartment
              </Link>
              <Link to="/job" exact="true">
                Job offers
              </Link>

              <Button type="button" onClick={() => logout()}>
                Log out
              </Button>
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
  margin-right: 33px;
  color: #333333;
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

const AuthNav = styled.div`
  background-color: #e9e7fd;
  border-bottom: 1px solid #333333;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
`;

const Button = styled.button`
  font-family: inherit;
  position: relative;
  height: 28px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background-color: #feb737;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    top 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    box-shadow: inset 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
    background-color: #e4a431;
  }

  &:hover {
    background-color: #e4a431;
  }
`;

export default Navigation;
