import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapPin, Star } from "lucide-react";
import ListingGallery from "../components/ListingGallery";
import ListingServices from "../components/ListingAmenities";
import BookingForm from "../components/BookingForm";
import ListingReviews from "../components/ListingReviews";
// import ListingMap from "../components/LisingMap";
import Map from "../components/Map";
import api from "../auth/api";

// Remove getMockListing

export default function ListingPage() {
  const { id } = useParams();
  const [listing, setListing] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListing() {
      try {
        const response = await api.get(`/api/listing/${id}`);
        setListing(response.data.data);
        console.log(response.data.data);
        
      } catch (error) {
        // Handle error (could redirect or show a message)
        setListing(null);
      } finally {
        setLoading(false);
      }
    }
    fetchListing();
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl py-8">
        <p>Loading...</p>
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="container mx-auto max-w-7xl py-8">
        <p>Listing not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <h1 className="text-3xl font-bold mb-2">{listing.listing_title}</h1>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="font-medium">{listing.rating || "4.9"}</span>
          <span className="text-gray-500 ml-1">
            ({listing.reviewCount || "124"} reviews)
          </span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
          <span>{listing.localisation}</span>
        </div>
        {/* {listing.instantBook && (
          <span className="inline-block px-2 py-1 text-sm bg-green-50 text-green-700 border border-green-200 rounded-md">
            Instant Book
          </span>
        )} */}
      </div>

      <ListingGallery photos={listing.photos} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between pb-6 border-b">
            <div>
              <h2 className="text-xl font-semibold">
                Hosted by {listing.host?.name || "Nizar"}
                {listing.host?.isSuperhost && (
                  <span className="ml-2 inline-block px-2 py-1 text-sm bg-rose-50 text-rose-700 border border-rose-200 rounded-md">
                    Superhost
                  </span>
                )}
              </h2>
              <p className="text-gray-500 mt-1">
                {(listing.petTypes || listing.pet_type || []).join(", ")} · Max {listing.maxPets || listing.max_pets || 3} pets
              </p>
            </div>
            <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200">
              <img
                src={listing.host?.image || "/placeholder.svg"}
                alt={listing.host?.name || "Host"}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>

          <div className="py-6 border-b">
            <h2 className="text-xl font-semibold mb-4">About this space</h2>
            <p className="text-gray-700 whitespace-pre-line">
              {listing.description}
            </p>
          </div>

          <div className="py-6 border-b">
            <h2 className="text-xl font-semibold mb-4">
              What this place offers
            </h2>
            <ListingServices services={listing.services} />
          </div>

          <div className="py-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <Map style="aspect-[16/9] z-10 overflow-hidden rounded-lg" />
            <p className="mt-2 text-gray-500">
              Exact location provided after booking for safety reasons.
            </p>
          </div>

          <div className="py-6">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="flex items-center mb-6">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-2" />
              <span className="font-medium text-lg">{listing.rating || "4.9"}</span>
              <span className="text-gray-500 ml-1">
                · {listing.reviewCount || "124"} reviews
              </span>
            </div>
            <ListingReviews listingId={listing.id} />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-baseline justify-between mb-4">
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">${listing.price}</span>
                <span className="text-gray-500 ml-1">/ night</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                <span>{listing.rating || "4.9"}</span>
              </div>
            </div>
            <BookingForm listing={listing} />
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            You won't be charged yet
          </div>
        </div>
      </div>
    </div>
  );
}