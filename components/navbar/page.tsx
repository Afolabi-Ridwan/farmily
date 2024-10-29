import React from "react";
import boxImg from "@/public/images/box.png";
import searchImg from "@/public/images/iconamoon_search.png";
import logo from "@/public/images/Layer 7.png";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-6 py-6 mt-8 shadow-green-faded">
      <span className="cursor-pointer">
        <FaBars size={20} />
      </span>


      <Link href={"/"}>
        <Image src={logo} alt="logo" priority className="w-24 h-8 ml-10 cursor-pointer" />
      </Link>

      <div className="flex">
        <Image
          src={searchImg}
          alt="searchIcon"
          priority
          className="cursor-pointer"
        />
        <span className="relative">
          <Image src={boxImg} alt="boxIcon" priority className="mx-4 " />

          <p className="bg-red-700 border rounded-full w-4 h-5 pb-6 font-xs text-white text-center absolute right-2 top-2">
            1
          </p>
        </span>
        <p className="border rounded-full px-[5px] bg-green-800 text-white">
          N
        </p>
      </div>
    </div>
  );
};

export default Navbar;
