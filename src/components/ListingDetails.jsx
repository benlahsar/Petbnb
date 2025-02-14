import { useParams } from 'react-router-dom';
import listings from './data/listings';

function ListingDetails() {
  const { id } = useParams();
  const listing = listings.find(l => l.id === parseInt(id));

  if (!listing) {
    return <h2>Annonce non trouvée</h2>;
  }

  return (
    <div className="p-4 bg-stone-200">
      <img src={listing.image} alt={listing.title} className="w-full h-96 object-cover rounded-md" />
      <h1 className="text-2xl font-bold mt-4">{listing.title}</h1>
      <p className="text-indigo-800">{listing.location}</p>
      <p className="font-bold text-rose-500 ">{listing.price} € par nuit</p>
      <p className="mt-8">{listing.description}</p>
    </div>
  );
}

export default ListingDetails;
