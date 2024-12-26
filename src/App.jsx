import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import { useSelector } from "react-redux";

function App() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <div className="md: flex">
      {authStatus && <Navbar />}
      <Outlet />
    </div>
  );
}

export default App;
