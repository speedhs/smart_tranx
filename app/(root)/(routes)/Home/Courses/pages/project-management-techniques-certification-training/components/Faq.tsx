import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const trainingInfo = [
    {
      title:
        "What are the prerequisites for the Project Management Techniques Training?",
      description: "There are no prerequisites to attend this training.",
      item: "item-1",
    },
    {
      title: "Who are the instructors?",
      description:
        "The trainers are highly qualified and certified instructors with years of relevant industry and coaching experience who will hand hold you through the workshop and ensure your success.",
      item: "item-2",
    },
    {
      title: "Do You Provide In-House/Corporate Training?",
      description:
        "Yes, Group trainings are completely customized to address collective training needs for your entire team/organization.",
      item: "item-3",
    },
    {
      title: "How long the course materials access will be provided?",
      description:
        "Course materials access will be provided for a specified duration, typically after the completion of the training. The exact duration may vary depending on the training provider's policies.",
      item: "item-4",
    },
  ];

  return (
    <div className="flex flex-col mt-4 p-6 max-w-[1000px]  min-w-[1000px]">
      <h1 className="text-2xl font-bold">Course Agenda</h1>
      <h2 className="opacity-75 mt-4">
        Syllabus of Project Management Techniques Certification Training
      </h2>
      <div className="mt-5 p-4">
        <Accordion type="single" collapsible>
          {trainingInfo.map((item) => (
            <AccordionItem value={item.item}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
