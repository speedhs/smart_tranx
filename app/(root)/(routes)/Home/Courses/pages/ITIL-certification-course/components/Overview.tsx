import React from "react";

const Overview = () => {
  return (
    <div className="p-6 max-w-[1000px]">
      <h1 className="font-bold text-2xl my-3">
        ITIL Certification Course Overview
      </h1>
      <p className="font-normal">
        Prepare for the ITIL 4 Foundation Certification using our blended learning method. Attain crucial IT service skills, encourage team cooperation, and create value. Participate in live classes include assessments and real-world case studies. This ITIL course not only prepares you for the exam but also strengthens collaboration in the IT industry.
      </p>
      
      {/* Eligibility */}
      <div className="mt-8">
        <h2 className="font-bold">Eligibility</h2>
        <p>
          This ITIL V4 certification training course is ideal for a wide range of professionals, including IT executives, IT architects, operations managers, IT audit managers, IT planners and consultants, database administrators, ITSM trainers, service delivery professionals, quality analysts, application management and development teams, as well as IT managers. The ITIL V4 foundation certification is accessible to both experienced IT professionals and those who are just beginning their careers in IT.
        </p>
      </div>

      {/* Pre-requisites */}
      <div className="mt-8">
        <h2 className="font-bold">Pre-requisites</h2>
        <p>
          Learners need to possess an undergraduate degree or a high school diploma.
        </p>
      </div>
    </div>
  );
};

export default Overview;
