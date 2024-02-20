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
      question: "What is the PMP certification course?",
      answer: "The Project Management Professional (PMP) certification, awarded by the globally recognized Project Management Institute (PMI), acknowledges the qualifications of project managers. To attain this prestigious certification, individuals must demonstrate substantial expertise, experience, and competence in the field of project management. PMP certification serves as a validation of a project manager's proficiency in effectively initiating, planning, executing, monitoring, controlling, and closing projects. It enjoys widespread acclaim as one of the most esteemed and coveted credentials within the project management industry, providing professionals with a valuable tool to propel their careers and enhance their income-earning prospects.",
      item: "item-1",
    },
    {
      question: "Is PMP certification worth it in 2023?",
      answer: "Absolutely! The PMP certification is highly respected in many industries. In our globalized economy and growing job markets, the demand for skilled project managers is increasing. The Project Management Professional (PMP) certification, given by the well-known Project Management Institute (PMI), comes with several benefits. These include being recognized across industries, gaining new skills, having the potential for higher income, and opening up better career opportunities.",
      item: "item-2",
    },
    {
      question: "Career Opportunities for PMP® Certified Professionals?",
      answer: "Upon earning your PMP certification, a wide array of job opportunities becomes available to you, including roles like project manager, program manager, portfolio manager, and PMO lead, among others. Smartranx’s PMP training can greatly facilitate your path to securing any of these roles. Let's now explore some specific project manager positions: • Project Coordinator • New Product Development Project Manager • Construction Project Manager • Information Technology Project Manager • Environmental Research Project Manager Having a PMP certification can enhance your qualifications and open doors to a diverse range of project management positions across various industries.",
      item: "item-3",
    },
    {
      question: "How to apply for this training program on PMP?",
      answer: "PMP training is offered by PMI® and If you have decided to take a formal PMP course, you just need to sign up on the training provider’s (Smartranx’s) website, select the pmp course, and complete the payment to get access to the study materials.",
      item: "item-4",
    },
    {
      question: "What jobs require a PMP certification?",
      answer: "Here are some roles that require PMP certification: • Project manager • Project engineer • Operations manager • Assistant project manager",
      item: "item-5",
    },
    {
      question: "Reasons to get a project management professional certification?",
      answer: "The Project Management Professional (PMP) certification is one of the most sought-after certifications and is a globally recognized credential. This esteemed certification is granted by the well-regarded Project Management Institute (PMI) to individuals who pass the PMP Exam conducted by PMI. 1. Boost career prospects: PMP certification is highly regarded by employers, opening doors to leadership roles. 2. Proven expertise: It demonstrates your competence in project management, assuring employers of your capabilities. 3. Enhanced earning potential: PMP-certified professionals often command higher salaries. 4. Industry recognition: It's a globally recognized credential, providing credibility and respect in the field.",
      item: "item-6",
    },
    {
      question: "Is the PMP course difficult to learn?",
      answer: "Smartranx's PMP course presents an advanced curriculum crafted by industry experts with extensive training backgrounds. Recognizing various learning requirements, they strive to convey concepts in a beginner-friendly fashion, making the PMP course accessible and easily understandable.",
      item: "item-7",
    },
    {
      question: "Benefits of PMP Certification for Professionals?",
      answer: "Key Advantages of the Project Management Professional (PMP) Certification in 2023 1. Global Recognition: The PMP certification is renowned worldwide. 2. Skill Enhancement: Acquire new and valuable project management skills. 3. Improved Project Management: Become a more effective project manager. 4. Enhanced Earnings: PMP-certified professionals typically earn higher salaries. 5. Resume Enhancement: The certification adds value to your resume. 6. Professional Dedication: It validates your commitment to the field. 7. Network Strengthening: Connect with a broader professional network. The Project Management Professional (PMP) certification is a globally esteemed credential, showcasing a project manager's proficiency in industry best practices and techniques. Earning a PMP certification offers various advantages, including substantial salary increases. According to the Project Management Institute's (PMI) salary survey, PMP-certified professionals enjoy, on average, a 25% higher income compared to their non-certified peers. This premium salary reflects the PMP certification's recognition as the gold standard in project management and the enhanced value these certified professionals bring to their organizations.",
      item: "item-8",
    },
    {
      question: "What do you learn through a training program in PMP?",
      answer: "Through this training program, you learn: • Project management basics • How to create a high-performance team and keep them on track • How to plan and manage a project  • Align the project objectives with the organization’s goals",
      item: "item-9",
    },
    {
      question: "What is included in the PMP Certification course?",
      answer: "• 35 Contact Hours Certificate. • 6 Full-Length Mock Exams featuring 1200 practice questions. • PMP Exam Blueprint (PMP Exam Application steps and procedure). • PMP Exam Tips, Techniques, and Downloadable Courseware eBook. • PMP Exam Application Assistance. • End-to-end support via phone, mail, and chat.",
      item: "item-10",
    },
    {
      question: "What has changed in the new PMP exam format?",
      answer: "The domains for the updated PMP Certification exam have been expanded to encompass a broader range of skills and methodologies. The revised PMP Certification exam now focuses on three primary domains: 1. People: Emphasizing leadership and team management skills crucial for effective project leadership. 2. Process: Reinforcing the technical aspects of project management, ensuring a robust foundation. 3. Business Environment: Highlighting the alignment between projects and organizational strategy. Additionally, the updated content integrates predictive, agile, and hybrid approaches into the examination. For comprehensive information, please consult the PMP exam updates provided by PMI.",
      item: "item-11",
    },
    {
      question: "Why should I do PMP Certification with Smartranx?",
      answer: "Our curriculum closely mirrors the content covered in the official PMP Certification exam. We employ an applied learning methodology to facilitate a deeper understanding of key concepts, and our instructors themselves hold PMP certification. The PMP course offers a comprehensive package, including access to digital resources from PMI, real-world case studies, industry projects, interactive quizzes, and simulation exams. This comprehensive approach equips you to tackle the PMP exam with confidence and apply your newfound knowledge effectively in real-world scenarios.",
      item: "item-12",
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
