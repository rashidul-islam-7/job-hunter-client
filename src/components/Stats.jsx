"use client";

import {
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { FiStar } from "react-icons/fi";
import globe from "@/assets/images/globe.png";
import Image from "next/image";

const stats = [
  {
    icon: <HiOutlineBriefcase size={20} />,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: <HiOutlineBuildingOffice2 size={20} />,
    value: "12K",
    label: "Companies",
  },
  {
    icon: <HiOutlineUserGroup size={20} />,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: <FiStar size={20} />,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative  bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center">
        <Image
          src={globe}
          alt="Globe"
          className="object-cover object-center  opacity-90"
          style={{
            width: "1200px",
            height: "auto",
            marginTop: "-280px",
          }}
          priority
        />
      </div>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      {/* Content */}
      <div className="relative z-10 mx-auto px-5 sm:px-8 md:px-16  mt-40">
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-light text-white">
            Assisting over{" "}
            <span className="font-semibold">15,000 job seekers</span>
            <br />
            find their dream positions.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6"
            >
              <div className="mb-8 text-white">{item.icon}</div>

              <h3 className="text-3xl font-semibold text-white">
                {item.value}
              </h3>

              <p className="mt-2 text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
