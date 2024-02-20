import React from "react";

const Overview = () => {
  return (
    <div className="p-6 max-w-[1000px]">
      <h1 className="font-bold text-2xl my-3">
        Overview
      </h1>
      <p className="font-normal">
        Smartranx’s PMP training boot camp covers all the essential topics which are absolutely crucial for a project management professional. Our course curriculum is aligned with the latest PMBOK 7th edition guide book. Additionally, you will gain insight into real-life case studies, the exam pattern, and receive valuable tips and tricks to excel in your project management journey.
      </p>

      {/* Eligibility */}
      <div className="mt-8">
        <h2 className="font-bold">Eligibility criteria</h2>
        <p>
          For PMP Certification Training, you should have a secondary degree (i.e. high school diploma, associate’s degree or the global equivalent) with 7,500 hours leading and directing projects along with 35 hours of project management education.
          <br />
          OR
          <br />
          You should have a four-year degree with 4,500 hours leading and directing projects along with 35 hours of project management education.
        </p>
      </div>

      {/* Exam Format */}
      <div className="mt-8">
        <h2 className="font-bold text-lg">Exam Format</h2>
        <p className="mt-4">
          The PMP exam is a computer-based test.
          <br />
          The exam consists of 180 multiple-choice questions.
        </p>
        <p className="mt-4 font-bold">Exam Duration:</p>
        <p>The exam duration is four hours.</p>
      </div>
    </div>
  );
};

export default Overview;
