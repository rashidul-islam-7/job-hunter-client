"use client";

import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-black text-gray-400 ">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-16 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 ">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-2xl font-bold">
              <span className="text-orange-500 underline underline-offset-3">
                Job
              </span>
              <span className="text-blue-500">Hunter</span>
            </h2>

            <p className="mt-8 text-gray-500 leading-6 max-w-xs">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-10">
              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-indigo-700 flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <FaPinterestP size={18} />
              </Link>

              <Link
                href="#"
                className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
              >
                <FaLinkedinIn size={18} />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-indigo-500 text-base font-medium mb-8">
              Product
            </h3>

            <ul className="space-y-3 *:text-gray-500 *:[li]:hover:text-white *:[li]:transition *:[li]:text-base *:[li]:cursor-pointer *:[li]:w-fit">
              <li>
                <Link href="#">Job discovery</Link>
              </li>
              <li>
                <Link href="#">Worker AI</Link>
              </li>
              <li>
                <Link href="#">Companies</Link>
              </li>
              <li>
                <Link href="#">Salary data</Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-indigo-500 text-base font-medium mb-8">
              Navigations
            </h3>

            <ul className="space-y-3 *:text-gray-500 *:[li]:hover:text-white *:[li]:transition *:[li]:text-base *:[li]:cursor-pointer *:[li]:w-fit">
              <li>
                <Link href="#">Help center</Link>
              </li>
              <li>
                <Link href="#">Career library</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-indigo-500 text-base font-medium mb-8">
              Resources
            </h3>

            <ul className="space-y-3 *:text-gray-500 *:[li]:hover:text-white *:[li]:transition *:[li]:text-base *:[li]:cursor-pointer *:[li]:w-fit">
              <li>
                <Link href="#">Brand Guideline</Link>
              </li>
              <li>
                <Link href="#">Newsroom</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500">
            Copyright © {currentYear} — JobHunter{" "}
          </p>

          <div className="flex gap-6 text-gray-500">
            <Link href="#" className="hover:text-white transition">
              Terms & Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
