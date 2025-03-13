import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Search } from "lucide-react";
import Map from "./Map.jsx";
import {unstable_ViewTransition as ViewTransition} from 'react'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function AtrractSection() {
  const position = [31.6295, -7.9811];

  return (
    <section className="flex items-center justify-between mx-40 mt-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl text-center font-bold flex flex-col justify-center items-center">
          Your care could <br /> make $280 <br /> on Petbnb
        </h1>
        <p className="text-center font-semibold my-12">7 nights . 40$/night</p>
        <button className="flex items-center w-96 border border-gray-300 rounded-full p-4">
          <Search className="text-pink-500 mr-5" />
          City
        </button>
      </div>
      <Map style="h-screen w-1/2 rounded-xl shadow-md shadow-gray-500 focus:outline-0" />
    </section>
  );
}
