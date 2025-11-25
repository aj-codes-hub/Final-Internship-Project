import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuSearch } from "react-icons/lu";

const SearchComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const items = ["Apple", "Banana", "Mango", "Orange", "Watermelon"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="flex gap-[10px]">

      <div
        className={`transition-all w-full h-18 duration-300 absolute bg-gradient-to-b from-[#40444a73] to-[#04091400] left-0 top-16 ${
          isOpen ? "opacity-100 max-h-[500px] mt-3" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <input
          type="text"
          autoFocus
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
          className="w-full px-4 py-2 border-t text-2xl rounded-lg shadow outline-none"
        />

        {searchText && filteredItems.length > 0 && (
          <div className="mt-3">
            {filteredItems.map((item, index) => (
              <p
                key={index}
                className="p-3 bg-gray-900 rounded shado cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:p-[12px] xl:p-[18px] p-[14px] bg-[#FFFFFF1A] rounded-full"
      >
        {isOpen ? <RxCross1 className="md:text-[18px] xl:text-[22px] text-[11px] sm:text-[14] text-white" /> 
                : <LuSearch className="md:text-[18px] xl:text-[22px] text-[11px] sm:text-[14] text-white" />}
      </button>
      
    </div>
  );
};

export default SearchComponent;
