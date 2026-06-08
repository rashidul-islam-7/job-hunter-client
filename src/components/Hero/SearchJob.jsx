import React from "react";
import { FaSearch } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

const SearchJob = () => {
  return (
    <div className="mt-8 rounded-xl border border-gray-400 py-1 px-4 flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
        <span>
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Job title, skills or company"
          className="border-none outline-none "
        />
      </div>
      <div className="h-4 w-0.5 bg-gray-400 "></div>
      <div className="flex justify-between items-center gap-2">
        <div className="flex justify-center items-center gap-2">
          <span>
            <GrLocation />
          </span>
          <input
            type="text"
            placeholder="Job title, skills or company"
            className="border-none outline-none "
          />
        </div>
        <div className="bg-blue-500 p-3 rounded-xl -mr-3 cursor-pointer">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchJob;
