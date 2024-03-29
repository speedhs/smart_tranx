"use client";
import React, { useState } from "react";
import Link from "next/link";
import Blogcard from "@/components/blog/Blogcard";

interface Article {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

const Page: React.FC = () => {
  const articles: Article[] = [
    {
      title: "Navigating the Agile Landscape: Essential Skills for PMI-ACP Success",
      description: "Guide to mastering Agile principles and techniques for professionals pursuing PMI-ACP certification.",
      url: "Navigating-Agile-Landscape",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "Understanding Agile Principles",
      description: "Exploration of core Agile principles, emphasizing iterative development, customer satisfaction, and continuous improvement.",
      url: "Understanding-Agile-Principles",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "PMI-ACP vs. Traditional Project Management: Understanding the Agile Difference",
      description: "Overview of PMI-ACP certification, recognizing knowledge of Agile principles, practices, and tools across Agile methodologies.",
      url: "PMI-ACP vs. Traditional Project Management: Understanding the Agile Difference",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "Essential Skills for PMI-ACP Success",
      description: "Key skills required for success, including adaptability, effective communication, collaboration, continuous improvement mindset, technical proficiency, and problem-solving.",
      url: "Essential-Skills-for-PMI-ACP",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "Practical Tips to Prepare for the PMI-ACP Exam",
      description: "Tips for preparing for the PMI-ACP exam, blending theoretical understanding with practical experience through study materials, study groups, hands-on projects, and practice exams.",
      url: "Tips-Prepare-PMI-ACP-Exam",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "The Future of Agile and PMI-ACP",
      description: "Insights into the evolving landscape of Agile methodologies and the growing relevance of PMI-ACP certification in mainstream project management practices.",
      url: "Future-Agile-PMI-ACP",
      imageUrl: "/addpage.jpg"
    },
    {
      title: "Conclusion",
      description: "Summary of the flexibility and efficiency offered by Agile methodologies, highlighting the importance of PMI-ACP certification for career enhancement in the dynamic field of project management.",
      url: "Agile-Conclusion",
      imageUrl: "/addpage.jpg"
    },
  ];

  const [checkedArticles, setCheckedArticles] = useState<string[]>([]);

  // Initialize all articles as checked by default
  useState(() => {
    setCheckedArticles(articles.map(article => article.url));
  }, [articles]);

  const handleCheckboxChange = (articleUrl: string) => {
    setCheckedArticles((prev) =>
      prev.includes(articleUrl)
        ? prev.filter((url) => url !== articleUrl)
        : [...prev, articleUrl]
    );
  };

  return (
    <div className="flex flex-col p-5 gap-3 overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
        <h1 className="text-xl font-bold">Articles</h1>
        {/* Primary Nav Placeholder */}
      </div>

      <div className="p-4 bg-gray-50 border-b border-gray-200">
        {articles.map((article) => (
          <div key={article.url} className="flex items-center gap-2">
            <input
              type="checkbox"
              id={article.url}
              checked={checkedArticles.includes(article.url)}
              onChange={() => handleCheckboxChange(article.url)}
              className="mr-2"
            />
            <label htmlFor={article.url} className="block text-blue-600 cursor-pointer">
              {article.title}
            </label>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 p-10 gap-8">
        {articles
          .filter((article) => checkedArticles.includes(article.url))
          .map((article) => (
            <Link key={article.title} href={`/Home/Blog/${article.url}`} passHref>
              <div className="cursor-pointer">
                <Blogcard title={article.title} image={article.imageUrl} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Page