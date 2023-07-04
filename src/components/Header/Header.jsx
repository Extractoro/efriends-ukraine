import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/auth/authSlice";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import { Outlet } from "react-router-dom";

const Header = () => {
  const isLoggedIn = useSelector(selectCurrentToken);
  return (
    <>
      <header>{isLoggedIn ? <Navigation /> : <AuthNavigation />}</header>
      <Outlet />
    </>
  );
};

export default Header;
