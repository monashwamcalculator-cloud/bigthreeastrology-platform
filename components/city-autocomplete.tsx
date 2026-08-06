"use client";

import { useState, useRef, useEffect } from "react";

const LOCAL_POPULAR_CITIES = [
  // India Major & Tier 2 Cities
  "Mumbai, Maharashtra, India",
  "Delhi, India",
  "Bengaluru, Karnataka, India",
  "Hyderabad, Telangana, India",
  "Ahmedabad, Gujarat, India",
  "Chennai, Tamil Nadu, India",
  "Kolkata, West Bengal, India",
  "Surat, Gujarat, India",
  "Pune, Maharashtra, India",
  "Jaipur, Rajasthan, India",
  "Lucknow, Uttar Pradesh, India",
  "Kanpur, Uttar Pradesh, India",
  "Nagpur, Maharashtra, India",
  "Indore, Madhya Pradesh, India",
  "Thane, Maharashtra, India",
  "Bhopal, Madhya Pradesh, India",
  "Visakhapatnam, Andhra Pradesh, India",
  "Pimpri-Chinchwad, Maharashtra, India",
  "Patna, Bihar, India",
  "Vadodara, Gujarat, India",
  "Ghaziabad, Uttar Pradesh, India",
  "Ludhiana, Punjab, India",
  "Agra, Uttar Pradesh, India",
  "Nashik, Maharashtra, India",
  "Faridabad, Haryana, India",
  "Meerut, Uttar Pradesh, India",
  "Rajkot, Gujarat, India",
  "Kalyan-Dombivli, Maharashtra, India",
  "Vasai-Virar, Maharashtra, India",
  "Varanasi, Uttar Pradesh, India",
  "Srinagar, Jammu and Kashmir, India",
  "Aurangabad, Maharashtra, India",
  "Dhanbad, Jharkhand, India",
  "Amritsar, Punjab, India",
  "Navi Mumbai, Maharashtra, India",
  "Allahabad (Prayagraj), Uttar Pradesh, India",
  "Howrah, West Bengal, India",
  "Gwalior, Madhya Pradesh, India",
  "Jabalpur, Madhya Pradesh, India",
  "Coimbatore, Tamil Nadu, India",
  "Vijayawada, Andhra Pradesh, India",
  "Jodhpur, Rajasthan, India",
  "Madurai, Tamil Nadu, India",
  "Raipur, Chhattisgarh, India",
  "Kota, Rajasthan, India",
  "Guwahati, Assam, India",
  "Chandigarh, India",
  "Solapur, Maharashtra, India",
  "Hubballi-Dharwad, Karnataka, India",
  "Bareilly, Uttar Pradesh, India",
  "Moradabad, Uttar Pradesh, India",
  "Mysuru, Karnataka, India",
  "Gurugram, Haryana, India",
  "Aligarh, Uttar Pradesh, India",
  "Jalandhar, Punjab, India",
  "Tiruchirappalli, Tamil Nadu, India",
  "Bhubaneswar, Odisha, India",
  "Salem, Tamil Nadu, India",
  "Mira-Bhayandar, Maharashtra, India",
  "Warangal, Telangana, India",
  "Thiruvananthapuram, Kerala, India",
  "Bhiwandi, Maharashtra, India",
  "Saharanpur, Uttar Pradesh, India",
  "Guntur, Andhra Pradesh, India",
  "Amravati, Maharashtra, India",
  "Bikaner, Rajasthan, India",
  "Noida, Uttar Pradesh, India",
  "Jamshedpur, Jharkhand, India",
  "Bhilai, Chhattisgarh, India",
  "Cuttack, Odisha, India",
  "Firozabad, Uttar Pradesh, India",
  "Kochi, Kerala, India",
  "Bhavnagar, Gujarat, India",
  "Dehradun, Uttarakhand, India",
  "Durgapur, West Bengal, India",
  "Asansol, West Bengal, India",
  "Nanded, Maharashtra, India",
  "Kolhapur, Maharashtra, India",
  "Ajmer, Rajasthan, India",
  "Gulbarga, Karnataka, India",
  "Jamnagar, Gujarat, India",
  "Ujjain, Madhya Pradesh, India",

  // Global Major Cities
  "New York, NY, USA",
  "Los Angeles, CA, USA",
  "Chicago, IL, USA",
  "Houston, TX, USA",
  "Phoenix, AZ, USA",
  "Philadelphia, PA, USA",
  "San Antonio, TX, USA",
  "San Diego, CA, USA",
  "Dallas, TX, USA",
  "San Jose, CA, USA",
  "San Francisco, CA, USA",
  "London, United Kingdom",
  "Manchester, United Kingdom",
  "Birmingham, United Kingdom",
  "Toronto, Ontario, Canada",
  "Vancouver, British Columbia, Canada",
  "Montreal, Quebec, Canada",
  "Sydney, New South Wales, Australia",
  "Melbourne, Victoria, Australia",
  "Brisbane, Queensland, Australia",
  "Perth, Western Australia, Australia",
  "Dubai, United Arab Emirates",
  "Abu Dhabi, United Arab Emirates",
  "Singapore",
  "Tokyo, Japan",
  "Osaka, Japan",
  "Paris, France",
  "Berlin, Germany",
  "Munich, Germany",
  "Amsterdam, Netherlands",
  "Rome, Italy",
  "Madrid, Spain",
  "Barcelona, Spain",
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

export function CityAutocomplete({ value, onChange, placeholder = "Type city e.g. Mumbai, NY, London", id }: CityAutocompleteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const trimmed = value.trim();
    if (trimmed.length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    // 1. Instant Local Filter (0ms latency response)
    const localMatches = LOCAL_POPULAR_CITIES.filter((city) =>
      city.toLowerCase().includes(trimmed.toLowerCase())
    );
    setSuggestions(localMatches);
    setIsOpen(localMatches.length > 0);

    // 2. Dynamic Global Fetch via OpenStreetMap Nominatim API
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(trimmed)}&addressdetails=1&limit=8`,
          { headers: { "User-Agent": "BIGThreeAstrology/1.0" } }
        );
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            const apiCities: string[] = data.map((item: any) => {
              const name = item.address?.city || item.address?.town || item.address?.village || item.name;
              const state = item.address?.state || item.address?.region || "";
              const country = item.address?.country || "";
              const parts = [name, state, country].filter(Boolean);
              return Array.from(new Set(parts)).join(", ");
            });

            // Merge local and API cities without duplicates
            const combined = Array.from(new Set([...localMatches, ...apiCities]));
            setSuggestions(combined);
            setIsOpen(combined.length > 0);
          }
        }
      } catch (err) {
        console.error("Geocoding fetch error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
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
      <div className="relative flex items-center">
        <input
          id={id}
          type="text"
          className="input-cosmic w-full text-white placeholder-amber-200/50 pr-8"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => {
            if (value.trim().length >= 2 && suggestions.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder={placeholder}
          autoComplete="off"
        />
        {isLoading && (
          <span className="absolute right-3 text-xs text-amber-300 animate-spin">
            ⏳
          </span>
        )}
      </div>

      {/* Autocomplete Dropdown List */}
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 left-0 right-0 top-full mt-1.5 max-h-60 overflow-y-auto rounded-xl bg-[#09090b]/98 border border-amber-500/40 shadow-2xl backdrop-blur-xl divide-y divide-amber-500/20">
          {suggestions.map((city, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(city)}
              className="px-4 py-2.5 text-xs sm:text-sm text-amber-100 hover:bg-amber-500/25 hover:text-amber-300 cursor-pointer transition-colors flex items-center gap-2 font-medium"
            >
              <span className="text-amber-400 text-xs">📍</span> {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
