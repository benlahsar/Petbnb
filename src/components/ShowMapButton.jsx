import { List, Map } from "lucide-react";

export default function ShowMapButton({ onClick, showMap }) {
  return (
    <div className="fixed inset-x-0 bottom-14 flex justify-center z-[100]">
      <button
        className="bg-black text-white p-3 rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-100 shadow-md hover:shadow-lg focus:outline-none"
        onClick={onClick}
      >
        {showMap ? (
          <span className="flex items-center">
            <span className="mr-2 justify-center font-bold">Switch List</span>{" "}
            <List />
          </span>
        ) : (
          <span className="flex justify-center items-center">
            <span className="mr-2 font-bold">Switch Map</span> <Map />
          </span>
        )}
      </button>
    </div>
  );
}
