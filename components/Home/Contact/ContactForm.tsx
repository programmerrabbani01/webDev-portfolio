import React from "react";

export default function ContactForm() {
  return (
    <>
      <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
        <h1 className="text_bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
          Let's Work Together
        </h1>
        <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          necessitatibus quam magnam aspernatur nobis sequi.
        </p>
        {/* form */}
        <form className="mt-8 block w-full overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            />
          </div>
          <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            />
          </div>
          <div className="">
            <select className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none">
              <option value="" disabled selected>
                Select An Option
              </option>
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Full Stack Developer</option>
            </select>
          </div>
          <textarea
            rows={7}
            placeholder="Message"
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          ></textarea>
          <div className="mt-4">
            <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
