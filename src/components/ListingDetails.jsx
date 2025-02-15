import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { Heart } from 'lucide-react';
import StarRating from './StarRating';
import listings from './data/listings';

function ListingDetails() {
  const { id } = useParams();
  const listing = listings.find(l => l.id === Number(id));
  const [isFavorite, setIsFavorite] = useState(false);

  if (!listing) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Annonce non trouvée</h2>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white border border-zinc-200 rounded-xl shadow-lg relative">
      <div className="relative">
        <img 
          src={listing.image} 
          alt={listing.title} 
          className="w-full h-96 object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
        />
        <button
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-rose-100 transition"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`w-6 h-6 ${isFavorite ? 'text-rose-500 fill-rose-500' : 'text-gray-400'}`} />
        </button>
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold text-zinc-900">{listing.title}</h1>
        <p className="text-sm text-slate-500">{listing.location}</p>

        {/* Affichage des étoiles */}
        <StarRating rating={listing.rating} />

        <p className="text-xl font-bold text-rose-500 mt-2">{listing.price} € par nuit</p>
        <p className="mt-4 text-zinc-700">{listing.description}</p>

        <div className="mt-6 flex justify-between items-center">
          <Link to="/" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            ← Retour aux annonces
          </Link>
         
        </div>
      </div>
    </div>
  );
}

export default ListingDetails;
