"use client";

import Image from "next/image.js";
import logo from "@/public/images/logo.png";
import Link from "next/link.js";
import { navLinks } from "@/constant/constant.ts";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

// defiend props
type Props = {
  openNav: () => void;
};
export default function Nav({ openNav }: Props) {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed ${
          navBg ? "bg-[#240b39]" : "fixed"
        } h-[12vh] z-[10]  w-full transition-all duration-200`}
      >
        <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
          {/* logo */}
          <Image
            src={logo}
            alt="Logo"
            width={170}
            height={170}
            className="ml-[-1.5rem sm:ml-0]"
          />
          {/* nav link */}
          <div className="flex items-center space-x-10">
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((navlink) => {
                return (
                  <Link href={navlink.url} key={navlink.id}>
                    <p className="nav_link">{navlink.lable}</p>
                  </Link>
                );
              })}
            </div>
            {/* button */}
            <div className="flex items-center space-x-4">
              <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                Hire Me
              </button>
              {/* burger menu */}
              <HiBars3BottomRight
                onClick={openNav}
                className="W-8 h-8 cursor-pointer text-white lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
