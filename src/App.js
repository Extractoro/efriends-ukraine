import Container from "./components/Container/Container";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./routers/PublicRoute";
import RegisterPage from "./pages/RegisterPage";
// import PrivateRoute from "./routers/PrivateRoute";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(authOperations.refreshCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<PublicRoute restricted />}>
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
