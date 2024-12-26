import { useParams } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const LoginWithProvider = () => {
  const { provider } = useParams();
  const [username, setUserName] = useState("bappabarik");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true);
    if (password.trim() !== "" && username.trim() !== "") {
      console.log(username, password);
      const user = AuthService({ username, password });

      if (user) {
        user
          .then((userData) => {
            dispatch(login(userData));
            localStorage.setItem("userData", JSON.stringify(userData));
            setActive(false);
          })
          .catch((error) => {
            alert("!Login Failed", error);
            setActive(false);
          });
      }

      setPassword("");
      setUserName("");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center m-auto bg-gray-100">
      <form
        className="bg-white flex flex-col items-center justify-center p-4 rounded-md gap-2 space-y-4 drop-shadow-[0_0_24px_rgba(8,23,53,0.16)]"
        onSubmit={handleSubmit}
      >
        <h1 className=" font-bold">{`Login with ${provider.toUpperCase()}`}</h1>
        <Input
          value={username}
          type={"text"}
          placeholder={"Username"}
          label={"Username"}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <Input
          value={password}
          type={"password"}
          placeholder={"Password"}
          label={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          label={"Authorize"}
          className={`${active && "bg-gray-300 cursor-wait"} w-full bg-gray-100 justify-center`}
          type={"submit"}
          disabled={active}
        />
      </form>
    </div>
  );
};

export default LoginWithProvider;
