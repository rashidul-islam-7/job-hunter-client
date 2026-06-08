import React from "react";
import JobsCard from "./JobsCard";

const Jobs = () => {
  return (
    <div className="px-5 sm:px-8 md:px-16">
      <div className="mt-20 md:mt-30 mb-15 text-center">
        <div className="flex justify-center items-center gap-3">
          <span className="h-2 w-2 bg-blue-500"></span>
          <span className="uppercase ">Smart job discovery</span>
          <span className="h-2 w-2 bg-blue-500"></span>
        </div>
        <h1 className="text-3xl font-bold text-center max-w-sm mx-auto mt-2">The roles you'd never find by searching</h1>
      </div>
      <JobsCard />
      <div>
        <button className="mb-16 cursor-pointer mx-auto block rounded-xl bg-gray-50 px-5 py-2 text-black font-medium hover:bg-gray-700 hover:text-white transition-colors duration-300">
          View All Jobs
        </button>
      </div>
    </div>
  );
};

export default Jobs;
