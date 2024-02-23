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
        // subCourses data...
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
      {/* Secondary navigation bar */}
      <div className="w-72 min-w-72 rounded-lg bg-gray-200 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Courses</h2>
          <ul className="space-y-2">
            {courses.map((course) => (
              <li key={course.name}>
                <a href={`#${course.url}`} className="block hover:text-blue-600">
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="overflow-y-auto flex-grow">
        <div className=" bg-slate-400 h-full">
          {courses.map((course) => (
            <div key={course.name} id={course.url} className="mb-8">
              <h1 className="text-2xl font-bold text-white mb-4">{course.name}</h1>
              <div className="flex flex-wrap gap-4">
                {course.subCourses.map((item) => (
                  <div key={item.name} className="w-60">
                    {/* Fixed size for each card */}
                    <Link href={`/Home/Courses/pages/${item.url}`}>
                      <Blogcard title={item.name} image="/addpage.jpg" />
                    </Link>
                  </div>
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
