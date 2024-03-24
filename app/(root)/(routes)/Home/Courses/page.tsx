"use client"
import React, { useState } from "react";
import Link from "next/link";
import Blogcard from "@/components/blog/Blogcard";

interface SubCourse {
  name: string;
  url: string;
}

interface Course {
  name: string;
  url: string;
  icon: string;
  subCourses: SubCourse[];
}

const Page: React.FC = () => {
  const initialCourses: Course[] = [
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

  // Tracks which courses are checked
  const [checkedCourses, setCheckedCourses] = useState<string[]>(initialCourses.map(course => course.url));

  const handleCheckboxChange = (courseUrl: string) => {
    setCheckedCourses(prev => 
      prev.includes(courseUrl) ? prev.filter(url => url !== courseUrl) : [...prev, courseUrl]
    );
  };

  // Determines if a course is checked
  const isCourseChecked = (courseUrl: string) => {
    return checkedCourses.includes(courseUrl);
  };

  return (
    <div className="flex p-5 gap-3 overflow-hidden">
      {/* Sticky left navigation */}
      <div className="min-w-72 rounded-lg bg-gray-200 fixed left-2 top-13 bottom-13 overflow-auto">
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">Courses</h2>
          <ul className="space-y-2">
            {initialCourses.map((course) => (
              <li key={course.url}>
                <a href={`#${course.url}`} className="block hover:text-blue-600">{course.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content with checkboxes */}
      <div className="flex-grow pl-80">
        <div className="mb-4">
          {initialCourses.map((course) => (
            <label key={course.url} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                checked={isCourseChecked(course.url)}
                onChange={() => handleCheckboxChange(course.url)}
                className="mr-2"
              />
              {course.name}
            </label>
          ))}
        </div>

        {/* Course cards */}
        <div>
          {initialCourses.map((course) => 
            isCourseChecked(course.url) && (
              <div key={course.url} id={course.url} className="mb-8">
                <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
                <div className="flex flex-wrap gap-10">
                  {course.subCourses.map((subCourse) => (
                    <div key={subCourse.url} className="w-60">
                      <Link href={`/Home/Courses/pages/${subCourse.url}`} passHref>
                        <div>
                          <Blogcard title={subCourse.name} image="/addpage.jpg" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
