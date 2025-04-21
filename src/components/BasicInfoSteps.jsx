export default function BasicInfoStep({ formData, updateFormData }) {
  const petTypeOptions = [
    { id: "dogs", label: "Dogs" },
    { id: "cats", label: "Cats" },
    { id: "birds", label: "Birds" },
    { id: "small-pets", label: "Small Pets (Hamsters, Guinea Pigs, etc.)" },
    { id: "reptiles", label: "Reptiles" },
    { id: "fish", label: "Fish" },
  ];

  const handlePetTypeChange = (id, checked) => {
    let updatedPetTypes = [...formData.petTypes];
    if (checked) {
      updatedPetTypes.push(id);
    } else {
      updatedPetTypes = updatedPetTypes.filter((type) => type !== id);
    }
    updateFormData({ petTypes: updatedPetTypes });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
        <p className="text-gray-500 mb-6">
          Let's start with some basic information about your pet-sitting
          service.
        </p>
      </div>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Listing Title
          </label>
          <input
            id="title"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Cozy Pet Haven in Downtown"
            value={formData.title}
            onChange={(e) => updateFormData({ title: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your pet-sitting service, space, and what makes it special..."
            rows={5}
            value={formData.description}
            onChange={(e) => updateFormData({ description: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location
          </label>
          <input
            id="location"
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., San Francisco, CA"
            value={formData.location}
            onChange={(e) => updateFormData({ location: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What types of pets can you accommodate?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {petTypeOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={option.id}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={formData.petTypes.includes(option.id)}
                  onChange={(e) =>
                    handlePetTypeChange(option.id, e.target.checked)
                  }
                />
                <label
                  htmlFor={option.id}
                  className="text-sm text-gray-700 cursor-pointer"
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
