"use client";

import { useEffect, useRef } from "react";

export default function ListingMap({ coordinates, location }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const mapElement = mapRef.current;

      mapElement.style.backgroundColor = "#e5e7eb";
      mapElement.style.position = "relative";
      mapElement.style.width = "100%";
      mapElement.style.height = "100%";

      mapElement.innerHTML = `
        <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; flex-direction: column;">
          <div style="background-color: #ef4444; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div style="margin-top: 8px; background-color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
            ${location}
          </div>
        </div>
        <div style="position: absolute; bottom: 10px; right: 10px; background-color: white; padding: 4px; border-radius: 2px; font-size: 10px; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
          Map data © PetBnB
        </div>
      `;
    }
  }, [coordinates, location]);

  return (
    <div ref={mapRef} className="w-full h-full rounded-lg overflow-hidden" />
  );
}
