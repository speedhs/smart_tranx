import Image from "next/image";
import React from "react";

const Keyfeatures = () => {
  const trainingOptions = [
    {
      title: "Earn maximum of 22 PDUs with instructor-led sessions",
      description: "",
      icon: "https://img.icons8.com/fluency/50/000000/calendar.png",
    },
    {
      title: "Access to official content from PeopleCert",
      description: "",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Course fee includes examination fee",
      description: "",
      icon: "https://img.icons8.com/fluency/50/000000/test-tube.png",
    },
    {
      title: "30 quizzes, 2 real-world industry cases, and 4 simulation assessments",
      description: "",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Accredited course curriculum with lifetimes access to recorded and self-learning content",
      description: "",
      icon: "https://img.icons8.com/fluency/50/000000/test-tube.png",
    },
    {
      title: "24x7 course assistance service",
      description: "",
      icon: "https://img.icons8.com/fluency/50/000000/money-back-guarantee.png",
    },
  ];

  return (
    <div className="flex flex-col mt-4 p-6  max-w-[1000px]">
      <h1 className="text-2xl font-bold">Key Features</h1>
      <div className="grid grid-cols-2 mt-6 gap-5 p-5">
        {trainingOptions.map((item) => (
          <div
            className="flex flex-row items-center justify-center max-w-lg"
            key={item.title}
          >
            <Image src={item.icon} height={30} width={30} alt="Feature Icon" />
            <div className="flex flex-col ml-3">
              <h1 className="font-semibold">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyfeatures;
