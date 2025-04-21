import { useState } from "react";
import { Upload, X } from "lucide-react";

export default function PhotosStep({ formData, updateFormData }) {
  const [dragActive, setDragActive] = useState(false);

  // In a real app, this would upload to a server and return URLs
  // For this demo, we'll use placeholder images
  const handleFileUpload = () => {
    const placeholderImages = [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ];
    // Add new placeholder images, avoiding duplicates
    const newPhotos = [...formData.photos];
    placeholderImages.forEach((img) => {
      if (!newPhotos.includes(img)) {
        newPhotos.push(img);
      }
    });
    updateFormData({ photos: newPhotos });
  };

  const removePhoto = (index) => {
    const newPhotos = [...formData.photos];
    newPhotos.splice(index, 1);
    updateFormData({ photos: newPhotos });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Upload Photos</h2>
        <p className="text-gray-500 mb-6">
          Great photos help pet owners feel comfortable with your space. Upload
          at least 5 photos.
        </p>
      </div>

      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          dragActive ? "border-blue-600 bg-blue-50" : "border-gray-300"
        }`}
        onDragEnter={() => setDragActive(true)}
        onDragLeave={() => setDragActive(false)}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFileUpload();
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-blue-100 p-3">
            <Upload className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium">
              Drag photos here or click to upload
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Supported formats: JPG, PNG. Max size: 10MB
            </p>
          </div>
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={handleFileUpload}
          >
            Select Photos
          </button>
        </div>
      </div>

      {formData.photos.length > 0 && (
        <div className="mt-8">
          <label className="mb-3 block text-sm font-medium text-gray-700">
            Uploaded Photos ({formData.photos.length})
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {formData.photos.map((photo, index) => (
              <div
                key={index}
                className="relative group aspect-video rounded-md overflow-hidden border"
              >
                <div className="absolute inset-0">
                  <img
                    src={photo || "/placeholder.svg"}
                    alt={`Listing photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removePhoto(index)}
                  className="absolute top-2 right-2 bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
