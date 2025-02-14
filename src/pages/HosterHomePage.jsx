import Navbar from "../components/Navbar";
import ShowMapButton from "../components/ShowMapButton";
import { useState } from "react";
import Map from "../components/Map";

export default function HosterHomePage() {
  const [showMap, setShowMap] = useState(false);

  const handleShowMap = () => {
    setShowMap((prevShowMap) => !prevShowMap);
  };
  return (
    <>
      <Navbar showMap={showMap}/>
      <ShowMapButton onClick={handleShowMap} showMap={showMap} />
      {showMap && <Map />}
    </>
  );
}
