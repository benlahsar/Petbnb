import { HousePlus, HousePlusIcon } from "lucide-react";

export default function WelcomeNavbar() {
  return (
    <header>
      <nav className="flex justify-between items-center p-3">
        <div className="flex items-center">
          <img
            src="/text_logo-removebg-preview.png"
            alt="logo"
            className="w-40 h-auto cursor-pointer"
          />
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold mx-4">
            Ready to Petbnb it?
          </span>
          <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-xl ml-2 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer">
            <HousePlusIcon className="mr-3" />
            <span className="font-semibold text-xl">Petbnb Set up</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
