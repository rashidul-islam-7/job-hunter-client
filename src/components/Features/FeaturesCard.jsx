"use client";

import {
  FiSearch,
  FiBarChart2,
  FiBookmark,
  FiMousePointer,
  FiFileText,
  FiTrendingUp,
} from "react-icons/fi";

import { BsBuildings } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi";

const features = [
  {
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
    icon: FiSearch,
  },
  {
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
    icon: FiBarChart2,
  },
  {
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
    icon: BsBuildings,
  },
  {
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
    icon: FiBookmark,
  },
  {
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
    icon: FiMousePointer,
  },
  {
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
    icon: FiFileText,
  },
  {
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
    icon: HiOutlineCube,
  },
  {
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
    icon: FiTrendingUp,
  },
];

const FeatureCard = () => {
  return (
    <section className="bg-[#0d0e14] ">
      <div >
        <div className="grid gap-y-10 gap-x-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div key={index} className="flex items-start gap-3 group">
                {/* Icon Box */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-linear-to-b from-black to-zinc-900 shadow-lg transition-all duration-300 group-hover:border-fuchsia-400/40">
                  <Icon className="text-2xl text-fuchsia-300" />
                </div>

                {/* Content */}
                <div>
                  <h3 className=" font-medium text-white">{feature.title}</h3>

                  <p className="mt-0.5 text-sm leading-5 text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
