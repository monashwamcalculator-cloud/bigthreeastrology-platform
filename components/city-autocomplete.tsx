"use client";

import { useState, useRef, useEffect } from "react";

const POPULAR_CITIES = [
  // India
  "Mumbai, India",
  "Delhi, India",
  "Bengaluru, India",
  "Hyderabad, India",
  "Chennai, India",
  "Kolkata, India",
  "Pune, India",
  "Ahmedabad, India",
  "Jaipur, India",
  "Lucknow, India",
  "Chandigarh, India",
  "Surat, India",
  "Indore, India",
  "Nagpur, India",
  "Bhopal, India",
  "Patna, India",
  "Varanasi, India",
  "Kochi, India",
  "Coimbatore, India",
  "Guwahati, India",
  "Ludhiana, India",
  "Agra, India",
  "Noida, India",
  "Gurugram, India",

  // International
  "New York, USA",
  "Los Angeles, USA",
  "Chicago, USA",
  "Houston, USA",
  "San Francisco, USA",
  "London, UK",
  "Manchester, UK",
  "Toronto, Canada",
  "Vancouver, Canada",
  "Sydney, Australia",
  "Melbourne, Australia",
  "Dubai, UAE",
  "Abu Dhabi, UAE",
  "Singapore",
  "Tokyo, Japan",
  "Paris, France",
  "Berlin, Germany",
  "Kathmandu, Nepal",
  "Dhaka, Bangladesh",
  "Colombo, Sri Lanka",
  "Bangkok, Thailand",
  "Kuala Lumpur, Malaysia",
  "Auckland, New Zealand"
];

type CityAutocompleteProps = {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  id?: string;
};

export function CityAutocomplete({ value, onChange, placeholder = "e.g., Mumbai, India", id }: CityAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filteredCities, setFilteredCities] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.trim().length > 0) {
      const matches = POPULAR_CITIES.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCities(matches);
      setIsOpen(matches.length > 0);
    } else {
      setFilteredCities([]);
      setIsOpen(false);
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (city: string) => {
    onChange(city);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <input
        id={id}
        type="text"
        className="input-cosmic w-full text-white placeholder-emerald-300/40"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          if (value.trim().length > 0 && filteredCities.length > 0) {
            setIsOpen(true);
          }
        }}
        placeholder={placeholder}
        autoComplete="off"
      />

      {/* Autocomplete Dropdown List */}
      {isOpen && filteredCities.length > 0 && (
        <ul className="absolute z-50 left-0 right-0 top-full mt-1.5 max-h-56 overflow-y-auto rounded-xl bg-emerald-950/95 border border-emerald-500/40 shadow-2xl backdrop-blur-xl divide-y divide-emerald-500/20">
          {filteredCities.map((city, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(city)}
              className="px-4 py-2.5 text-xs sm:text-sm text-emerald-100 hover:bg-emerald-500/30 hover:text-amber-300 cursor-pointer transition-colors flex items-center gap-2"
            >
              <span className="text-emerald-400 text-xs">📍</span> {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
