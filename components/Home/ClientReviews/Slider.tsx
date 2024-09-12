"use client";

import { clientReviews } from "@/Data/data.ts";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewsCard from "./ClientReviewsCard.tsx";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default function Slider() {
  return (
    <>
      <Carousel
        arrows
        autoPlay={true}
        autoPlaySpeed={5000}
        infinite
        responsive={responsive}
      >
        {clientReviews.map((review) => {
          return (
            <div key={review.id} className="">
              {/* client review card */}
              <ClientReviewsCard review={review} />
            </div>
          );
        })}
      </Carousel>
    </>
  );
}
