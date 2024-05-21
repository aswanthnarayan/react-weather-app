import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const InputSection = ({ setCity, toggleToMetric, toggleToImperial }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue.trim()) {
      setCity(inputValue);
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white mb-3">
      <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-0">
        <input
          className="p-2 rounded-md focus:outline-none text-gray-500 w-full md:w-auto"
          type="text"
          placeholder="Search by city..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <BiSearch
          size={30}
          color="white"
          className="hover:scale-110 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      <div className="flex items-center gap-8">
        <div className="flex justify-around text-2xl cursor-pointer">
          <p onClick={toggleToMetric}>C</p>
          <p className="mx-4">|</p>
          <p onClick={toggleToImperial}>F</p>
        </div>
      </div>
    </div>
  );
};

export default InputSection;
