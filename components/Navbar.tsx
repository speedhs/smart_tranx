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
  const [prefillValues, setPrefillValues] = useState<any>({
    name: "",
    email: "",
    contact: ""
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCoursesHover = () => {
    setIsCoursesOpen(true);
  };

  const handleCoursesLeave = () => {
    setIsCoursesOpen(false);
  };

  const handleResourcesHover = () => {
    setIsResourcesOpen(true);
  };

  const handleResourcesLeave = () => {
    setIsResourcesOpen(false);
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrefillValues(prevState => ({
      ...prevState,
      [name]: value
    }));
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
            onMouseLeave={handleCoursesLeave}
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
            onMouseLeave={handleResourcesLeave}
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
        <button onClick={openDialog} className="cursor-pointer">Contact</button>
        {isDialogOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Enter Details</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input type="text" id="name" name="name" value={prefillValues.name} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input type="email" id="email" name="email" value={prefillValues.email} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="mb-4">
                  <label htmlFor="contact" className="block mb-2">Contact</label>
                  <input type="text" id="contact" name="contact" value={prefillValues.contact} onChange={handleInputChange} className="w-full border border-gray-300 rounded-md px-3 py-2" />
                </div>
                <div className="text-right">
                  <button type="button" onClick={closeDialog} className="px-4 py-2 bg-sky-400 text-white rounded-md">Done</button>
                </div>
              </form>
            </div>
          </div>
        )}
        <button className="w-40 h-8 bg-orange-500 rounded-md hover:translate-y-[-4px] transition-transform">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
