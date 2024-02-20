import Link from 'next/link'
import React from 'react'

const ResoursersPopover = () => {

  const contents = [
    {
      title: "Blog",
      url: "/Home/Blog",
      icon: "📝" // Icon for Blog
    },
    {
      title: "Tutorials",
      url: "/Home/Tutorials",
      icon: "📘" // Icon for Tutorials
    },
    {
      title: "Practice Test",
      url: "/Home/Practice_test",
      icon: "📝" // Icon for Practice Test
    },
    {
      title: "Interview Questions",
      url: "/Home/Interview_Questions",
      icon: "❓" // Icon for Interview Questions
    },
  ];

  return (
    <div className="w-auto gap-y-3 h-auto flex flex-col">
      
      {contents.map((resource) => (
        <Link href={resource.url} key={resource.title}>
          <div className="flex items-center gap-2">
            <span>{resource.icon}</span>
            <h3 className="text-black hover:text-orange-500 transition-all">{resource.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ResoursersPopover;
