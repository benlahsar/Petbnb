import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function PricingStep({ formData, updateFormData }) {
  const [date, setDate] = useState({
    from: formData.availableDates.start || undefined,
    to: formData.availableDates.end || undefined,
  });

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    updateFormData({
      availableDates: {
        start: selectedDate.from || null,
        end: selectedDate.to || null,
      },
    });
  };

  // Simple date selector implementation
  // Note: In a real app, you'd need a proper date picker library
  // This is a simplified version for demonstration purposes

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Pricing & Availability</h2>
        <p className="text-gray-500 mb-6">
          Set your pricing and when your pet-sitting service will be available.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Price per night ($)
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="number"
              id="price"
              className="pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0.00"
              min={0}
              step={1}
              value={formData.price || ""}
              onChange={(e) =>
                updateFormData({ price: Number(e.target.value) })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <div className="mt-1 relative">
            <button
              type="button"
              className="w-full flex items-center justify-start px-3 py-2 border border-gray-300 rounded-md shadow-sm text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              onClick={() => setIsCalendarOpen(!isCalendarOpen)}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
              {date.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span className="text-gray-500">Select date range</span>
              )}
            </button>

            {isCalendarOpen && (
              <div className="absolute z-10 mt-1 w-96 bg-white border border-gray-200 rounded-md shadow-lg p-4">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-500">
                    In a real implementation, this would be a date range picker
                    calendar.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    For this demo, you can use these buttons to simulate
                    selection:
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md text-sm"
                    onClick={() => {
                      const today = new Date();
                      const nextWeek = new Date();
                      nextWeek.setDate(today.getDate() + 7);

                      const newDate = {
                        from: today,
                        to: nextWeek,
                      };

                      handleDateSelect(newDate);
                      setIsCalendarOpen(false);
                    }}
                  >
                    Select next 7 days
                  </button>

                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-md text-sm"
                    onClick={() => {
                      const today = new Date();
                      const nextMonth = new Date();
                      nextMonth.setMonth(today.getMonth() + 1);

                      const newDate = {
                        from: today,
                        to: nextMonth,
                      };

                      handleDateSelect(newDate);
                      setIsCalendarOpen(false);
                    }}
                  >
                    Select next 30 days
                  </button>

                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md text-sm mt-2"
                    onClick={() => setIsCalendarOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Select the date range when your space will be available for
            pet-sitting.
          </p>
        </div>
      </div>
    </div>
  );
}
