"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaCalendarAlt, FaRegIdBadge } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import Overview from "./components/Overview";
import Keyfeatures from "./components/Keyfeatures";
import Courseagenda from "./components/Courseagenda";
import Faq from "./components/Faq";
import Benifits_cards from "@/components/Benifits_cards";
import SheduleForm from "@/components/SheduleForm";
import { cn } from "@/lib/utils";
import Contactus_card from "@/components/Contactus_card";

const Page = () => {
  const path = usePathname();
  const pathSegments = path.split("/").filter((segment) => segment);

  const [selectedSection, setSelectedSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const handleSectionChange = (section: any) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffset = sectionRef.current.offsetTop;
      const scrollPosition = window.scrollY;

      setIsSticky(scrollPosition >= sectionOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-auto p-6">
      <div className="p-6">
        <div className="text-lg opacity-50">
          {pathSegments.map((segment, index) => (
            <span key={index}>
              {segment}
              {index < pathSegments.length - 1 && " > "}
            </span>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between mt-5 p-8">
          <div className="flex flex-col">
            <div className="h-auto max-w-[700px]  ">
              <h1 className="text-4xl font-extrabold">
                Change Management Certification training
              </h1>
              <p className="font-medium text-lg opacity-90">
                Change Management Certification Training is a comprehensive
                program designed to equip individuals with the knowledge,
                skills, and tools necessary to effectively navigate and lead
                organizational changes. This training is suitable for
                professionals who are responsible for managing or facilitating
                change initiatives within their organizations.
              </p>
            </div>
            <div className="flex flex-row mt-8 gap-x-7 p-2  ">
              <div className="flex gap-2 items-center ">
                <FaCalendarAlt className="w-10 h-10 opacity-80" />
                <div className="flex flex-col">
                  <h1 className="font-bold">Duration</h1>
                  <h2>4 days</h2>
                </div>
              </div>
              <Separator orientation="vertical" className="font-black" />
              <div className="flex gap-2 items-center">
                <FaRegIdBadge className="w-10 h-10 opacity-80" />
                <div className="flex flex-col">
                  <h1 className="font-bold ">Speciality</h1>
                  <h2>One to One training</h2>
                </div>
              </div>
            </div>
            <button className="w-auto max-w-44 h-auto bg-sky-400 mt-10 min-h-14 rounded-lg p-1">
              <h1 className="text-xl font-normal">Schedule</h1>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-10 justify-center">
          <h1 className="text-4xl font-bold">
            Benifits of <span className="text-orange-500">Smart Tranx</span>
          </h1>
          <Benifits_cards />
        </div>
        <div className="sticky flex flex-col top-0 z-10 mt-14 bg-white">
          <NavBar
            selectedSection={selectedSection}
            onSectionChange={handleSectionChange}
          />
          <Separator className="mt-2 max-w-[1000px]" />
        </div>
        <div ref={sectionRef} className="flex ">
          <Section selectedSection={selectedSection} />
          {/* <div className="sticky top-0 right-0 mt-14">
            <SheduleForm
              title="Project Management Techniques certification training"
              duration="4 days"
            />
          </div> */}
          <div
            ref={formRef}
            className={`fixed top-0 right-0 mt-14 ml-14 ${
              isSticky ? "relative" : "relative"
            }`}
          >
            <SheduleForm
              title="Change-Management-Certification-training"
              duration="4 days"
            />
          </div>
        </div>
        <Contactus_card />
      </div>
    </div>
  );
};

const NavBar = ({ selectedSection, onSectionChange }: any) => {
  const sections = ["Overview", "Keyfeatures", "Courseagenda", "Faqs"];

  return (
    <div className="flex justify-between max-w-[1000px] px-4 py-2 bg-white">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`px-4 py-2 cursor-pointer ${
            selectedSection === section ? "text-orange-600" : "text-black"
          }`}
          onClick={() => onSectionChange(section)}
        >
          <h1 className="font-medium">{section}</h1>
        </div>
      ))}
    </div>
  );
};

const Section = ({ selectedSection }: any) => {
  const contentMap = {
    Overview: <Overview />,
    Keyfeatures: <Keyfeatures />,
    Courseagenda: <Courseagenda />,
    Faqs: <Faq />,
  };

  return (
    <div>
      {contentMap[selectedSection]}
      {/* <Overview />
    <Keyfeatures />
    <Courseagenda />
    <Faq /> */}
    </div>
  );
};

export default Page;
