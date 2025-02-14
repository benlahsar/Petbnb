import { Link } from 'react-router-dom';
import listings from './data/listings';

function Home() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {listings.map(listing => (
          <div key={listing.id} className="border rounded-lg shadow-lg overflow-hidden bg-zinc-100">
            <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{listing.title}</h2>
              <p className="text-indigo-800">{listing.location}</p>
              <p className="text-xl font-bold text-rose-500">{listing.price} € par nuit</p>
              <Link to={`/listing/${listing.id}`} className="mt-2 inline-block text-indigo-950 hover:underline">Voir plus</Link>
            </div>
          </div>
        ))}
      </div>
    );
  }

export default Home;
