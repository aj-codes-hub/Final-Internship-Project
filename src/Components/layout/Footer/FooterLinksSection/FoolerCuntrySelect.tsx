import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";

const CountrySelector: React.FC = () => {
  const countries = [
    { name: "Brazil", flag: "/Flag/BR.png" },
    { name: "Pakistan", flag: "/Flags/pakistan.png" },
    { name: "India", flag: "/Flags/india.png" },
    { name: "United States", flag: "/Flags/usa.png" },
  ];

  const [selectedCountry, setSelectedCountry] = useState({
    name: "Brazil",
    flag: "/Flag/BR.png",
  });

  const [open, setOpen] = useState(false);

  return (
    <div className="relative mb-auto">

      <button
        onClick={() => setOpen(!open)}
        className="px-4 rounded-lg flex justify-between items-center bg-transparent cursor-pointer"
      >
        <div className="flex items-center md:gap-3 gap-2">
          <img
            src={selectedCountry.flag}
            alt="flag"
            className="md:w-7 w-6 md:h-5 h-4 rounded"
          />
          <span>{selectedCountry.name}</span>
        </div>

        <span className="text-[24px] text-[#5C6272] px-2">{open ? <FaCaretUp /> : <FaCaretDown />}</span>
      </button>

      {open && (
        <div className="absolute mt-2 w-full border rounded-lg bg-transparent max-h-60 overflow-auto z-50 backdrop-blur-sm">
          {countries.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200/50"
              onClick={() => {
                setSelectedCountry(item);
                setOpen(false);
              }}
            >
              <img src={item.flag} alt="flag" className="md:w-6  md:h-6 h-6 rounded" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CountrySelector;
