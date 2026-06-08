import Link from "next/link";
import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm px-5 sm:px-8 md:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenu2Fill />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"#"}>Browse Jobs</Link>
              </li>
              <li>
                <Link href={"#"}>Company</Link>
              </li>
              <li>
                <Link href={"#"}>Pricing</Link>
              </li>
            </ul>
          </div>
          <Link href={"#"} className="text-2xl font-bold text-blue-900">
            <span className="text-orange-500 underline underline-offset-3">Job</span>Hunter
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"#"}>Browse Jobs</Link>
            </li>
            <li>
              <Link href={"#"}>Company</Link>
            </li>
            <li>
              <Link href={"#"}>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href={"#"} className="btn btn-ghost mr-5 text-blue-500">
            Sign In
          </Link>
          <Link href={"#"} className="btn bg-blue-500 text-white">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
