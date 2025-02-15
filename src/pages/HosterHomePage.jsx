import Navbar from "../components/Navbar";
import ShowMapButton from "../components/ShowMapButton";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import Home from "../components/Home";

export default function HosterHomePage() {
  const [showMap, setShowMap] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleShowMap = () => {
    setShowMap((prevShowMap) => !prevShowMap);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar showMap={showMap} isScrolled={isScrolled} />
      <ShowMapButton onClick={handleShowMap} showMap={showMap} />
      {showMap ? <Map /> : <Home />}
    </>
  );
}
