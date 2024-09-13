import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import React from "react";
import ContactForm from "./ContactForm.tsx";
import ContactInfo from "./ContactInfo.tsx";

export default function Contact() {
  return (
    <>
      <div className="pt-16 pb-16 bg-[#050709]">
        {/* section heading */}
        <SectionHeading>Contact Me</SectionHeading>
        {/* content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
          {/* contact form */}
          <div className="">
            <ContactForm />
          </div>
          {/* contact info */}
          <div className="xl:mx-auto">
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}
