import React from "react";
import { FaCheck } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="p-6 max-w-[1000px]">
      <h1 className="font-bold text-2xl my-3">
        Certified Scrum Master Overview
      </h1>
      <p className="font-normal">
        The CSM certification course centers on delivering a heightened
        comprehension of Scrum methodologies and their practical application.
        Its primary objective is to enable participants to attain the Certified
        ScrumMaster® designation, a credential bestowed by Scrum Alliance upon
        individuals who have satisfactorily completed a CSM certification course
        and validated their understanding through successful examination.
      </p>

      {/* Eligibility */}
      <div className="mt-8">
        <h2 className="font-bold">Eligibility</h2>
        <p>
          The CSM Certification is suitable for members of Scrum teams, managers of Scrum teams, teams transitioning to Scrum, and professionals who are interested in pursuing a career as a professional Certified ScrumMaster.
        </p>
        <h2 className="font-bold mt-7">Pre-requisites</h2>
        <p>
          Learners need to possess an undergraduate degree or a high school diploma.
        </p>
      </div>

      {/* Exam Format */}
      <div className="mt-8">
        <h2 className="font-bold text-lg">Exam Format</h2>
        <p className="mt-4">
          The CSM Certification Process involves several steps to become a Certified ScrumMaster®:
        </p>
        <ul className="list-disc pl-6 mt-4">
          <li>Participate in the 2-day CSM® course</li>
          <li>Following the successful course completion, Scrum Alliance will send you a welcome email containing a link.</li>
          <li>Click on the link provided by Scrum Alliance to activate your Scrum Alliance® certification account, where you can access the CSM test.</li>
          <li>Take the 1-hour online CSM® test, which consists of 50 Multiple-Choice Questions (MCQs), using the provided credentials.</li>
          <li>To pass the exam, you need to achieve a minimum score of 74%.</li>
          <li>Upon successfully passing the test, you will be prompted to accept a license agreement.</li>
          <li>After accepting the agreement, you will receive the Certified ScrumMaster® (CSM®) designation from Scrum Alliance, along with a 2-year membership with Scrum Alliance.</li>
          <li>Keep in mind that CSM certification needs to be renewed once every two years if it has expired.</li>
        </ul>
        <p className="mt-4">
          This process outlines the essential steps required to earn your Certified ScrumMaster® designation.
        </p>
      </div>
    </div>
  );
};

export default Overview;
