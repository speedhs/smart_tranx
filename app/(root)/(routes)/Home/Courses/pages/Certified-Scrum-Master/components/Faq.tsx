import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqData = [
    {
      question: "What is Scrum? What You Will Learn in Scrum Master Training?",
      answer: "The Scrum Master certification course is a comprehensive program designed to enable professionals to gain a thorough understanding of, analyze, and effectively navigate the entire development cycle...",
      item: "item-1",
    },
    {
      question: "CSM Course Exam & Certification",
      answer: "How to become Certified ScrumMaster®? The Certified Scrum Master (CSM) certification process involves several key steps...",
      item: "item-2",
    },
    {
      question: "How much does a CSM certification cost?",
      answer: "The cost of Scrum Master certification varies based on factors such as the certification level, training provider, exam fees, and renewal costs...",
      item: "item-3",
    },
    {
      question: "What are the prerequisites for the Certified ScrumMaster certification?",
      answer: "The Certified Scrum Master (CSM) exam usually doesn't have strict rules for who can take it. But, there are things that can help you do well...",
      item: "item-4",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="flex flex-col mt-4 p-6 max-w-[1000px]  min-w-[1000px]">
      <h1 className="text-2xl font-bold">Frequently Asked Questions (FAQs)</h1>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          {faqData.map((item) => (
            <AccordionItem value={item.item}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
