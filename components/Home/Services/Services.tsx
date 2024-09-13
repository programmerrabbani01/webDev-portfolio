import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import { servicesData } from "@/Data/data.ts";
import React from "react";
import ServiceCard from "./ServiceCard.tsx";

export default function Services() {
  return (
    <>
      <div className="pt-16 pb-16 bg-[#0f0715]">
        {/* section Heading */}
        <SectionHeading>Services</SectionHeading>
        {/* content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-4/5 mx-auto items-center mt-20">
          {servicesData.map((service, i) => {
            return (
              <div
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${i * 150}`}
                key={service.id}
                className=""
              >
                {/* service card */}
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
