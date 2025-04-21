import { useState } from "react";
import BasicInfoStep from "../components/BasicInfoSteps";
import SpaceDetailsStep from "../components/SpaceDetailsStep";
import PhotosStep from "../components/PhotosStep";
import PricingStep from "../components/PricingStep;";
import ReviewStep from "../components/ReviewStep";
import ProgressSteps from "../components/ProgressSteps";
import { useNavigate } from "react-router-dom";

export default function HostingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    petTypes: [],
    location: "",
    spaceType: "",
    amenities: [],
    photos: [],
    price: 0,
    availableDates: {
      start: null,
      end: null,
    },
  });

  const steps = [
    { name: "Basic Info", component: BasicInfoStep },
    { name: "Space Details", component: SpaceDetailsStep },
    { name: "Photos", component: PhotosStep },
    { name: "Pricing", component: PricingStep },
    { name: "Review", component: ReviewStep },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = async () => {
    // In a real app, you would send the data to your backend
    // console.log("Submitting form data:", formData);
    // alert("Your listing has been created successfully!");
    navigate('/host/listings')
    // Reset form or redirect
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="container mx-auto max-w-5xl py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Become a PetBnB Host
        </h1>
        <p className="text-gray-600">
          Create your pet-sitting listing in a few easy steps
        </p>
      </div>
      <ProgressSteps
        steps={steps.map((s) => s.name)}
        currentStep={currentStep}
      />
      <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6">
          <CurrentStepComponent
            formData={formData}
            updateFormData={updateFormData}
          />
          <div className="flex justify-between mt-8">
            {currentStep > 0 && (
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                onClick={handleBack}
              >
                Back
              </button>
            )}
            {currentStep < steps.length - 1 ? (
              <button
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={handleNext}
              >
                Continue
              </button>
            ) : (
              <button
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                onClick={handleSubmit}
              >
                Create Listing
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
