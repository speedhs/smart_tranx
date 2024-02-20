
"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import Courses from "./course/Courses";
import ResoursersPopover from "./course/ResoursersPopover";

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  console.log(isCoursesOpen,isResourcesOpen)

  const handleCoursesHover = () => {
    setIsCoursesOpen(true);
  };

  const handleonchange = () =>{
    setIsCoursesOpen(false)
  }

  const handleCoursesLeave = () => {
    setIsCoursesOpen(false);
  };

  const handleResourcesHover = () => {
    setIsResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    setIsResourcesOpen(false);
  };

  return (
    <div className="w-full h-20 flex flex-row items-center justify-between bg-orange-50 shadow-xl">
      <div className="flex items-center justify-center px-14">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="logo" width={185} height={92} />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-10 flex-row px-20">
        <Popover>
          <PopoverTrigger
            className="w-40 h-8 bg-sky-500 rounded-md flex items-center justify-center cursor-pointer hover:translate-y-[-4px] transition-transform"
            onMouseEnter={handleCoursesHover}
           
          >
            All courses
          </PopoverTrigger>
          {isCoursesOpen && (
            <PopoverContent>
              <Courses />
            </PopoverContent>
          )}
        </Popover>
       
        <Popover>
          <PopoverTrigger
            className="hover-trigger hover:translate-y-[-4px] transition-transform"
            onMouseEnter={handleResourcesHover}
            
          >
            Resourses
          </PopoverTrigger>
          {isResourcesOpen && (
            <PopoverContent>
              <ResoursersPopover />
            </PopoverContent>
          )}
        </Popover>
        <Link href={""}>Corporate</Link>
        <Link href={"/Home/Contact"}>Contact</Link>

        <button className="w-40 h-8 bg-orange-500 rounded-md hover:translate-y-[-4px] transition-transform">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
