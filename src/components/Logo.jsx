import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-bold text-cyan-700 flex items-center">
      <Image
        src="/JobHunterLogo.png"
        alt="Logo"
        width={32}
        height={32}
        className="inline-block mr-1"
      />
      <span className="text-orange-500 underline underline-offset-3">Job</span>
      Hunter
    </Link>
  );
};

export default Logo;
