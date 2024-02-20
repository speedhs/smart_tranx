import Blogcard from "@/components/blog/Blogcard";
import Link from "next/link";
import React from "react";

const Page = () => {
  const courses = [
    {
      name: "Project Management",
      url: "project-management",
      icon: "📊",
      subCourses: [
        {
          name: "PMP Certification Training",
          url: "PMP-certification-course",
        },
        {
          name: "CAPM Certification Training",
          url: "Certified-Associate-in-Project-Management",
        },
        {
          name: "Project Management Techniques",
          url: "project-management-techniques-certification-training",
        },
        {
          name: "Change Management Techniques",
          url: "Change-Management-Certification-training",
        },
      ],
    },
    {
      name: "Cyber Security",
      url: "cyber-security",
      icon: "🔐",
      subCourses: [
        {
          name: "CISA Certification Training",
          url: "cisa-certification-training",
        },
        {
          name: "CISM Certification Training",
          url: "cism-certification-training",
        },
        {
          name: "CISSP Certification Training",
          url: "cissp-certification-training",
        },
      ],
    },
    {
      name: "Agile Management",
      url: "agile-management",
      icon: "🔄",
      subCourses: [
        {
          name: "PMI-ACP Certification Training",
          url: "PMI-ACP-Certification",
        },
        {
          name: "CSM Certification Training",
          url: "Certified-Scrum-Master",
        },
      ],
    },
    {
      name: "IT Service Management",
      url: "it-service-management",
      icon: "💼",
      subCourses: [
        {
          name: "ITIL V4 Foundation Training",
          url: "ITIL-certification-course",
        },
      ],
    },
    {
      name: "Quality Management",
      url: "quality-management",
      icon: "📈",
      subCourses: [
        {
          name: "Lean Six Sigma Green Belt Certification",
          url: "Lean-Six-Sigma-Green-Belt-training",
        },
      ],
    },
    {
      name: "Soft Skills Training",
      url: "soft-skills-training",
      icon: "🧠",
      subCourses: [
        {
          name: "Conflict Management Training",
          url: "conflict-management-training",
        },
        {
          name: "Management Skills",
          url: "management-skills",
        },
      ],
    },
  ];

  return (
    <div className="h-screen w-full flex p-5 gap-3">
      <div className="w-auto min-w-72 rounded-lg bg-gray-200 overflow-y-auto">
        {courses.map((course) => (
          <div
            key={course.name}
            className="flex items-center justify-start w-full h-auto min-h-14 p-4 bg gap-3 text-lg"
          >
            <h1>{course.name}</h1>
          </div>
        ))}
      </div>
      <div className="overflow-y-auto flex-grow">
        <div className=" bg-slate-400 h-full">
          {courses.map((course) => (
            <div key={course.name}>
              <h1>{course.name}</h1>
              <div className="flex flex-wrap">
                {course.subCourses.map((item) => (
                  <Link href={`/Home/Courses/pages/${item.url}`}>
                    <Blogcard
                      key={item.name}
                      title={item.name}
                      image="/addpage.jpg"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
