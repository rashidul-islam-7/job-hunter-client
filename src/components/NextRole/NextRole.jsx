"use client";
import Image from "next/image";
import ctaBg from "@/assets/images/cta-bg.png";
import { Button } from "@heroui/react";

export default function CTAHeroSection() {
  return (
    <section className="relative w-full bg-[#050505] text-white flexmin-h-[620px] flex flex-col justify-end items-center px-4 py-20 overflow-hidden">
      {/* 1. Background Image */}
      <div className="absolute inset-0 flex justify-center">
        <Image
          src={ctaBg}
          alt="Globe"
          className="object-cover object-top  opacity-90"
          style={{
            width: "1200px",
            height: "auto",
          }}
          priority
        />
      </div>

      {/* 2. Fixed Dynamic Radial Glow Layer */}
     <div 
        className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/40 blur-[125px] pointer-events-none select-none z-0" 
      />


      {/* 3. Foreground Content Stack */}
      <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.15] text-zinc-100 max-w-2xl mb-5">
          Your next role is <br /> already looking for you
        </h1>

        {/* Subtitle / Description */}
        <p className="text-zinc-400 text-base sm:text-lg font-normal tracking-wide max-w-xl mb-10 leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* Action Buttons using Hero UI */}
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <Button className="bg-white text-black font-semibold text-sm px-8 py-6 rounded-xl hover:bg-zinc-200 shadow-lg transition-all duration-200 w-full sm:w-auto">
            Create a free account
          </Button>

          <Button
            variant="bordered"
            className="bg-[#121214]/40 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:bg-[#18181b]/60 text-sm px-8 py-6 rounded-xl transition-all duration-200 w-full sm:w-auto"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
