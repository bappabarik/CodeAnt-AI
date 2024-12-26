import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice";

function App() {
  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  // console.log(authStatus);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch(login(JSON.parse(userData)));
    }
  });

  return (
    <div className="md: flex">
      {authStatus && <Navbar />}
      <Outlet />
    </div>
  );
}

export default App;
