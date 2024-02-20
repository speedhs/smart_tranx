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
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Introduction to the Course
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>The course</li>
                <li>The ITIL® “ecosystem”</li>
                <li>The ITIL® 4 foundation examination</li>
                <li>The qualification structure</li>
                <li>Why ITIL®?</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Key concepts of Service Management Using ITIL® 4
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>Service management</li>
                <li>Service</li>
                <li>Service value</li>
                <li>The service organization</li>
                <li>Service offerings</li>
                <li>Service relationships</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Guiding Principles of Service Management
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                <li>The seven principles of IT service management</li>
                <li>Focus on value</li>
                <li>Start where you are</li>
                <li>Progress iteratively, with feedback</li>
                <li>Collaborate and promote visibility</li>
                <li>Think and work holistically</li>
                <li>Keep it simple and practical</li>
                <li>Optimize and automate</li>
                <li>Principles impact upon one another</li>
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
