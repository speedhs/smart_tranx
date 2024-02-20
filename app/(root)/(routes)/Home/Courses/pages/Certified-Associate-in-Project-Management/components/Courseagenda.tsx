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
        Syllabus of CAPM® Certification Training
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Introduction</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>What is a Project?</li>
                <li>Comparison between Project and Operation</li>
                <li>What is Project Management & Project Environment?</li>
                <li>Project, Program & Portfolio Management</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Professional and Social Responsibility</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>This Code of Ethics and Professional Conduct describes the expectations that we have of ourselves and our fellow practitioners in the global project management community</li>
                <li>Quiz</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Project Management Framework</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>State the primary functions of a project manager</li>
                <li>Understand a project manager’s sphere of influence</li>
                <li>Identify the major elements included in the PMI triangle</li>
                <li>Recognize the difference between leadership and management</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Add more modules here */}
        </Accordion>
      </div>
    </div>
  );
};

export default Courseagenda;
