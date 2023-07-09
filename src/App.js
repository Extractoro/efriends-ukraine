import { Routes, Route } from "react-router-dom";
import PublicRoute from "./routers/PublicRoute";
import PrivateRoute from "./routers/PrivateRoute";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import ProfilePage from "./pages/ProfilePage";
import UserEdit from "./components/UserEdit/UserEdit";
import MapLocation from "./components/MapLocation/MapLocation";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<PublicRoute restricted />}>
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/" element={<PublicRoute restricted />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile_edit" element={<UserEdit />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/map" element={<MapLocation />} />
        </Route>

        <Route path="/" element={<PrivateRoute />}>
          <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
