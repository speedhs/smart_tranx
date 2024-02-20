import React from "react";

const Overview = () => {
  return (
    <div className="p-6 max-w-[1000px]">
      <h1 className="font-bold text-2xl my-3">
        Course Overview
      </h1>
      <p className="font-normal">
        The PMI-ACP course encompasses a wide range of agile methodologies, tools, and techniques, offering real-life scenarios as part of the curriculum. It incorporates the principles and concepts found in the newly introduced Agile Practice Guide, which serves as a valuable reference resource for the PMI-ACP exam. This training program is designed to align with the 2017 PMI® guidelines, providing you with the knowledge and skills necessary to successfully pass your PMI-ACP exam and excel in the field of agile project management.
      </p>
      <h2 className="font-bold text-lg mt-8">What you’ll learn?</h2>
      <ol className="list-decimal ml-6">
        <li>Agile Methodologies: Gain a deep understanding of various agile methodologies, including Scrum, Kanban, Lean, XP, and more.</li>
        <li>Agile Principles: Explore the foundational principles of agile, such as customer collaboration, responding to change, and iterative development.</li>
        <li>Agile Tools and Techniques: Learn how to effectively use agile tools and techniques in project management and software development.</li>
        <li>Agile Frameworks: Understand agile frameworks and their applications, including user stories, backlogs, and sprint planning.</li>
        <li>Agile Practices: Study best practices in agile, including continuous improvement, timeboxing, and frequent testing.</li>
        <li>Agile Values: Delve into the core values of agile, which include individuals and interactions, working solutions, and customer collaboration.</li>
      </ol>

      <p className="font-normal mt-4">
        The PMI-ACP training provides a comprehensive understanding of agile principles and practices, preparing you to become a proficient agile practitioner and successfully earn the PMI-ACP certification.
      </p>

      {/* Eligibility */}
      <div className="mt-8">
        <h2 className="font-bold">Eligibility</h2>
        <p>
          The PMI Agile certification is a mandatory qualification in the IT and tech industries for project management roles worldwide. This PMI-ACP Certification course is ideal for a wide range of professionals, including project managers, agile team members, associate managers, team leads, managers, project executives, software developers, and anyone with aspirations of becoming a project manager.
        </p>
      </div>

      {/* Pre-requisites */}
      <div className="mt-8">
        <h2 className="font-bold">Pre-requisites</h2>
        <p>
          To apply for the PMI Agile Certified Practitioner (PMI-ACP) certification through PMI, you must meet the following eligibility criteria:
        </p>
        <ul className="list-disc ml-6">
          <li>Have a secondary degree or higher (e.g., bachelor's degree or equivalent).</li>
          <li>Accumulate a minimum of 2,000 hours of general project management experience within the last five years.</li>
          <li>Accumulate a minimum of 1,500 hours of experience working on agile project teams within the last three years.</li>
        </ul>
        <p className="mt-4">Meeting these criteria is essential to qualify for the PMI-ACP certification.</p>
      </div>
    </div>
  );
};

export default Overview;
