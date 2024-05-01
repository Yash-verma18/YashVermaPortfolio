"use client";

import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/reviews";
import TestimonialsCards from "./TestimonialsCards";

import Masonry from "react-masonry-css";
import { useState } from "react";

const Testimonials = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [count, setCount] = useState(3);

  return (
    <SectionWrapper>
      <Heading>Testimonials</Heading>

      <span className="text-5xl  font-extrabold">
        What <span className="text-violet-600">People Say</span>
      </span>

      <p className="mt-5 mb-10 w-full lg:w-6/12 leading[22px] text-lg font-medium">
        I developed products that are more than pretty. I make them shippable
        and usable.
      </p>

      <div className="relative w-full">
        <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-white/80 to-transparent flex justify-center items-end ">
          <button
            onClick={() => {
              setIsShowMore(!isShowMore);
              setCount(isShowMore ? 6 : data.length);
            }}
            className="px-5 py-2 bg-violet-600 text-white rounded-md"
          >
            {isShowMore ? "Show Less" : "Show More"}
          </button>
        </div>
        <Masonry
          breakpointCols={{
            default: 3,
            1200: 3,
            700: 2,
            700: 1,
          }}
          className="my-masonry-grid "
          columnClassName="my-masonry-grid_column "
        >
          {data.slice(0, count).map((review) => (
            <TestimonialsCards key={review.id} {...review} />
          ))}
        </Masonry>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
