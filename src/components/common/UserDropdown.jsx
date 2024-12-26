import { useState } from "react";
import assets from "../../assets/assets";

const UserDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(user);

  const options = [user];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left text-gray-700 focus:outline-none flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <span className="truncate">{selectedOption}</span>
        <assets.icons.angleDownIcon
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
            + Add orgs
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
