import React from "react";
import { FaCheck } from "react-icons/fa";

const Overview = () => {
  return (
    <div className="p-6 max-w-[1000px]">
      <h1 className="font-bold text-2xl my-3">
        Change Management Certification Program
      </h1>
      <p className="font-normal">
        Change can often be a source of frustration and may not align with the
        strategies you've honed throughout your management career. However,
        embracing change is essential, and as a change manager, you're expected
        to take the lead. With this in mind, we offer a practical one-day course
        that delves into all aspects of change impact, equipping you with
        contemporary best practices and techniques. Our Change Management
        Certification Training course is designed to empower students with the
        skills to develop pragmatic solutions for effectively implementing
        change in the workplace. Participants will gain expertise in addressing
        staff concerns and fostering collaboration through strategic best
        practices. By mastering change management techniques, students will be
        well-prepared to facilitate seamless workplace transitions while
        upholding employee morale. In an organizational context, change
        transcends policies; it deeply impacts people. Many organizations
        frequently introduce substantial changes to enhance processes, adapt to
        shifts, or comply with new regulations. Often, the human dimension of
        these changes is inadequately considered. Change management
        professionals bridge this gap by taking a people-centric approach,
        guiding organizations through changes at individual, organizational, and
        enterprise levels. The knowledge and skills imparted in this course
        align with the educational standards set by the Association of Change
        Management Professionals and industry norms. The valuable expertise
        acquired is readily applicable to students' careers, enabling them to
        navigate and lead change successfully.
      </p>
      <h1 className="font-bold text-2xl my-3">What you’ll learn?</h1>
      <p className="font-normal">
        • Become better managers and business leaders by achieving optimal
        personal and business performance • Combine information learn about
        implementing change management, its tools and industry best practice,
        facilitated by an experienced change leader. Develop, apply and embed
        the knowledge and skills acquired by this program to your organization.
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
          Who can do Change Management Certification Training?
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-5 ">
          <h1>Portfolio, Program and Project Managers</h1>
          <h1>Business Change Managers</h1>
          <h1>Team Managers</h1>
          <h1>Team Leaders</h1>
          <h1>Mid-senior level managers</h1>
          <h1>
            Professionals leading change at the team or organizational level
          </h1>
        </div>
      </div>

      {/* Exam Format */}
      <div className="mt-8">
        <h2 className="font-bold text-lg">Exam Format</h2>
        <p className="mt-4">
          After the class, participants will be given a Course Completion
          Certificate from Shine BrightX. They will receive a soft copy of the
          certificate by email.
        </p>
      </div>
    </div>
  );
};

export default Overview;
