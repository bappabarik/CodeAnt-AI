import { useState } from "react";
import Logo from "../common/Logo";
import UserDropdown from "../common/UserDropdown";
import NavLinks from "../common/NavLinks";
import assets from "../../assets/assets";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import useIsMobile from "../../hooks/useIsMobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isActive, setIsActive] = useState(!isMobile);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  console.log(isMobile);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="fixed z-10 bg-white top-0 md:w-64 w-full md:p-4 px-4 pt-4 md:h-screen md:flex flex-col border-[1px] border-[rgba(233,234,235,1)]">
      <div className="flex items-center justify-between">
        <Logo />
        <button
          className="md:hidden flex items-start justify-center self-start py-3 outline-none focus:outline-none"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <assets.icons.crossIcon className="text-2xl" />
          ) : (
            <assets.icons.menuIcon className="text-2xl" />
          )}
        </button>
      </div>
      {isActive && (
        <div className="w-full h-full">
          <UserDropdown user={userData.name} />
          <div className=" flex flex-col md:justify-between h-full ">
            <NavLinks />
            <ul className="md:my-8">
              <li>
                <Button
                  icon={<assets.icons.callIcon className="text-xl" />}
                  label={"Support"}
                  className={"hover:bg-gray-100 w-full"}
                  onclick={() => navigate("/support")}
                />
              </li>
              <li>
                <Button
                  icon={<assets.icons.logoutIcon className="text-xl" />}
                  label={"Logout"}
                  className={"hover:bg-gray-100 w-full"}
                  onclick={handleLogout}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
