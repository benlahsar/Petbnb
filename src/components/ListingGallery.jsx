import { useState } from "react";
// import img from "next/img";
import { Grid } from "lucide-react";

export default function ListingGallery({ photos }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhotoViewer = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <>
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[400px] md:h-[500px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-tl-xl rounded-bl-xl overflow-hidden">
            <img
              src={photos[0] || "/placeholder.svg"}
              alt="Main listing photo"
              fill
              className="object-cover cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => openPhotoViewer(photos[0])}
            />
          </div>

          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`hidden md:block relative overflow-hidden ${
                i === 1 ? "rounded-tr-xl" : i === 4 ? "rounded-br-xl" : ""
              }`}
            >
              <img
                src={photos[i] || "/placeholder.svg"}
                alt={`Listing photo ${i + 1}`}
                fill
                className="object-cover cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => openPhotoViewer(photos[i])}
              />
            </div>
          ))}
        </div>

        <button
          className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:bg-gray-100 transition"
          onClick={() => setShowAllPhotos(true)}
        >
          <Grid className="h-4 w-4" />
          Show all photos
        </button>
      </div>

      {/* Modal for all photos */}
      {showAllPhotos && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-5xl w-full p-1 sm:p-6 overflow-y-auto max-h-[90vh]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-md overflow-hidden"
                >
                  <img
                    src={photo || "/placeholder.svg"}
                    alt={`Listing photo ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                onClick={() => setShowAllPhotos(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for selected photo */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-5xl w-full p-1 sm:p-6">
            <div className="relative aspect-video">
              <img
                src={selectedPhoto || "/placeholder.svg"}
                alt="Selected photo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100 transition"
                onClick={() => setSelectedPhoto(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
