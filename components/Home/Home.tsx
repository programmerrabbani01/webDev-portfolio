"use client";

import React, { useEffect } from "react";
import Hero from "./Hero/Hero.tsx";
import About from "./About/About.tsx";
import Services from "./Services/Services.tsx";
import Project from "./Project/Project.tsx";
import Skill from "./Skill/Skill.tsx";
import ClientReviews from "./ClientReviews/ClientReviews.tsx";
import Blog from "./Blog/Blog.tsx";
import Contact from "./Contact/Contact.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    const initAos = async () => {
      await import("aos"); // Importing AOS library first
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAos();
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Project />
        <Skill />
        <ClientReviews />
        <Blog />
        <Contact />
      </div>
    </>
  );
}
