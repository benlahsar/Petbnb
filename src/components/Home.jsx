import { useState } from "react";
import { Link } from "react-router-dom";
import listingsData from "./data/listings";
import { Star } from "lucide-react"; // Icône étoile pour le rating

function Home() {
  const [listings] = useState(listingsData);

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mt-60">
      {listings.map((listing) => (
        <div
          key={listing.id}
          className="border rounded-lg shadow-lg overflow-hidden bg-gray-100 hover:shadow-xl transition"
        >
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold">{listing.title}</h2>
            <p className="text-indigo-800">{listing.location}</p>

            {/* Prix et Rating alignés */}
            <div className="flex justify-between items-center mt-2">
              <p className="text-xl font-bold text-rose-500">
                {listing.price} € par nuit
              </p>

              {/* Rating bien aligné à droite */}
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-semibold text-gray-700">
                  {listing.rating?.toFixed(1) || "N/A"}
                </span>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="mt-4 flex justify-between">
              <Link
                to={`/listing/${listing.id}`}
                className="mt-3 inline-block text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                Voir plus →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}

export default Home;
