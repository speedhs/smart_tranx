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
        Six Sigma and Organizational Goals
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Lesson 1.0 - Introduction to Six Sigma and Organizational Goals</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Lesson 1.1 - Six Sigma and Organizational Goals</li>
                <li>Lesson 1.2 - Lean Principles in the Organization</li>
                <li>Lesson 1.3 - Design for Six Sigma (DFSS) Methodologies</li>
                <li>Lesson 1.4 - Summary to Six Sigma and the Organization</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Define Phase</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Lesson 2.0 - Introduction to Define Phase</li>
                <li>Lesson 2.1 - Project Identification</li>
                <li>Lesson 2.2 - Voice of the Customer (VOC)</li>
                <li>Lesson 2.3 - Project Management Basics</li>
                <li>Lesson 2.4 - Management and Planning Tools (Apply)</li>
                <li>Lesson 2.5 - Business Results for Projects</li>
                <li>Lesson 2.6 - Team Dynamics and Performance</li>
                <li>Lesson 2.7 - Summary of Define Phase</li>
                <li>Lesson 2.8 – Project</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Measure Phase</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Lesson 3.0 - Introduction to Measure Phase</li>
                <li>Lesson 3.1 - Process Analysis and Documentation (Create)</li>
                <li>Lesson 3.2 - Probability and Statistics</li>
                <li>Lesson 3.3 - Collecting and Summarizing Data</li>
                <li>Lesson 3.4 - Statistical Distributions (Understand)</li>
                <li>Lesson 3.5 - Measurement System Analysis (MSA)(Evaluate)</li>
                <li>Lesson 3.6 - Process and Performance Capability</li>
                <li>Lesson 3.7 - Summary of Measure Phase</li>
                <li>Lesson 3.8 - Project</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Analyze Phase</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Lesson 4.0 - Introduction to Analyze Phase</li>
                <li>Lesson 4.1 - Hypothesis Testing</li>
                <li>Lesson 4.2 - Exploratory Data Analysis</li>
                <li>Lesson 4.3 - Summary of Analyze Phase</li>
                <li>Lesson 4.4 - Project</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Improve Phase</AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Lesson 5.0 - Introduction to Improve Phase</li>
                <li>Lesson 5.1 - Design of Experiments (DOE)</li>
                <li>Lesson 5.2 - Root Cause Analysis (Analyze)</li>
                <li>Lesson 5.3 - Lean Tools</li>
                <li>Lesson 5.4 - Selecting a Solution</li>
                <li>Lesson 5.5 - Summary Improve Phase</li>
                <li>Lesson 5.6 - Project</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Courseagenda;
