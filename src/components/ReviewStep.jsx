import { Check, MapPin, Calendar, DollarSign } from "lucide-react";

export default function ReviewStep({ formData }) {
  const formatPetTypes = (types) => {
    const formatted = types.map((type) => {
      switch (type) {
        case "dogs":
          return "Dogs";
        case "cats":
          return "Cats";
        case "birds":
          return "Birds";
        case "small-pets":
          return "Small Pets";
        case "reptiles":
          return "Reptiles";
        case "fish":
          return "Fish";
        default:
          return type;
      }
    });
    return formatted.join(", ");
  };

  const formatSpaceType = (type) => {
    switch (type) {
      case "house":
        return "House with yard";
      case "apartment":
        return "Apartment/Condo";
      case "dedicated":
        return "Dedicated pet facility";
      default:
        return type;
    }
  };

  const formatAmenities = (amenities) => {
    const amenityMap = {
      "fenced-yard": "Fenced yard",
      "pet-door": "Pet door",
      toys: "Toys provided",
      food: "Food/treats provided",
      crates: "Crates/carriers available",
      grooming: "Grooming supplies",
      "first-aid": "Pet first aid kit",
      camera: "Pet monitoring camera",
      climate: "Climate controlled",
      transport: "Pet transportation",
    };

    return amenities.map((a) => amenityMap[a] || a);
  };

  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Review Your Listing</h2>
        <p className="text-gray-500 mb-6">
          Please review your listing details before creating it.
        </p>
      </div>

      <div className="space-y-6">
        {/* Preview Header */}
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">
            {formData.title || "Untitled Listing"}
          </h3>
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{formData.location || "No location specified"}</span>
          </div>
        </div>

        {/* Photos */}
        {formData.photos.length > 0 ? (
          <div className="aspect-video relative rounded-lg overflow-hidden">
            <img
              src={formData.photos[0] || "/placeholder.svg"}
              alt="Listing main photo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="aspect-video bg-gray-100 flex items-center justify-center rounded-lg">
            <p className="text-gray-400">No photos uploaded</p>
          </div>
        )}

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Description</h4>
              <p className="text-gray-600">
                {formData.description || "No description provided"}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Pet Types</h4>
              <p className="text-gray-600">
                {formData.petTypes.length > 0
                  ? formatPetTypes(formData.petTypes)
                  : "No pet types selected"}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Space Type</h4>
              <p className="text-gray-600">
                {formData.spaceType
                  ? formatSpaceType(formData.spaceType)
                  : "No space type selected"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-1 text-gray-700" />
                    <span className="text-xl font-semibold">
                      ${formData.price || 0}
                    </span>
                    <span className="text-gray-500 ml-1">/ night</span>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <Calendar className="h-5 w-5 mr-2 text-gray-700" />
                  <div>
                    <p className="text-sm font-medium">Available</p>
                    <p className="text-sm text-gray-500">
                      {formData.availableDates.start &&
                      formData.availableDates.end
                        ? `${formatDate(
                            formData.availableDates.start
                          )} - ${formatDate(formData.availableDates.end)}`
                        : "No availability set"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Amenities</h4>
              <ul className="grid grid-cols-1 gap-1">
                {formData.amenities.length > 0 ? (
                  formatAmenities(formData.amenities).map((amenity, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-gray-600">{amenity}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-600">No amenities selected</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
