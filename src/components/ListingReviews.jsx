import { useState } from "react";
import { Star } from "lucide-react";

const getMockReviews = () => [
  {
    id: "1",
    author: {
      name: "Michael Brown",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "August 2023",
    rating: 5,
    comment:
      "Sarah was amazing with our dog! She sent us daily updates and photos. Our pup came home happy and tired from all the play time. Will definitely book with Sarah again.",
  },
  {
    id: "2",
    author: {
      name: "Jessica Lee",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "July 2023",
    rating: 5,
    comment:
      "Great experience! Our cat was well taken care of. The space is clean and comfortable. Sarah is very responsive and professional.",
  },
  {
    id: "3",
    author: {
      name: "David Wilson",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "June 2023",
    rating: 4,
    comment:
      "Our two dogs had a wonderful stay. The fenced yard was perfect for them to run around. Sarah was attentive and followed all our care instructions.",
  },
  {
    id: "4",
    author: {
      name: "Emily Chen",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "May 2023",
    rating: 5,
    comment:
      "Sarah took excellent care of our senior dog who needs medication twice a day. She was very patient and understanding. Highly recommend!",
  },
  {
    id: "5",
    author: {
      name: "Robert Taylor",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "April 2023",
    rating: 5,
    comment:
      "This was our first time using a pet sitter, and we couldn't be happier. Our puppy was well-cared for, and Sarah's home is very pet-friendly.",
  },
  {
    id: "6",
    author: {
      name: "Amanda Garcia",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "March 2023",
    rating: 4,
    comment:
      "Good experience overall. Sarah was accommodating with our last-minute booking. Our cat seemed comfortable when we picked her up.",
  },
];

export default function ListingReviews({ listingId }) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const reviews = getMockReviews();

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 4);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedReviews.map((review) => (
          <div key={review.id} className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200">
                <img
                  src={review.author.image || "/placeholder.svg"}
                  alt={review.author.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div>
                <div className="font-medium">{review.author.name}</div>
                <div className="text-sm text-gray-500">{review.date}</div>
              </div>
            </div>

            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>

      {reviews.length > 4 && (
        <button
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="mt-6 px-4 py-2 border rounded-md text-sm hover:bg-gray-100 transition"
        >
          {showAllReviews ? "Show less" : `Show all ${reviews.length} reviews`}
        </button>
      )}
    </div>
  );
}
