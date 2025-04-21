import { Check } from "lucide-react"
import { useState } from "react"

export default function ListingAmenities({ amenities }) {
  const [showAll, setShowAll] = useState(false)

  const displayedAmenities = showAll ? amenities : amenities.slice(0, 6)

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-4">
        {displayedAmenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            <Check className="h-5 w-5 mr-3 text-green-500" />
            <span>{amenity}</span>
          </div>
        ))}
      </div>

      {amenities.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition"
        >
          {showAll ? "Show less" : `Show all ${amenities.length} amenities`}
        </button>
      )}
    </div>
  )
}
