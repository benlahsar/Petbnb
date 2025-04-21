import React from "react";

export default function SpaceDetailsStep({ formData, updateFormData }) {
  const spaceTypes = [
    { id: "house", label: "House with yard" },
    { id: "apartment", label: "Apartment/Condo" },
    { id: "dedicated", label: "Dedicated pet facility" },
  ];

  const amenityOptions = [
    { id: "fenced-yard", label: "Fenced yard" },
    { id: "pet-door", label: "Pet door" },
    { id: "toys", label: "Toys provided" },
    { id: "food", label: "Food/treats provided" },
    { id: "crates", label: "Crates/carriers available" },
    { id: "grooming", label: "Grooming supplies" },
    { id: "first-aid", label: "Pet first aid kit" },
    { id: "camera", label: "Pet monitoring camera" },
    { id: "climate", label: "Climate controlled" },
    { id: "transport", label: "Pet transportation" },
  ];

  const handleAmenityChange = (id, checked) => {
    let updatedAmenities = [...formData.amenities];
    if (checked) {
      updatedAmenities.push(id);
    } else {
      updatedAmenities = updatedAmenities.filter((amenity) => amenity !== id);
    }
    updateFormData({ amenities: updatedAmenities });
  };

  const handleRadioChange = (event) => {
    updateFormData({ spaceType: event.target.value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Space Details</h2>
        <p className="text-gray-500 mb-6">
          Tell us about your space and what amenities you offer for pets.
        </p>
      </div>
      <div className="space-y-6">
        <div>
          <label className="mb-3 block font-medium">
            What type of space do you have?
          </label>
          <div className="space-y-2">
            {spaceTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2 mb-2">
                <input
                  type="radio"
                  id={`space-${type.id}`}
                  name="spaceType"
                  value={type.id}
                  checked={formData.spaceType === type.id}
                  onChange={handleRadioChange}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={`space-${type.id}`} className="cursor-pointer">
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label className="mb-3 block font-medium">
            What amenities do you offer?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {amenityOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`amenity-${option.id}`}
                  checked={formData.amenities.includes(option.id)}
                  onChange={(e) =>
                    handleAmenityChange(option.id, e.target.checked)
                  }
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor={`amenity-${option.id}`}
                  className="cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
