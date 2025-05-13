import { CircleUserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../auth/api";

const DropDownProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = async () => {
    await api.post("/logout");
    setUser(null);
    navigate("/auth/login");
  };

  const getUser = async () => {
    const { data } = await api.get("/api/user");
    setUser(data);
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  const navigate = useNavigate();

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
          {user ? (
            <>
              <span className="block px-4 py-2 text-gray-700">
                Hello, {user.name}
              </span>
              <a
                onClick={logout}
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Logout
              </a>
            </>
          ) : (
            <>
              <a
                onClick={() => navigate("/auth/login")}
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Login
              </a>
              <a
                onClick={() => navigate("/auth/register")}
                className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Signup
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDownProfile;
