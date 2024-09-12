import React from "react";
import Hero from "./Hero/Hero.tsx";
import About from "./About/About.tsx";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <About />
      </div>
    </>
  );
}
