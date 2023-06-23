import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import authSlice from "../redux/auth/authSlice";

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSlice.selectIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace={true} />;
}
