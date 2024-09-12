import React from "react";
import Hero from "./Hero/Hero.tsx";
import About from "./About/About.tsx";
import Services from "./Services/Services.tsx";
import Project from "./Project/Project.tsx";
import Skill from "./Skill/Skill.tsx";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Project />
        <Skill />
      </div>
    </>
  );
}
