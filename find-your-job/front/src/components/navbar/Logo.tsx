import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="group">
      <div className="relative overflow-hidden rounded-xl p-2 transition-all duration-300 group-hover:bg-emerald-800/10">
        <Image
          src="/LOGO1-Photoroom.png"
          alt="FINDyourJOB logo"
          width={140}
          height={56}
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};

export default Logo;
