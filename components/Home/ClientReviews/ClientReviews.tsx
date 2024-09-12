import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import React from "react";
import Slider from "./Slider.tsx";

export default function ClientReviews() {
  return (
    <>
      <div className="pt-16 pb-16 bg-[#050709]">
        {/* section heading */}
        <SectionHeading>Client Reviews</SectionHeading>
        {/* content */}
        <div className="w-[90%] sm:w-4/5 mx-auto mt-20">
          {/* slider */}
          <Slider />
        </div>
      </div>
    </>
  );
}
