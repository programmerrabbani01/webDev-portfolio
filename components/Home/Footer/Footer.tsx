import Image from "next/image";
import React from "react";
import myLogo from "@/public/images/myLogo.png";

export default function Footer() {
  return (
    <>
      <div className="pt-16 pb-16 bg-[#0f0715]">
        <div className="">
          <Image
            src={myLogo}
            alt="logo"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="flex items-center justify-center flex-wrap space-x-10 space-y-4 text-white font-bold">
          <div>Home.</div>
          <div>Services.</div>
          <div>Project.</div>
          <div>Reviews.</div>
          <div>Contact.</div>
        </div>
        <p className="text-white mt-6 text-opacity-60 text-center">
          &copy; 2024 All Rights Reserved By Programmrrabbani
        </p>
      </div>
    </>
  );
}
