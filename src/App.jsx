import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice";

function App() {
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch(login(JSON.parse(userData)));
    }
  });

  const hideNavbar = [
    "/support",
    "/settings",
    "/docs",
    "/cloud-security",
    "/code-review",
    "/repos",
  ].includes(location.pathname);

  return (
    <div className="md: flex">
      {hideNavbar && authStatus && <Navbar />}
      <Outlet />
    </div>
  );
}

export default App;
