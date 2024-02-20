"use client"

import Adds from "@/components/blog/Adds";
import Blogcard from "@/components/blog/Blogcard";
import { Separator } from "@/components/ui/separator";
import { Roboto } from "next/font/google";
import { useRouter } from "next/router";
import React from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

const page = () => {

  const content = [
    {
      title:
        "Navigating the Agile Landscape: Essential Skills for PMI-ACP Success",
      description:
        "Guide to mastering Agile principles and techniques for professionals pursuing PMI-ACP certification.",
      url: "Navigating-Agile-Landscape",
      imageUrl: "/addpage.jpg"

    },
    {
      title: "Understanding Agile Principles",
      description:
        "Exploration of core Agile principles, emphasizing iterative development, customer satisfaction, and continuous improvement.",
      url: "Understanding-Agile-Principles",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "The PMI-ACP Certification – An Overview",
      description:
        "Overview of PMI-ACP certification, recognizing knowledge of Agile principles, practices, and tools across Agile methodologies.",
      url: "The-PMI-ACP-Certification",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "Essential Skills for PMI-ACP Success",
      description:
        "Key skills required for success, including adaptability, effective communication, collaboration, continuous improvement mindset, technical proficiency, and problem-solving.",
      url: "Essential-Skills-for-PMI-ACP",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "Practical Tips to Prepare for the PMI-ACP Exam",
      description:
        "Tips for preparing for the PMI-ACP exam, blending theoretical understanding with practical experience through study materials, study groups, hands-on projects, and practice exams.",
      url: "Tips-Prepare-PMI-ACP-Exam",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "The Future of Agile and PMI-ACP",
      description:
        "Insights into the evolving landscape of Agile methodologies and the growing relevance of PMI-ACP certification in mainstream project management practices.",
      url: "Future-Agile-PMI-ACP",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "Conclusion",
      description:
        "Summary of the flexibility and efficiency offered by Agile methodologies, highlighting the importance of PMI-ACP certification for career enhancement in the dynamic field of project management.",
      url: "Agile-Conclusion",
      imageUrl: "/addpage.jpg"
    },
  ];
 

  return (
    <div className="min-w-full min-h-screen  items-center justify-center">
      <h1></h1>
      <div className="">
        
        <Adds />
      </div>
      <div className="grid grid-cols-4 p-10 gap-8">
        {content.map((item) => (
          <a
            href={`/Home/Blog/${item.url}`}
            className="cursor-pointer "
            key={item.title}
          >
            <Blogcard title={item.title} description={item.description}  image={item.imageUrl} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default page;

// <div className="min-h-screen min-w-full bg-transparent ">
//   <div className="flex items-center min-w-full  min-h-full  mt-3 justify-center mr-3 ml-3">
//     <div className="w-full min-h-6 bg-orange-100 rounded-xl p-5 flex flex-col gap-y-5 items-start justify-center">

//     </div>
//   </div>
// </div>
