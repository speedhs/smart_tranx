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
      question: "Should I have Minitab installed before I begin the course?",
      answer: "You do not require Minitab installation in order to commence the Green Belt course.",
      item: "item-1",
    },
    {
      question: "Will I get Excel sheet templates if I do not have Minitab installed?",
      answer: "Absolutely, we furnish a comprehensive toolkit as part of the course package, which encompasses a wide array of tools and Excel sheets relevant to the realm of Lean Six Sigma.",
      item: "item-2",
    },
    {
      question: "Do I need a project to complete this training?",
      answer: "Completion of the Lean Six Sigma Green Belt training does not entail any project requirements.",
      item: "item-3",
    },
    {
      question: "Will I get the IASSC certificate after completing this LSSGB course?",
      answer: "Upon successfully finishing the LSSGB course from Smartranx, you will be awarded a course-completion certificate. To obtain IASSC certification, you can take the IASSC Certified Lean Six Sigma Green Belt exam and must achieve a minimum score of 580 out of the total 750 points available.",
      item: "item-4",
    },
    {
      question: "Do you provide assistance for the exam booking process?",
      answer: "Certainly, we provide assistance in locating the nearest exam center for your convenience.",
      item: "item-5",
    },
    {
      question: "How many questions are in the Lean Six Sigma Green Belt certification exam?",
      answer: "Lean Six Sigma Green Belt  (Duration 180 minutes)\n100 multiple-choice questions (Closed Book)\nPass Mark: 385 out of 500\nRegistration Fee: $295\nRetake Fee: $100",
      item: "item-6",
    },
    {
      question: "Is this live training, or will I watch pre-recorded videos?",
      answer: "All our classes are conducted through live online streaming and are led by a Lean Six Sigma certified trainer with over 10 years of practical experience. These Six Sigma online training sessions are interactive, allowing you to ask questions and actively participate in discussions during the class. Furthermore, we offer recorded versions of each session you attend, ensuring that you have access to them for future reference. Our classes are attended by a diverse global audience, providing a rich and diverse learning experience.",
      item: "item-7",
    },
    {
      question: "What tools do I need to attend the training sessions?",
      answer: "To participate in the Six Sigma Green Belt training, you will require the following tools and system requirements:\nFor Windows: Windows XP SP3 or a newer version\nFor Mac: OSX 10.6 or a newer version\nInternet Speed: It is recommended to have a minimum internet speed of 512 Kbps or higher.\nAudio Equipment: You will need a headset or speakers to ensure clear audio for instructions, as well as a microphone to facilitate communication with others. This can be achieved through a headset with a built-in microphone or by using separate speakers and a microphone.",
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
            <AccordionItem value={item.item} key={item.item}>
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
