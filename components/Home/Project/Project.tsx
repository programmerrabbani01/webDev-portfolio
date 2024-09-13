import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import { projectData } from "@/Data/data.ts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Project() {
  return (
    <>
      <div id="project" className="pt-16 pb-16 bg-[#050709]">
        {/* section heading */}
        <SectionHeading>My Project</SectionHeading>
        {/* content */}
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center mx-auto mt-20">
          {projectData.map((projects, i) => {
            return (
              <div
                className="bg-blue-900 p-6 rounded-lg hover:scale-105 transition-all duration-300"
                key={projects.id}
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
                data-aos-delay={`${i * 150}`}
              >
                <Link href={projects.url}>
                  <Image
                    src={projects.image}
                    alt="project"
                    width={300}
                    height={200}
                    className="w-full"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
