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
        Syllabus of PMI-ACP® Certification
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Agile Certified Practitioner Course Overview
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Value, Eligibility, Certification Timeline, Audit Process, Certification Process, Exam Process</li>
                <li>Domains and Tasks</li>
                <li>Agile Principles and Mind-set</li>
                <li>Value-Driven Delivery</li>
                <li>Stakeholder Engagement</li>
                <li>Team Performance</li>
                <li>Adaptive Planning</li>
                <li>Problem Detection and Resolution</li>
                <li>Continuous Improvement</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Value-Driven Delivery
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Value: Forecasting</li>
                <li>Time Value of Money</li>
                <li>Financial Feasibility of Projects</li>
                <li>Return on Investment, Net Present Value, Internal Rate of Return, Payback period</li>
                <li>Prioritization</li>
                <li>Agile Customer-Value Prioritization</li>
                <li>Prioritization Techniques</li>
                <li>Risk Management in Agile and Risk Adjusted Product Backlog</li>
                <li>Non-Functional Requirements</li>
                <li>Minimum marketable Feature</li>
                <li>Kanban Boards</li>
                <li>Kanban and JIT</li>
                <li>Incremental Delivery</li>
                <li>Review and Feedback Techniques</li>
                <li>Reprioritization or Relative Prioritization</li>
                <li>Agile Compliance</li>
                <li>Earned Value Management for Agile</li>
                <li>Agile Contracts</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          {/* Other accordion items follow */}
        </Accordion>
      </div>
    </div>
  );
};

export default Courseagenda;
