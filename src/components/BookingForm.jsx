"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format, differenceInDays } from "date-fns";

export default function BookingForm({ listing }) {
  const [date, setDate] = useState({
    from: undefined,
    to: undefined,
  });

  const [numPets, setNumPets] = useState("1");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false);
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false);

  const handleBooking = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Booking successful! You would be redirected to a confirmation page."
      );
    }, 1500);
  };

  // Calculate total nights and price
  const nights =
    date.from && date.to ? differenceInDays(date.to, date.from) : 0;
  const subtotal = nights * listing.price;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + serviceFee;

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return (
      date < today ||
      date < listing.availableDates.start ||
      date > listing.availableDates.end
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-1">
            <label className="text-sm font-medium">Check-in</label>
            <div className="relative">
              <button
                onClick={() => setShowCheckInCalendar(!showCheckInCalendar)}
                className={cn(
                  "w-full flex items-center justify-start text-left border border-gray-300 rounded-md px-3 py-2 text-sm",
                  !date.from && "text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date.from ? format(date.from, "MMM d, yyyy") : "Select date"}
              </button>
              {showCheckInCalendar && (
                <div className="absolute z-10 mt-1 w-auto bg-white border border-gray-200 rounded-md shadow-lg p-2">
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-medium text-gray-500"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {/* This is a simplified calendar - you might want to use a proper calendar library */}
                    {Array.from({ length: 35 }).map((_, i) => {
                      const dateObj = new Date();
                      dateObj.setDate(dateObj.getDate() + i - 15);
                      const disabled = isDateDisabled(dateObj);
                      return (
                        <button
                          key={i}
                          disabled={disabled}
                          onClick={() => {
                            setDate({ from: dateObj, to: date.to });
                            setShowCheckInCalendar(false);
                          }}
                          className={cn(
                            "h-8 w-8 rounded-full text-sm flex items-center justify-center",
                            disabled && "text-gray-300 cursor-not-allowed",
                            date.from &&
                              date.from.getDate() === dateObj.getDate() &&
                              date.from.getMonth() === dateObj.getMonth() &&
                              date.from.getFullYear() ===
                                dateObj.getFullYear() &&
                              "bg-blue-500 text-white"
                          )}
                        >
                          {dateObj.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">Check-out</label>
            <div className="relative">
              <button
                onClick={() => setShowCheckOutCalendar(!showCheckOutCalendar)}
                className={cn(
                  "w-full flex items-center justify-start text-left border border-gray-300 rounded-md px-3 py-2 text-sm",
                  !date.to && "text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date.to ? format(date.to, "MMM d, yyyy") : "Select date"}
              </button>
              {showCheckOutCalendar && (
                <div className="absolute z-10 mt-1 w-auto bg-white border border-gray-200 rounded-md shadow-lg p-2">
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <div
                        key={day}
                        className="text-center text-xs font-medium text-gray-500"
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 35 }).map((_, i) => {
                      const dateObj = new Date();
                      dateObj.setDate(dateObj.getDate() + i - 15);
                      const disabled = isDateDisabled(dateObj);
                      return (
                        <button
                          key={i}
                          disabled={disabled}
                          onClick={() => {
                            setDate({ from: date.from, to: dateObj });
                            setShowCheckOutCalendar(false);
                          }}
                          className={cn(
                            "h-8 w-8 rounded-full text-sm flex items-center justify-center",
                            disabled && "text-gray-300 cursor-not-allowed",
                            date.to &&
                              date.to.getDate() === dateObj.getDate() &&
                              date.to.getMonth() === dateObj.getMonth() &&
                              date.to.getFullYear() === dateObj.getFullYear() &&
                              "bg-blue-500 text-white"
                          )}
                        >
                          {dateObj.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium">Number of pets</label>
          <select
            value={numPets}
            onChange={(e) => setNumPets(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="1">1 pet</option>
            <option value="2">2 pets</option>
            <option value="3">3 pets</option>
          </select>
        </div>
      </div>

      {nights > 0 && (
        <div className="space-y-2 pt-2">
          <div className="flex justify-between">
            <span>
              ${listing.price} × {nights} nights
            </span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between pt-2 border-t font-semibold">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}

      <button
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={!date.from || !date.to || isSubmitting}
        onClick={handleBooking}
      >
        {isSubmitting ? "Processing..." : "Reserve"}
      </button>
    </div>
  );
}

// Helper function to conditionally join class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
