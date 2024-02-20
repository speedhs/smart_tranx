import TestimonialCard from "@/components/testimonials/TestimonialCard";
import Testimonialcarousal from "@/components/testimonials/Testimonialcarousal";
import Carousel from "@/components/course/carousal";
import { Inria_Serif } from "next/font/google";
import React from "react";

const inria = Inria_Serif({ subsets: ["latin"], weight: "300" });

const Testimonialspage = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col">
        <span className={inria.className}>
          <h1 className="text-[41px] font-medium ml-[48px] mt-[40px]">
            Hear it from our Students
          </h1>
        </span>
        <div className="items-center w-full justify-center flex mt-4">
          <div className="bg-slate-200 w-[30rem] h-96  rounded-2xl">
            {/* //video element have to be added// */}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Testimonialcarousal />
      </div>
    </>
  );
};

export default Testimonialspage;
