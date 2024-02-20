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
        Syllabus of Project Management Techniques Certification Training
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              Introduction and key concepts of project management Initiating the
              project and understanding its life cycle Components and techniques
              of project planning
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              Understanding Scope, Time and Cost Monitoring and controlling the
              project Integrated change control Project Closeout
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Courseagenda;
