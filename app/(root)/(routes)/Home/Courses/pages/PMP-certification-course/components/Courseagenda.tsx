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
        PMP Certification Training Course Agenda
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Module 1: Introduction to Project Management</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Project Management Fundamentals</li>
                <li>Understanding Project Management Processes</li>
                <li>Introduction to PMBOK Guide</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Module 2: Project Management Framework</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Project Life Cycle and Organization</li>
                <li>Project Management Processes</li>
                <li>Project Integration Management</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Module 3: Project Management Processes</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Project Scope Management</li>
                <li>Project Schedule Management</li>
                <li>Project Cost Management</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Module 4: Project Management Knowledge Areas</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Project Quality Management</li>
                <li>Project Resource Management</li>
                <li>Project Communications Management</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Module 5: Project Management Professional (PMP) Certification Preparation</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Overview of PMP Exam</li>
                <li>Study Tips and Strategies</li>
                <li>Practice Tests and Mock Exams</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Conclusion and Certification</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Course Review and Q&A</li>
                <li>Certification Process</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Courseagenda;
