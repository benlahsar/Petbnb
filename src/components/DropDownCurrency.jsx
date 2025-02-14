import { CircleDollarSign } from "lucide-react";
import React, { useState } from "react";

const DropDownCurrency = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const currencies = [
    { code: "USD", symbol: "$" },
    { code: "EUR", symbol: "€" },
    { code: "GBP", symbol: "£" },
    { code: "JPY", symbol: "¥" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency.code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`p-2 hover:bg-gray-50 transition-colors duration-200 cursor-pointer`}
      >
        <CircleDollarSign />
      </button>
      <ul
        className={`absolute -right-16 z-10 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {currencies.map((currency) => (
          <li
            key={currency.code}
            onClick={() => handleCurrencySelect(currency)}
            className={`flex items-center space-x-3 px-4 py-2 cursor-pointer hover:bg-gray-50 ${
              selectedCurrency === currency.code
                ? "bg-blue-50 text-blue-600"
                : "text-gray-700"
            }`}
          >
            <span className="text-lg">{currency.symbol}</span>
            <span className="font-medium">{currency.code}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownCurrency;
