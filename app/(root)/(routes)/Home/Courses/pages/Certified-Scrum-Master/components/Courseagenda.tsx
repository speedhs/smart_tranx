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
        Certified Scrum Master Course Agenda
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Module 1: Introduction to Agile and Scrum</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Defined Vs Empirical Process</li>
                <li>Introduction to Agile</li>
                <li>The Agile Manifesto and Key Principles</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Module 2: The Scrum Framework</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>The Five Scrum Values – C FOR C</li>
                <li>Bird’s-eye View</li>
                <li>Scrum as a Framework</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Module 3: Applying Scrum Principles</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Applying Scrum Roles and Responsibilities</li>
                <li>Sprint Planning, Daily Scrum, Sprint Review, and Retrospective</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Module 4: Advanced Scrum Concepts</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Scaling Scrum</li>
                <li>Agile Estimation and Planning</li>
                <li>Scrum in Practice</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Module 5: Scrum Certification Preparation</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Preparing for the Certified Scrum Master Exam</li>
                <li>Practical Exercises and Mock Exams</li>
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
