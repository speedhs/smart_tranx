import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Courseagenda = () => {
  return (
    <div className="flex flex-col mt-4 p-6 max-w-[1000px] min-w-[1000px]">
      <h1 className="text-2xl font-bold">Course Agenda</h1>
      <h2 className="opacity-75 mt-4">
        Syllabus of Change Management Certification Training
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1: Introduction to Change Management</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Introduction to Change Management</li>
                <li>Why Change Management is Important</li>
                <li>Portfolio, Program, and Project Management Overview</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2: Organizational Maturity Model</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Is My Organization Ready for Embracing Change?</li>
                <li>Is My Team Ready for Embracing Change?</li>
                <li>Change in Organizations: Using Interactive Facilitation, Individual Reflection, and Activities</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Section 3: Change Impact and Implementation</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Change and Its Impact on Individuals: Tailored Change Manual for Organizational Use</li>
                <li>Initiating Change: Drawing from Real-Life Organizational Change Experiences</li>
                <li>Launch and Mobilize Change: Using Case Studies and Role-Playing to Practice Concepts</li>
                <li>Transitioning and Embedding a Change Initiative</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Courseagenda;
