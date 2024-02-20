import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      question: "What is Change Management?",
      answer:
        "Change management is a strategic approach and a collection of methodologies that organizations use to define and execute improvements in their internal and external processes with the goal of achieving better outcomes. This involves preparing and assisting employees, instigating essential change actions, and overseeing activities both before and after the change to ensure a successful transition.",
      item: "item-1",
    },
    {
      question: "What is the importance of Change Management?",
      answer:
        "In the realm of business, organizations may undergo various forms of change, including those related to strategy, leadership, and technology. Change management is of paramount importance due to the often hesitant or resistant response to change by individuals. It plays a crucial role in optimizing resource allocation, saving time and effort that might otherwise be wasted on non-essential matters. Furthermore, it fosters the development of a more adaptable and innovative work environment.",
      item: "item-2",
    },
    {
      question: "How many levels are there in Change Management?",
      answer:
        "Change Management comprises three levels: Individual Change Management, Organizational/Initiative Change Management, and Enterprise Change Management Capability.",
      item: "item-3",
    },
    {
      question: "What will I learn from the Change Management Foundation course?",
      answer:
        "The Change Management Foundation course is specifically crafted to offer participants a comprehensive understanding of essential change strategies and the skills to formulate change plans that align with organizational needs.",
      item: "item-4",
    },
    {
      question: "What will I learn in the Change Management Practitioner course?",
      answer:
        "The Change Management Practitioner course places significant emphasis on the practical implementation of change and the application of Change Management in a real-world organizational context.",
      item: "item-5",
    },
    {
      question: "Can SmartranX deliver corporate or in-house training?",
      answer:
        "Absolutely, our dedicated in-house training team works tirelessly to deliver training to clients who prefer the convenience and comfort of learning within their familiar work environments.",
      item: "item-6",
    },
    {
      question: "Will I get a salary raise after getting Change Management Certification?",
      answer:
        "Change Management Professionals are in high demand in today's dynamic and ever-evolving business landscape, where new technologies and challenges emerge daily. A Change Management Certification is widely recognized, and individuals with these skills can command attractive salary packages to address the demands of change effectively.",
      item: "item-7",
    },
    {
      question: "What will I learn from the BCS Specialist Certification in Change Management Course?",
      answer:
        "The BCS Specialist Certification in Change Management course delves into the advanced features and best practices of Change Management. It encompasses a wide array of topics, including defining and articulating goals and objectives, assessing the prioritization and impact of proposed changes, and effectively overseeing and managing the implementation of these changes.",
      item: "item-8",
    },
  ];

  return (
    <div className="flex flex-col mt-4 p-6 max-w-[1000px] min-w-[1000px]">
      <h1 className="text-2xl font-bold">FAQs</h1>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.item} value={faq.item}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
