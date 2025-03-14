import {Search} from "lucide-react";
import AnimalCategory from "./AnimalCategory";
import DropDownCurrency from "./DropDownCurrency";
import DropDownProfile from "./DropDownProfile";
import {useNavigate} from "react-router-dom";

export default function Navbar({showMap}) {
    const navigate = useNavigate()
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
                    <img
                        src="https://res.cloudinary.com/du9af99hf/image/upload/v1739531828/assets/petbnb_images/ew0vc64kvcumjudjcmsl.png"
                        alt="logo"
                        className={`block ${showMap ? "w-28" : "w-32"} h-auto transition-all duration-300`}
                    />
                    <div
                        className="flex justify-between w-1/2 items-center p-1 border border-gray-300 rounded-full shadow-md">
                        <input
                            type="text"
                            placeholder="Start your search"
                            className="mx-2 w-full focus:outline-0"
                        />
                        <div className="bg-pink-500 rounded-full p-1.5">
                            <Search className="text-white" size={20}/>
                        </div>
                    </div>
                    <div className="w-[15%] flex justify-between">
                        <button className="font-bold cursor-pointer" onClick={() => navigate("/host/home")}>Switch
                            hosting
                        </button>
                        <DropDownCurrency/>
                        <DropDownProfile/>
                    </div>
                </div>
                <hr className="text-gray-200"/>
                <AnimalCategory showMap={showMap}/>
            </nav>
        </header>
    );
}
