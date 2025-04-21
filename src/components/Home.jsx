import { useState } from "react";
import { Link } from "react-router-dom";
import listingsData from "./data/listings";
import { Star } from "lucide-react"; // Icône étoile pour le rating

function Home() {
  const [listings] = useState(listingsData);

  return (
    <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
        >
          <div className="relative">
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full aspect-video object-cover"
            />
          </div>
          <div className="p-5 flex flex-col flex-grow">
            <div className="mb-3">
              <h2 className="font-medium text-lg text-gray-900">
                {listing.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">{listing.location}</p>
            </div>

            <div className="mt-auto">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg">
                  <span className="text-gray-900">{listing.price} €</span>{" "}
                  <span className="text-gray-500 text-sm font-normal">
                    / nuit
                  </span>
                </p>
                <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium">
                    {listing.rating?.toFixed(1) || "N/A"}
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
  );
}

export default Home;
