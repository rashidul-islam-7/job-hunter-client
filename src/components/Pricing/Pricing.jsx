"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import {
  HiOutlineSparkles,
  HiOutlineTrendingUp,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import PricingToggleBtn from "./PricingToggleBtn";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: <HiOutlineSparkles className="text-pink-400 text-xl" />,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 10,
    yearlyPrice: 75, // Calculated with the 25% discount shown in the design
    icon: <HiOutlineTrendingUp className="text-purple-400 text-xl" />,
    features: [
      "Daily AI match brief (top 5)",
      "Verified salary bands",
      "Company insight dashboards",
      "1-click apply, unlimited",
    ],
    isPopular: true, // Renders the highlighted white-button variant
  },
  {
    name: "Premium",
    monthlyPrice: 25,
    yearlyPrice: 155,
    icon: <HiOutlineLightningBolt className="text-fuchsia-400 text-xl" />,
    features: [
      "Everything in Pro",
      "Multi-profile career portfolios",
      "Shared talent rooms",
      "Recruiter view (read-only)",
    ],
  },
];

export default function PricingCards() {
  const [btnActive, setBtnActive] = useState("monthly");

  return (
    <div className="bg-[#050505] text-zinc-100 m-auto px-5 sm:px-8 md:px-16 py-16 ">
      <div className="mb-10">
        <div className="flex justify-center items-center gap-3">
          <span className="h-2 w-2 bg-blue-500"></span>
          <span className="uppercase text-md  text-gray-300">
            Pricing
          </span>
          <span className="h-2 w-2 bg-blue-500"></span>
        </div>
        <h2 className="text-3xl font-bold text-center text-white max-w-sm mx-auto mt-4">
          Pay for the leverage, not the listings
        </h2>
      </div>

      <div className="">
        <PricingToggleBtn btnActive={btnActive} setBtnActive={setBtnActive} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full ">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
              plan.isPopular
                ? "bg-[#141416] border-zinc-700/60 shadow-[0_0_50px_rgba(255,255,255,0.02)]"
                : "bg-[#0b0b0c] border-zinc-900"
            }`}
          >
            <div>
              {/* Header section */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#1a1a1e] border border-zinc-850 flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-200">
                    {plan.name}
                  </h3>
                </div>

                {/* Price Display showing both structures clearly */}
                <div className="text-right">
                  <div className="flex items-baseline justify-end">
                    <span className="text-4xl font-semibold tracking-tight">
                      {btnActive === "monthly"
                        ? `$${plan.monthlyPrice}`
                        : `$${plan.yearlyPrice}`}
                    </span>
                    <span className="text-zinc-500 text-sm ml-1">
                      {btnActive === "monthly" ? "/monthly" : "/yearly"}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-zinc-300 text-sm font-medium mb-5">
                Start building your insights hub:
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-zinc-400 text-sm"
                  >
                    <span className="mt-0.5 p-0.5 rounded bg-zinc-800/50 text-zinc-400 flex-shrink-0">
                      <FiPlus size={14} />
                    </span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero UI Interactive Button */}
            <Button
              endContent={
                <FiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
              }
              className={`w-full group py-6 text-sm font-medium rounded-xl border transition-all ${
                plan.isPopular
                  ? "bg-white text-black hover:bg-zinc-200 border-transparent font-semibold"
                  : "bg-[#222226] text-zinc-300 hover:bg-[#2a2a30] border-zinc-800"
              }`}
            >
              Choose This Plan
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
