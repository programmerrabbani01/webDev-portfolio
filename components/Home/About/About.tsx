import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import { aboutInfo } from "@/Data/data.ts";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import clientImage from "@/public/images/customer.png";
import experienceImage from "@/public/images/experience.png";
import completedImage from "@/public/images/completed.png";
import websiteImage from "@/public/images/rocket.png";

export default function About() {
  return (
    <>
      <div id="about" className="pt-16 pb-16 bg-[#050709]">
        {/* section Heading */}
        <SectionHeading>About Me</SectionHeading>
        {/* content */}
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
          {/* text content */}
          <div data-aos="fade-left" data-aos-anchor-placement="top-center">
            <h1 className="text_bg text-[26px] sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300">
              {aboutInfo.title}
            </h1>
            <p className="mt-6 text-base text-gray-500 text-opacity-60">
              {aboutInfo.description}
            </p>
            {/* skills */}
            <div className="mt-8">
              {/*  */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Frontend Development
                </p>
              </div>
              {/*  */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Backend Development
                </p>
              </div>
              {/*  */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-7 h-7 bg-green-800 flex flex-col items-center justify-center">
                  <FaCheck className="text-white" />
                </div>
                <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                  Full Stack Development
                </p>
              </div>
            </div>
          </div>
          {/* status content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
          >
            {/*  */}
            <div>
              <Image
                src={clientImage}
                alt="client image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-white text-center">
                {aboutInfo.client}
              </p>
              <p className="texbase sm:text-lg text-gray-400 text-center">
                Setisfied Client
              </p>
            </div>
            {/*  */}
            <div>
              <Image
                src={experienceImage}
                alt="experience image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-white text-center">
                {aboutInfo.experience}
              </p>
              <p className="texbase sm:text-lg text-gray-400 text-center">
                Years Experience
              </p>
            </div>
            {/*  */}
            <div>
              <Image
                src={completedImage}
                alt="completed image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-white text-center">
                {aboutInfo.project}
              </p>
              <p className="texbase sm:text-lg text-gray-400 text-center">
                Completed Project
              </p>
            </div>
            {/*  */}
            <div>
              <Image
                src={websiteImage}
                alt="website image"
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-3 font-bold text-xl text-white text-center">
                {aboutInfo.website}
              </p>
              <p className="texbase sm:text-lg text-gray-400 text-center">
                Website Launched
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
