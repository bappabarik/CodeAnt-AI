import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  console.log(userData);

  useEffect(() => {
    if (authStatus) {
      navigate("/repos");
    } else navigate("/login");
  });
};

export default Home;
