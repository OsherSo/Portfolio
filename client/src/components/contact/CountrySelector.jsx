import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search } from "lucide-react";
import { countries } from "./countries"; // Make sure this path is correct

const CountrySelector = ({ register, setValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const dropdownRef = useRef(null);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setValue("countryCode", country.code);
    setIsOpen(false);
    onSelect(country);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <label
        htmlFor="countryCode"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Country Code
      </label>
      <div
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedCountry
            ? `${selectedCountry.name} (${selectedCountry.code})`
            : "Select country"}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </div>
      <input type="hidden" {...register("countryCode", { required: true })} />
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="p-2">
            <div className="relative">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md pr-10"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <ul className="max-h-60 overflow-auto">
            {filteredCountries.map((country) => (
              <li
                key={country.id}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(country)}
              >
                {country.name} ({country.code})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountrySelector;
