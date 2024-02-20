import React from "react";
import { FaCheck } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="p-6 max-w-[1000px]">
      <h1 className="font-bold text-2xl my-3">Project Management Techniques</h1>
      <p className="font-normal">
        The Project Management Techniques training is an interactive workshop
        designed to provide participants with a comprehensive introduction to
        the latest and most up-to-date project management techniques. It aims to
        equip individuals with the knowledge and skills needed to excel as
        effective project managers in today's dynamic and competitive business
        environment.
      </p>
      <p className="font-bold mt-6">
        Key highlights of this training workshop include:
      </p>
      <ul className="list-disc pl-6 gap-8 mt-6">
        <li className="flex items-start">
          <FaCheck className="mt-1 mr-2 h-6 w-6 text-orange-500" />
          <span>
            <strong>Updated Methodologies:</strong> The training delves into
            contemporary project management methodologies, ensuring that
            participants are well-versed in the latest industry standards and
            best practices.
          </span>
        </li>
        <li className=" flex items-start">
          <FaCheck className="mt-1 mr-2 h-6 w-6 text-orange-500" />
          <span>
            <strong>Interactive Learning:</strong> The workshop fosters an
            interactive learning environment where participants can engage with
            the material, ask questions, and collaborate with their peers. This
            hands-on approach enhances understanding and retention.
          </span>
        </li>
        <li className=" flex items-start">
          <FaCheck className="mt-1 mr-2 h-6 w-6 text-orange-500" />
          <span>
            <strong>Effective Implementation:</strong> The focus is not just on
            theory but on practical implementation. Participants will learn how
            to apply these techniques in real-world project scenarios to achieve
            successful outcomes.
          </span>
        </li>
        <li className=" flex items-start">
          <FaCheck className="mt-1 mr-2 h-6 w-6 text-orange-500" />
          <span>
            <strong>Becoming a Great Project Manager:</strong> The ultimate goal
            of this training is to empower individuals to become exceptional
            project managers. This includes honing leadership skills, effective
            communication, stakeholder management, risk assessment, and more.
          </span>
        </li>
        <li className=" flex items-start">
          <FaCheck className="mt-1 mr-2 h-6 w-6 text-orange-500" />
          <span>
            <strong>Adaptation to Modern Challenges:</strong> The course
            acknowledges the challenges presented by the ever-evolving business
            landscape. It equips participants with the tools and knowledge
            needed to adapt to these challenges and excel in their project
            management roles.
          </span>
        </li>
      </ul>
      <p className="mt-6">
        By the end of this training, you will have a solid foundation in
        contemporary project management techniques, making them well-prepared to
        tackle the demands of modern project management and drive successful
        project outcomes.
      </p>

      {/* Who can do Project Management Techniques Certification Training? */}
      <div className="mt-8">
        <h2 className="font-bold ">
          Who can do Project Management Techniques Certification Training?
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-5 ">
          <h1>Program Managers</h1>
          <h1>Project Managers</h1>
          <h1>Associate PMs</h1>
          <h1>Project Administrators</h1>
          <h1>Project Team Members</h1>
          <h1>Project managers</h1>
          <h1>Project leaders</h1>
          <h1>Senior project managers</h1>
          <h1>Team leaders</h1>
          <h1>Product Managers</h1>
        </div>
      </div>

      {/* Exam Format */}
      <div className="mt-8">
        <h2 className="font-bold text-lg">Exam Format</h2>
        <p className="mt-4">
          Upon course completion, participants will be awarded a Course
          Completion Certificate from Smartranx. The certificate will be
          delivered in digital format, and participants will receive a soft copy
          via email.
        </p>
      </div>
    </div>
  );
};

export default Overview;
