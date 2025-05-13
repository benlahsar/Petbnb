import { PawPrint, MapPin, Star } from "lucide-react";
import AnimalCategory from "./AnimalCategory";
// import DropDownCurrency from "./DropDownCurrency";
import DropDownProfile from "./DropDownProfile";
import { useNavigate } from "react-router-dom";

export default function Navbar({ showMap, selectedType, setSelectedType }) {
  const navigate = useNavigate();
  return (
    <header
      className={`font-body transition-all duration-300 z-50 ${
        showMap ? "max-h-64 shadow-md" : "max-h-60 shadow-sm"
      }`}
    >
      <nav
        className={`w-full ${
          showMap ? "p-1" : "p-3"
        } transition-all duration-300 bg-white`}
      >
        <div className="flex justify-between items-center">
          {/* Logo - Made larger */}
          <img
            src="https://res.cloudinary.com/du9af99hf/image/upload/v1739531828/assets/petbnb_images/ew0vc64kvcumjudjcmsl.png"
            alt="logo"
            className={`block ${
              showMap ? "w-36" : "w-40"
            } h-auto transition-all duration-300`}
          />

          {/* Tagline with Icons - Made much bigger */}
          <div className="flex items-center justify-center bg-gradient-to-r from-pink-100 to-pink-50 px-8 py-3 rounded-full shadow-md w-2/5">
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                <PawPrint className="text-pink-500 mr-2" size={24} />
                <span className="font-semibold text-lg text-gray-700">
                  Perfect Stays
                </span>
              </div>

              <div className="h-6 w-px bg-pink-200"></div>

              <div className="flex items-center">
                <MapPin className="text-pink-500 mr-2" size={24} />
                <span className="font-semibold text-lg text-gray-700">
                  Pet Friendly
                </span>
              </div>

              <div className="h-6 w-px bg-pink-200"></div>

              <div className="flex items-center">
                <Star className="text-pink-500 mr-2" size={24} />
                <span className="font-semibold text-lg text-gray-700">
                  Top Rated
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Host Button & Profile */}
          <div className="flex items-center space-x-4">
            <button
              className="font-bold text-lg cursor-pointer hover:text-pink-500 transition-colors"
              onClick={() => navigate("/host/home")}
            >
              Switch hosting
            </button>
            <DropDownProfile />
          </div>
        </div>
        <hr className="text-gray-200 my-2" />
        <AnimalCategory
          showMap={showMap}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </nav>
    </header>
  );
}
