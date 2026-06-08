import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaEuroSign } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const JobCard = () => {
  return (
    <div className="mb-8 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="max-w-md rounded-2xl bg-[#0f1014] p-6 border border-zinc-900">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white leading-tight">
          Frontend Developer
        </h2>

        {/* Description */}
        <p className="mt-5 text-base leading-relaxed text-zinc-400">
          Showcase your commitment to diversity and inclusion by highlighting
          initiatives
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <HiOutlineLocationMarker className="text-pink-300 text-sm" />
            <span className="text-white text-sm">New York, USA</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <BsBriefcaseFill className="text-pink-300 text-sm" />
            <span className="text-white text-sm">Hybrid</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <FaEuroSign className="text-pink-300 text-sm" />
            <span className="text-white text-sm">€25–€40/hour</span>
          </div>
        </div>

        {/* Button */}
        <button className="group cursor-pointer hover:text-blue-500 mt-6 flex items-center gap-3 text-base font-medium text-blue-800">
          Apply Now
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
      <div className="max-w-md rounded-2xl bg-[#0f1014] p-6 border border-zinc-900">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white leading-tight">
          Frontend Developer
        </h2>

        {/* Description */}
        <p className="mt-5 text-base leading-relaxed text-zinc-400">
          Showcase your commitment to diversity and inclusion by highlighting
          initiatives
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <HiOutlineLocationMarker className="text-pink-300 text-sm" />
            <span className="text-white text-sm">New York, USA</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <BsBriefcaseFill className="text-pink-300 text-sm" />
            <span className="text-white text-sm">Hybrid</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <FaEuroSign className="text-pink-300 text-sm" />
            <span className="text-white text-sm">€25–€40/hour</span>
          </div>
        </div>

        {/* Button */}
        <button className="group cursor-pointer hover:text-blue-500 mt-6 flex items-center gap-3 text-base font-medium text-blue-800">
          Apply Now
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
      <div className="max-w-md rounded-2xl bg-[#0f1014] p-6 border border-zinc-900">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-white leading-tight">
          Frontend Developer
        </h2>

        {/* Description */}
        <p className="mt-5 text-base leading-relaxed text-zinc-400">
          Showcase your commitment to diversity and inclusion by highlighting
          initiatives
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-5">
          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <HiOutlineLocationMarker className="text-pink-300 text-sm" />
            <span className="text-white text-sm">New York, USA</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <BsBriefcaseFill className="text-pink-300 text-sm" />
            <span className="text-white text-sm">Hybrid</span>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1">
            <FaEuroSign className="text-pink-300 text-sm" />
            <span className="text-white text-sm">€25–€40/hour</span>
          </div>
        </div>

        {/* Button */}
        <button className="group cursor-pointer hover:text-blue-500 mt-6 flex items-center gap-3 text-base font-medium text-blue-800">
          Apply Now
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
