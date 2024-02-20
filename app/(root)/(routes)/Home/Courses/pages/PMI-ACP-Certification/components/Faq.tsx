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
      question: "How will I become a PMI®-Agile Certified Practitioner?",
      answer: "To attain the prestigious PMI-ACP certification awarded by the Project Management Institute (PMI), follow these steps:\n1. Enroll in formal PMI Agile Certified Practitioner training.\n2. Join PMI as a member.\n3. Pay the examination fee to schedule your exam directly.\n4. Successfully clear the exam.\nKindly be aware that PMI, PMBOK, PMP, PgMP, CAPM, PMI-RMP, and PMI-ACP are registered trademarks of the Project Management Institute, Inc.",
      item: "item-1",
    },
    {
      question: "What are the prerequisites for PMI Agile Certified Practitioner exam?",
      answer: "To qualify for the PMI Agile Certified Practitioner (PMI-ACP) certification via PMI, candidates must meet the following criteria:\n- Possess a secondary degree or higher education.\n- Accumulate a minimum of 2,000 hours of general project management experience within the last five years.\n- Acquire at least 1,500 hours of experience working on agile project teams during the last three years.",
      item: "item-2",
    },
    {
      question: "How do I become an Agile Project Manager?",
      answer: "Agile stands as a firmly established methodology within the domains of software development and project management. Its significance lies in its pivotal role in assisting managers to accelerate the delivery of value to their customers. Attaining a PMI ACP certification represents a valuable endeavor for individuals aiming to enhance their overarching management processes and strategies. This certification serves as the inaugural step toward achieving proficiency as an Agile Project Manager.",
      item: "item-3",
    },
    {
      question: "What Are The Steps To Get PMI ACP Certification?",
      answer: "We've assembled a comprehensive step-by-step guide to assist you in navigating the path to achieving PMI ACP certification, unlocking enhanced employment opportunities for you.\nStep 1: Get Proper Training To embark on the PMI ACP certification journey, begin with comprehensive training. Numerous online and offline PMI ACP training courses are available for enrollment. These courses cover a broad spectrum of agile methodologies, techniques, and tools. Upon completion, you'll gain proficiency in various skills, including Scrum, Kanban, adaptive planning, agile principles, multi-iterative models, agile mindset, agile practices, agile project management, and a working knowledge of agile, Scrum, Kanban, lean, extreme programming, and test-driven development (TDD).\nChoose between self-paced and instructor-led training options for the PMI Agile Certified Practitioner course. Expert instructors will provide detailed case studies, hands-on experiences, real-world examples, access to end-of-chapter quizzes, and the opportunity to attempt four simulation exams as part of your PMI ACP training.\nStep 2: Take the Exam After completing the training and mastering the required concepts and skills, proceed to the PMI ACP exam. Initiate the exam process by submitting your application through PMI.org, providing contact information, educational details, and work experience. Verify your eligibility and make the required payment.\nThe computer-based testing exam costs $435 for PMI members and $495 for non-members. For the paper-based testing option, the fees are $385 for PMI members and $445 for non-members. The 3-hour exam comprises 120 multiple-choice questions, with 100 scored and 20 unscored questions. The question weightage is as follows:\n- Agile principles and mindset: 16%\n- Value-driven delivery: 20%\n- Stakeholder engagement: 17%\n- Team performance: 16%\n- Adaptive planning: 12%\n- Problem detection and resolution: 10%\n- Continuous improvement: 9%\nStep 3: Get Certified Successfully passing the PMI ACP certification exam with a score of approximately 70% or higher grants you the PMI ACP certification, enhancing your career prospects. The certification is valid for three years, and to renew, accumulate at least 30 Professional Development Units (PDUs).",
      item: "item-4",
    },
    {
      question: "Who Should Take The PMI ACP Certification?",
      answer: "The PMI Agile Certified Practitioner (PMI-ACP) certification holds significant value for a diverse group of professionals aspiring to deepen their agile knowledge and advance their careers in the field. Here are key professionals who can reap substantial benefits from attaining a PMI-ACP certification:\n1. Project Managers:\n- PMI-ACP is particularly relevant for project managers overseeing projects with agile methodologies, providing them with the skills to effectively manage agile project teams.\n2. Scrum Masters:\n- Scrum Masters, pivotal in Scrum-based projects, can enhance their understanding of agile principles and practices through PMI-ACP, amplifying their effectiveness in their role.\n3. Product Owners:\n- Those responsible for defining and prioritizing project requirements, namely Product Owners, can align product development with agile principles by earning a PMI-ACP certification.\n4. Agile Coaches:\n- Agile Coaches offering guidance to agile teams can strengthen their credibility and knowledge in agile methodologies, boosting their coaching capabilities with a PMI-ACP certification.\n5. Business Analysts:\n- Business analysts engaged in agile projects benefit from PMI-ACP certification, equipping them with agile techniques for requirements gathering and analysis.\n6. Quality Assurance Professionals:\n- QA professionals in agile environments gain insights into agile testing methodologies and practices through PMI-ACP certification.\n7. Developers and Engineers:\n- Developers and engineers can enhance their understanding of agile development practices and principles, fostering more effective collaboration within agile teams.\n8. IT Managers:\n- IT managers overseeing agile projects in their organizations gain a broader perspective and agile expertise from PMI-ACP certification.\n9. Product Managers:\n- Product managers shaping product development and strategy align their approach with agile principles and respond adeptly to changing market demands with PMI-ACP certification.\n10. Business and Systems Analysts:\n- Professionals analyzing and designing complex systems leverage agile practices learned through PMI-ACP certification to enhance their work processes.\n11. Team Members:\n- Agile team members, including developers, testers, and designers, contribute more effectively to their agile teams with enhanced agile knowledge from PMI-ACP certification.\n12. Professionals in Transition:\n- Individuals transitioning into a career in agile project management or development demonstrate commitment and expertise in agile methodologies with PMI-ACP certification.\nIn summary, the PMI-ACP certification stands as a versatile credential benefiting professionals across diverse roles who operate in agile environments or seek to elevate their knowledge and skills in agile practices.",
      item: "item-5",
    },
    {
      question: "What Knowledge And Skills Can I Expect To Have After Completing The PMI - ACP Course?",
      answer: "Upon successful completion of the PMI Agile Certified Practitioner (PMI-ACP) certification, you will gain comprehensive knowledge across various essential topics, enriching your understanding of agile evolution, best practices in agile, agile project management, agile principles, various agile methodologies, agile frameworks, and agile processes. Additionally, the certification program delves into the three core components of Scrum, providing insights into different approaches within the agile domain and fostering a deep understanding of the Scrum framework and its operations.\nThe high-level skills and knowledge acquired through the PMI-ACP certification include expertise in:\n- Extreme Programming (XP) and Test-Driven Development (TDD).\n- Kanban, Lean, and Extreme Programming (XP).\n- Scrum, Kanban, Lean, and Extreme Programming (XP).\nFurthermore, the program transforms you into a proficient practitioner in tasks such as writing, formatting, and breaking down user stories. It offers in-depth insights into value stream mapping, rapid prototyping, and various other valuable techniques. Beyond technical prowess, the PMI-ACP certification places a strong emphasis on the mastery of non-technical skills. These include collaboration, communication, critical thinking, and problem-solving abilities. These non-technical skills prove invaluable when working on agile projects, enabling you to navigate and excel in complex, team-oriented environments effectively.",
      item: "item-6",
    },
    {
      question: "What Can You Do With A PMI ACP?",
      answer: "If you have an agile certified practitioner PMI ACP certification, you can work in various career roles, such as: \n- Agile Project Manager\n- Agile Coach\n- Software Project Manager\n- Certified ScrumMaster\n- Business Analyst\n- Kanban Coach\n- Product Developer\n- Software Engineer\n- Quality Assurance Tester\n- Agile Team Lead\n- IT Manager \n- Product Owner\n- Project Director",
      item: "item-7",
    },
    {
      question: "What Are The Benefits Of PMI ACP Certification?",
      answer: "Obtaining your PMI Agile Certified Practitioner (PMI-ACP) certification provides numerous advantages, underscoring its significance in the field of agile project management. Here are some key highlights:\n1. Global Recognition:\n- The PMI-ACP certification holds international recognition, broadening your horizons for employment opportunities with global companies and organizations.\n2. High Demand:\n- The substantial demand for professionals with PMI-ACP certification reflects the widespread adoption of agile practices and methodologies in project management across various industries.\n3. Comprehensive Agile Knowledge:\n- This certification equips you with in-depth knowledge of agile principles and diverse project management skills, establishing you as a proficient and well-rounded agile practitioner.\n4. Enhanced Professional Portfolio:\n- Adding PMI-ACP certification to your professional portfolio distinguishes you from other candidates, showcasing your commitment to agile best practices.\n5. Career Advancement:\n- PMI-ACP certification serves as a catalyst for career growth, offering opportunities to assume more challenging roles and responsibilities within the agile project management landscape.\n6. Higher Salary Potential:\n- Individuals holding the PMI-ACP certification often command higher salary packages, reflecting the value placed on their expertise in agile project management.\n7. Job Security:\n- The PMI-ACP agile certified credential enhances your job security by increasing your marketability, positioning you as a desirable candidate for employers seeking agile-savvy professionals.\nIn summary, the PMI-ACP certification combines global recognition, heightened demand in the job market, advanced knowledge and skills, professional distinction, opportunities for career growth, and financial rewards. As such, it stands as a valuable asset for individuals aspiring to pursue or advance their careers in agile project management.",
      item: "item-8",
    },
    // Add more FAQ items here
  ];

  return (
    <div className="flex flex-col mt-4 p-6 max-w-[1000px] min-w-[1000px]">
      <h1 className="text-2xl font-bold">FAQs</h1>
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
