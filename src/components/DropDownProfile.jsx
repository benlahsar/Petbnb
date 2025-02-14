import { CircleUserRound } from "lucide-react";
import React, { useState } from "react";

const DropDownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
      >
        <CircleUserRound />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
          <a
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition-colors duration-200"
          >
            Login
          </a>
          <a
            className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition-colors duration-200"
          >
            Signup
          </a>
        </div>
      )}
    </div>
  );
};

export default DropDownProfile;
