import { useEffect, useState } from "react";
import api from "../auth/api";

export default function TestListing() {
  const [listings, setListings] = useState([]);

  async function getListings() {
    const response = await api.get("/api/listing-index");
    setListings(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div>
      <h1 className="text-center text-xl font-bold">
        Hello you're testing here
      </h1>
      <div>
        {listings.map((listing) => (
          <p key={listing.id}>{listing.listing_title}</p>
        ))}
      </div>
    </div>
  );
}
