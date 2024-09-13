import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import React from "react";
import ContactForm from "./ContactForm.tsx";
import ContactInfo from "./ContactInfo.tsx";

export default function Contact() {
  return (
    <>
      <div id="contact" className="pt-16 pb-16 bg-[#050709]">
        {/* section heading */}
        <SectionHeading>Contact Me</SectionHeading>
        {/* content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
          {/* contact form */}
          <div
            className=""
            data-aos="fade-left"
            data-aos-anchor-placement="top-center"
          >
            <ContactForm />
          </div>
          {/* contact info */}
          <div
            className="xl:mx-auto"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}
