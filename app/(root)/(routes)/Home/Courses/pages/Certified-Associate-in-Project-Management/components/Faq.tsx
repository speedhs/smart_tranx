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
      question: "What are the benefits of CAPM® Certification?",
      answer: "The CAPM® Certification offers numerous advantages, such as substantial career benefits, the potential to work on a global scale within multinational organizations, salary enhancements, and personal growth opportunities.",
      item: "item-1",
    },
    {
      question: "What is project scope management?",
      answer: "Scope management primarily revolves around defining and controlling what falls outside the project's boundaries. It encompasses six key methods essential for managing and outlining a project's parameters: Planning Scope Management, Collecting Requirements, Defining Scope, Creating the Work Breakdown Structure, Validating Scope, Controlling Scope.",
      item: "item-2",
    },
    {
      question: "Who should attend this CAPM Certification Training course?",
      answer: "This certification training course is designed for entry-level professionals looking to embark on a career in project management. It equips participants with the skills to enhance their effectiveness in project planning and execution. Graduates of this training can pursue roles such as project manager assistant, associate project manager, junior project manager, project coordinator, project delivery manager, and more.",
      item: "item-3",
    },
    {
      question: "What will I learn in this CAPM® Certification training course?",
      answer: "In the CAPM® Certification training course, you will delve into various project management methodologies. Additionally, you will gain insights into the essential processes necessary for monitoring and controlling a project.",
      item: "item-4",
    },
    {
      question: "Will this course help me to get a better job with a high salary package?",
      answer: "Individuals with a Certified Associate in Project Management (CAPM) qualification generally hold entry-level positions in companies and may receive compensation at a different level than experienced Project Management Professionals (PMPs).",
      item: "item-5",
    },
    {
      question: "Can Smartranx deliver corporate/in-house training?",
      answer: "Yes, our dedicated in-house/corporate training team consistently strives to deliver training to our clients who prefer the convenience and comfort of learning in their familiar environments.",
      item: "item-6",
    },
    {
      question: "Can you customize training and course material according to our company requirements?",
      answer: "Yes, we have subject matter experts who will tailor their work to align with your company's specific requirements.",
      item: "item-7",
    },
    {
      question: "Which delivery methods I can choose for the 'CAPM® Certification Training'?",
      answer: "You have the flexibility to select from the following delivery methods based on your needs: Online: Ideal for self-paced learning, accessible at your convenience, day or night. Online Instructor-Led or Virtual: Perfect for virtual learning from the comfort of your home with live instruction. Classroom: Suitable for in-person training at one of The Knowledge Academy's locations. Onsite/Corporate: Tailored to provide training for your employees at your preferred location.",
      item: "item-8",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="flex flex-col mt-4 p-6 max-w-[1000px] min-w-[1000px]">
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
