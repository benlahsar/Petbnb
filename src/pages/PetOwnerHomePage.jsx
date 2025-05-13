import Navbar from "../components/Navbar";
import ShowMapButton from "../components/ShowMapButton";
import { useState } from "react";
import Map from "../components/Map";
import Home from "../components/Home.jsx";

export default function PetOwnerHomePage() {
  const [showMap, setShowMap] = useState(false);
  const [selectedType, setSelectedType] = useState(""); // Add this line

  const handleShowMap = () => {
    setShowMap((prevShowMap) => !prevShowMap);
  };
  return (
    <>
      <Navbar
        showMap={showMap}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ShowMapButton onClick={handleShowMap} showMap={showMap} />
      {showMap ? (
        <Map style="z-0 h-screen w-full" />
      ) : (
        <Home selectedType={selectedType} />
      )}
    </>
  );
}
