import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ value, setValue, placeholder = "Search" }) => {
  return (
    <div className="flex items-center justify-between border-titusLightBorder border-[1px] hover:border-titusGreenFaded rounded-lg px-3 h-full py-[2px] gap-4">
      <FaSearch className="text-titusText text-xl" />
      <input
        type="text"
        className="bg-transparent input-no-border w-full py-[9px] px-2 h-max"
        name={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Search;
