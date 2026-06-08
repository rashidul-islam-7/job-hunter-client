import React from "react";
import JobCounter from "./SearchJob";
import { PiBagFill } from "react-icons/pi";
import SearchJob from "./SearchJob";

const Hero = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-16">
      {/* job counter  */}
      <div className="flex  items-center justify-center">
        <span className="h-0.5 w-15 bg-linear-to-l to-black-500 from-gray-300 " />
        <div className="flex items-center gap-2 px-5 py-1 rounded-full border-t border-x w-fit">
          <PiBagFill size={28} className="text-orange-500" />
          <span className="text-white">50,000+</span>{" "}
          <span className="text-gray-500 uppercase">new jobs this month</span>
        </div>
        <span className="h-0.5 w-15 bg-linear-to-l from-black-500 to-gray-400 " />
      </div>

      {/* hero title and description  */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-white">
          Find Your Dream Job Today
        </h1>
        <p className="text-gray-500 mt-2">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>
      </div>
      {/* search job  */}
      <SearchJob />

      {/* tags  */}
      <div className="flex justify-center items-center gap-5 mt-4 flex-wrap *:[p]:bg-gray-50/10">
        <p className="rounded-full px-3 py-1 text-sm text-gray-300 border">
          Trending Positions
        </p>
        <p className="rounded-full px-3 py-1 text-sm text-gray-300 border">
          Product Designer
        </p>
        <p className="rounded-full px-3 py-1 text-sm text-gray-300 border">
          AI Engineering
        </p>
        <p className="rounded-full px-3 py-1 text-sm text-gray-300 border">
          Dev-Ops engineer
        </p>
      </div>
    </div>
  );
};

export default Hero;
