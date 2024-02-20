import React from "react";

const Overview = () => {
  return (
    <div className="p-6 max-w-[1000px]">
      <h1 className="font-bold text-2xl my-3">
        Overview
      </h1>
      <p className="font-normal">
        Lean Six Sigma Green Belt
        Elevate your career in Lean Six Sigma by achieving your Lean Six Sigma Green Belt certification. Acquire a deep understanding of the DMAIC methodology through practical case studies and develop the essential skills required to contribute to your organization's growth. Our online Lean Six Sigma Green Belt certification program is designed in accordance with the IASSC exam, ensuring you're well-prepared for success. Lean Six Sigma Green Belt training The Six Sigma Green Belt plays a crucial role in collaboration with or under the guidance of a Six Sigma Black Belt. As a professional trained in Lean Six Sigma Green Belt Certification, you can serve as valuable team members in complex environments, analyzing and resolving quality issues and contributing to quality improvement projects. In essence, Six Sigma comprises a meticulously crafted set of tools and techniques designed to enhance processes within a company. This course aligns with global quality standards, covering the latest trends, emerging practices, essential knowledge in this expansive field, keeping you up to date with industry changes, and ensuring a comprehensive understanding of Quality Management tools and practices. According to an Indeed.com salary survey, individuals with Six Sigma certification consistently earn a median annual salary exceeding $100,000. What you’ll learn? By enrolling in this course, you will acquire a thorough grasp of a disciplined, data-driven approach to process improvement. These techniques are designed to eliminate defects in various processes, spanning from manufacturing to transactional, and from product-oriented to service-oriented sectors. Additionally, our program offers the opportunity to attain international certification from the esteemed German body TUV-SUV and IASSC, ensuring global recognition of your expertise. We also provide ongoing post-training support and guidance to guarantee your success in implementing these principles.
      </p>

      {/* Eligibility */}
      <div className="mt-8">
        <h2 className="font-bold">Eligibility criteria</h2>
        <p>
          This Lean Six Sigma Green Belt certification is perfect for Quality system managers, Quality analysts and managers, Quality auditors, Quality engineers, Quality supervisors, and any other individual looking to improve their organization.
          <br />
          Pre-requisites: Learners need to possess an undergraduate degree or a high school diploma.
        </p>
      </div>

      {/* Exam Format */}
      <div className="mt-8">
        <h2 className="font-bold text-lg">Exam Format</h2>
        <p className="mt-4">
          There are no prerequisites for attending the course or to sit for the IASSC Certified Green Belt, For more about this please visit the FAQ's page <a href="http://www.iassc.org/faqs">http://www.iassc.org/faqs</a>
        </p>
      </div>
    </div>
  );
};

export default Overview;
