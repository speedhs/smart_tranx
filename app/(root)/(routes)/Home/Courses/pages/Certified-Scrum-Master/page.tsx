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
import Contactus_card from "@/components/Contactus_card";
const Page: React.FC = () => {
  const path = usePathname();
  const pathSegments = path.split("/").filter((segment) => segment);
  const [selectedSection, setSelectedSection] = useState("Overview");
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["Overview", "Keyfeatures", "Courseagenda", "Faq"];
      let currentSection = "Overview";
      const sectionOffsets: Record<string, number> = {};

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          sectionOffsets[section] = sectionElement.offsetTop;
          if (scrollPosition >= sectionOffsets[section]) {
            currentSection = section;
          }
        }
      });

      setSelectedSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-3/4">
            <div className="flex flex-col">
            <h1 className="text-4xl font-extrabold">
                Certified Scrum Master
              </h1>
              <p className="font-medium text-lg opacity-90">
                If you are seeking to enhance your proficiency in Agile Project
                Management, the Certified Scrum Master (CSM) Certification
                offered by Smartranx is an excellent choice. This CSM
                certification program offers a well-rounded combination of
                theoretical and practical knowledge, accompanied by
                industry-specific assignments. It equips you with a
                comprehensive grasp of the Scrum framework, enabling your
                success in the field of Agile Project Management. Adddditionally,
                this certification is instructed by Certified Scrum Trainers,
                ensuring a high-quality learning experience. With a deep
                understanding of the subject matter, participants can unlock
                numerous professional opportunities and chart a rewarding career
                path.
              </p>
            </div>
            <div className="flex flex-row mt-8 gap-x-7 p-2">
              <div className="flex gap-2 items-center">
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
                  <h1 className="font-bold">Speciality</h1>
                  <h2>One to One training</h2>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex flex-col items-center mt-10 justify-center">
          <h1 className="text-4xl font-bold">
            Benefits of <span className="text-orange-500">Smart Tranx</span>
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
        <div ref={sectionRef} className="grid grid-cols-2 gap-4">
  <div className="lg:w-3/4 overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
    <div style={{ height: "calc(100vh - 40px)", paddingRight: "0px" }}>
      <Overview />
      <Keyfeatures />
      <Courseagenda />
      <Faq />
    </div>
  </div>
  <div className="lg:w-1/4 sticky top-0" style={{  fontSize: "1.2rem",paddingLeft: "20vh",paddingTop:"25vh"}}>
  <SheduleForm
              title="Certified Scrum Master"
              duration="4 days"
            />
  </div>
</div>






        <Contactus_card />
      </div>
    </div>
  );
};

const NavBar: React.FC<{
  selectedSection: string;
  onSectionChange: (section: string) => void;
}> = ({ selectedSection, onSectionChange }) => {
  const sections = ["Overview", "Keyfeatures", "Courseagenda", "Faq"];

  return (
    <div className="flex justify-between max-w-[1000px] px-4 py-1 bg-white">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`px-4 py-100 cursor-pointer ${
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

export default Page;
