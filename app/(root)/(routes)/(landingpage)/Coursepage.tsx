import CourseCard from "@/components/course/CourseCard";
import Carousel from "@/components/course/carousal";
import { Inria_Serif } from "next/font/google";
import Link from "next/link";
import React from "react";

const inria = Inria_Serif({ subsets: ["latin"], weight: "300" });

const Coursepage = () => {
  return (
    <div className="w-full h-auto">
      <div className="flex flex-col ml-[48px] mt-[40px] ">
        
        <span className={inria.className}>
          <h1 className="text-[41px] font-medium mb-2">Certification Courses</h1>
        </span>

        <div className="flex items-center justify-between">
          <h3 className="text-[24px] opacity-85 text-slate-800">
            Get certified by the authorised certification bodies
          </h3>
          <button className="w-40 h-8 bg-sky-500 rounded-md mt-[-70px] min-h-[50px] min-w-[200px] text-white hover:text-black mr-14 shadow-xl  hover:bg-orange-500  transition-all transform hover:scale-105  ">
            <Link href={"/Home/Courses"}>
              <span className="">Explore all Courses</span>
            </Link>
            
          </button>
        </div>

        <div className="mt-20">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Coursepage;
