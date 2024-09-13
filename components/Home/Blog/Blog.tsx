import SectionHeading from "@/components/Helper/SectionHeading.tsx";
import { blogs } from "@/Data/data.ts";
import React from "react";
import BlogCard from "./BlogCard.tsx";

export default function Blog() {
  return (
    <>
      <div className="pt-16 pb-16 bg-[#0f0715]">
        {/* section heading */}
        <SectionHeading>My Blogs</SectionHeading>
        {/* content */}
        <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-center">
          {/* blog post */}
          {blogs.map((blog) => {
            return (
              <div className="" key={blog.id}>
                {/* blog card */}
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
