import { MapPin, Star } from "lucide-react";
import ListingGallery from "../components/ListingGallery";
import ListingAmenities from "../components/ListingAmenities";
import BookingForm from "../components/BookingForm";
import ListingReviews from "../components/ListingReviews";
import ListingMap from "../components/LisingMap";

const getMockListing = () => ({
  id: "123",
  title: "Cozy Pet Haven in Downtown",
  description:
    "Welcome to our pet-friendly home! We offer a spacious and comfortable environment for your furry friends. Our fenced backyard provides plenty of space for dogs to run and play. We have experience with all types of pets and can provide specialized care based on your pet's needs. Your pet will be treated like family during their stay with us!",
  location: "San Francisco, CA",
  petTypes: ["Dogs", "Cats", "Small Pets"],
  spaceType: "House with yard",
  amenities: [
    "Fenced yard",
    "Pet door",
    "Toys provided",
    "Food/treats provided",
    "Crates/carriers available",
    "Grooming supplies",
    "Pet first aid kit",
    "Pet monitoring camera",
    "Climate controlled",
    "Pet transportation",
  ],
  photos: new Array(5).fill("/placeholder.svg?height=600&width=800"),
  price: 45,
  rating: 4.9,
  reviewCount: 124,
  host: {
    id: "456",
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=200&width=200",
    joinedDate: "2020-05-15",
    responseRate: 98,
    isSuperhost: true,
  },
  availableDates: {
    start: new Date("2023-06-01"),
    end: new Date("2023-12-31"),
  },
  maxPets: 3,
  instantBook: true,
  coordinates: {
    lat: 37.7749,
    lng: -122.4194,
  },
});

export default function ListingPage() {
  const listing = getMockListing();

  return (
    <div className="container mx-auto max-w-7xl py-8">
      <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>

      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span className="font-medium">{listing.rating}</span>
          <span className="text-gray-500 ml-1">
            ({listing.reviewCount} reviews)
          </span>
        </div>
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1 text-gray-500" />
          <span>{listing.location}</span>
        </div>
        {listing.instantBook && (
          <span className="inline-block px-2 py-1 text-sm bg-green-50 text-green-700 border border-green-200 rounded-md">
            Instant Book
          </span>
        )}
      </div>

      <ListingGallery photos={listing.photos} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <div className="flex items-start justify-between pb-6 border-b">
            <div>
              <h2 className="text-xl font-semibold">
                Hosted by {listing.host.name}
                {listing.host.isSuperhost && (
                  <span className="ml-2 inline-block px-2 py-1 text-sm bg-rose-50 text-rose-700 border border-rose-200 rounded-md">
                    Superhost
                  </span>
                )}
              </h2>
              <p className="text-gray-500 mt-1">
                {listing.petTypes.join(", ")} · Max {listing.maxPets} pets
              </p>
            </div>
            <div className="h-14 w-14 rounded-full overflow-hidden bg-gray-200">
              <img
                src={listing.host.image || "/placeholder.svg"}
                alt={listing.host.name}
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
            <ListingAmenities amenities={listing.amenities} />
          </div>

          <div className="py-6 border-b">
            <h2 className="text-xl font-semibold mb-4">Location</h2>
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <ListingMap
                coordinates={listing.coordinates}
                location={listing.location}
              />
            </div>
            <p className="mt-2 text-gray-500">
              Exact location provided after booking for safety reasons.
            </p>
          </div>

          <div className="py-6">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            <div className="flex items-center mb-6">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-2" />
              <span className="font-medium text-lg">{listing.rating}</span>
              <span className="text-gray-500 ml-1">
                · {listing.reviewCount} reviews
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
                <span>{listing.rating}</span>
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
