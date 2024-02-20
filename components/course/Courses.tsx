// import Link from "next/link";
// import React from "react";

// const Courses = () => {
//   const courses = [
//     {
//       name: "PMP® Certification Training Course",
//       url: "pmp-certification-training-course ", // Slug for the actual URL
//     },
//     {
//       name: "CAPM® Certification Training",
//       url: "capm-certification-training", // Slug for the actual URL
//     },
//     {
//       name: "Project Management Techniques Certification",
//       url: "project-management-techniques-certification", // Slug for the actual URL
//     },
//     {
//       name: "PMI-ACP® Certification",
//       url: "pmi-acp-certification", // Slug for the actual URL
//     },
//     {
//       name: "CSM® Certification Training",
//       url: "csm-certification-training", // Slug for the actual URL
//     },
//     {
//       name: "ITIL® V4 Foundation Training",
//       url: "itil-v4-foundation-training", // Slug for the actual URL
//     },
//     {
//       name: "Lean Six Sigma Green Belt Certification",
//       url: "lean-six-sigma-green-belt-certification", // Slug for the actual URL
//     },
//     {
//       name: "Management Certification Training",
//       url: "management-certification-training", // Slug for the actual URL
//     },
//   ];

//   return (
//     <div className="w-[40rem] h-auto flex flex-col">
//       <h1 className="font-semibold underline py-2">ALL COURSES</h1>
//       <div className=" grid grid-cols-2 gap-5 py-4">
//         {courses.map((course) => (
//           <Link href={`/Home/Courses/${course.url}`}>
//             <h3 className="text-sky-800 hover:text-black">{course.name}</h3>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Courses;

import Link from "next/link";
import React from "react";


const Courses = () => {
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
    <div className="w-auto h-auto flex flex-col ">
      <div className="grid grid-cols-2 gap-5 py-4">
        {courses.map((course) => (
          <div key={course.url}>
            <div className="flex items-center mb-3 w-auto p-2 bg-orange-100 rounded-md">
              <span className="mr-2">{course.icon}</span>
              <Link href="">
                <h3 className="text-sky-800 hover:text-black">{course.name}</h3>
              </Link>
            </div>
            <div className="pl-5">
              {course.subCourses.map((subCourse,index) => (
                <div key={subCourse.url} className="flex items-center mt-8">
                  <span className="mr-2"></span>
                  <div className="flex flex-col items-center ">
                    <div className="bg-black rounded-full w-3 h-3 mr-2 opacity-75"></div>
                    {index !== course.subCourses.length - 1 && <div className="absolute w-1 h-16 mr-2 rounded-lg bg-black opacity-50 "></div>}
                  </div>
                  <Link href={`/Home/Courses/pages/${subCourse.url}`}>
                    <p className="text-gray-600 hover:text-black ">
                      {subCourse.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
