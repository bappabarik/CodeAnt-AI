import { NavLink } from "react-router-dom";
import assets from "../../assets/assets";

const NavLinks = () => {
  const navItems = [
    {
      slug: "/repos",
      icon: <assets.icons.homeIcon className="text-2xl" />,
      label: "Repositories",
    },
    {
      slug: "/code-review",
      icon: <assets.icons.codeIcon className="text-2xl" />,
      label: "AI Code Review",
    },
    {
      slug: "/cloud-security",
      icon: <assets.icons.cloudIcon className="text-2xl" />,
      label: "Cloud Security",
    },
    {
      slug: "/docs",
      icon: <assets.icons.bookIcon className="text-xl" />,
      label: "How to Use",
    },
    {
      slug: "/settings",
      icon: <assets.icons.settingsIcon className="text-xl" />,
      label: "Settings",
    },
  ];

  return (
    <ul className="mt-5">
      {navItems.map(({ slug, icon, label }) => (
        <li key={slug}>
          <NavLink
            to={slug}
            className={({ isActive }) =>
              `${isActive ? "bg-[rgba(21,112,239,1)] text-white hover:bg-[rgba(21,112,239,1)]" : "hover:bg-gray-100"} w-full font-bold rounded-md px-4 py-3 text-gray-700 focus:outline-none flex gap-2 items-center justify-left`
            }
          >
            {icon}
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
