import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import { skillsData } from "@/Data/data.ts";
import React from "react";
import SkillCard from "./SkillCard.tsx";

export default function Skill() {
  return (
    <>
      <div className="pt-16 pb-16 bg-[#0f0715]">
        {/* section header */}
        <SectionHeading>My Skills</SectionHeading>
        {/* content */}
        <div className="mt-20 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center">
          {skillsData.map((skill) => {
            return (
              <div className="" key={skill.id}>
                {/* skills card */}
                <SkillCard skill={skill} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
