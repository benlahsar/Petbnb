import React, {useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix the default icon issue in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
});


// Custom price marker component
const PriceMarker = ({position, price}) => {
    useEffect(() => {
        // Clean up on unmount
        return () => {
        };
    }, []);

    const priceIcon = L.divIcon({
        className: "", // Empty to avoid default Leaflet styles
        html: `<div class="bg-white px-2 py-1 border border-gray-400 rounded-full text-center shadow-md font-bold">\$${price}</div>`,
        iconSize: [60, 30],
        iconAnchor: [30, 15],
    });

    return (
        <Marker position={position} icon={priceIcon}>
            <Popup>Accommodation for ${price} per night</Popup>
        </Marker>
    );
};

// Overlay components
const MapOverlays = () => {
    return (
        <>
            <div
                className="absolute top-20 left-1/2 -translate-x-1/2 bg-white py-2 px-4 rounded-full shadow-md z-40 font-medium">
                Explore rates near you
            </div>
            <div
                className="absolute top-40 left-1/2 -translate-x-1/2 text-2xl font-bold z-40 text-gray-800 drop-shadow-sm">
                Marrakesh
            </div>
        </>
    );
};

const Map = ({style}) => {
    // Marrakesh center coordinates
    const center = [31.6295, -7.9811];

    // Sample accommodation data with prices and positions
    const accommodations = [
        {id: 1, price: 41, position: [31.66, -7.96]},
        {id: 2, price: 40, position: [31.64, -8.00]},
        {id: 3, price: 39, position: [31.64, -7.98]},
        {id: 4, price: 49, position: [31.63, -7.98]},
        {id: 5, price: 37, position: [31.64, -7.93]},
        {id: 6, price: 67, position: [31.61, -7.99]},
        {id: 7, price: 52, position: [31.62, -7.97]},
        {id: 8, price: 95, position: [31.62, -7.96]},
        {id: 9, price: 76, position: [31.62, -7.95]},
        {id: 10, price: 67, position: [31.60, -7.96]},
        {id: 11, price: 68, position: [31.60, -7.97]},
        {id: 12, price: 60, position: [31.58, -7.97]},
        {id: 13, price: 62, position: [31.58, -7.98]},
        {id: 14, price: 61, position: [31.58, -7.96]},
        {id: 15, price: 81, position: [31.55, -7.97]},
    ];

    return (
        <MapContainer
            center={center}
            zoom={12}
            className={style}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {/* Overlays */}
            <MapOverlays/>

            {/* Display all price markers */}
            {accommodations.map((acc) => (
                <PriceMarker key={acc.id} position={acc.position} price={acc.price}/>
            ))}
        </MapContainer>
    );
};

export default Map;
