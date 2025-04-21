import { Check } from "lucide-react";

export default function ProgressSteps({ steps, currentStep }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200" />
      </div>
      <ul className="relative flex justify-between">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center">
            <div
              className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                index <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {index < currentStep ? (
                <Check className="h-5 w-5" aria-hidden="true" />
              ) : (
                <span>{index + 1}</span>
              )}
              <span className="sr-only">{step}</span>
            </div>
            <span
              className={`ml-2 text-sm font-medium hidden sm:block ${
                index <= currentStep ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
