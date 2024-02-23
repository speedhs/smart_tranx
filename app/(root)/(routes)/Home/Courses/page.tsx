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
    // Other courses data...
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
              <div className="flex flex-wrap">
                {course.subCourses.map((item) => (
                  <Link href={`/Home/Courses/pages/${item.url}`} key={item.name}>
                    <Blogcard title={item.name} image="/addpage.jpg" />
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
