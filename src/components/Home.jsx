import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import listingsData from "./data/listings";
import { Star } from "lucide-react";
import api from "../auth/api";

const typeMap = {
  dog: "chien",
  cat: "chat",
  bird: "oiseau",
  fish: "poisson",
  turtle: "tortue",
  rabbit: "lapin",
};

function Home({ selectedType }) {
  const [listings, setListings] = useState([]);

  async function getListings() {
    const response = await api.get("/api/listing-index");
    setListings(Array.isArray(response.data) ? response.data : []);
  }

  useEffect(() => {
    getListings();
  }, []);

  // Filter listings by selectedType
  const filteredListings = selectedType
    ? listings.filter((listing) => {
        // Parse pet_type if it's a string
        let petTypes = listing.pet_type;
        if (typeof petTypes === "string") {
          try {
            petTypes = JSON.parse(petTypes);
          } catch {
            petTypes = [];
          }
        }
        // Use the mapped type for filtering
        if (!Array.isArray(petTypes)) petTypes = [];
        return petTypes.includes(typeMap[selectedType]);
      })
    : listings;

  return (
    <>
      <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
        {filteredListings.map((listing) => (
          <div
            key={listing.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="relative">
              <img
                src={listing.photos[0]}
                alt={listing.listing_title}
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <div className="mb-3">
                <h2 className="font-medium text-lg text-gray-900">
                  {listing.listing_title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  {listing.localisation}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">
                    <span className="text-gray-900">{listing.price} $</span>{" "}
                    <span className="text-gray-500 text-sm font-normal">
                      / nuit
                    </span>
                  </p>
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-medium">
                      {(Math.random() * 4 + 1).toFixed(1)}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/listing/${listing.id}`}
                  className="mt-4 inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white py-2.5 px-4 rounded-lg transition-colors duration-300 text-sm font-medium"
                >
                  Voir détails
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default Home;
