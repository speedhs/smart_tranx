import Image from "next/image";
import React from "react";

const Keyfeatures = () => {
  const trainingOptions = [
    {
      title: "1-day Project Management Techniques Training",
      description:
        "You have the option to choose between a 1-day instructor-led online live classroom session on Gotomeeting.com or a 1-day traditional classroom training held in your city.",
      icon: "https://img.icons8.com/fluency/50/000000/calendar.png",
    },
    {
      title: "Accredited Trainers",
      description:
        "Our trainers are exceptionally qualified, boasting over a decade of practical, real-world experience. They are dedicated to delivering an engaging and enriching learning experience for you.",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Certificate",
      description: "Course completion certification issued by Smartranx",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Case Studies",
      description:
        "Real-World Simulations and Case Studies prepared by the industry experts.",
      icon: "https://img.icons8.com/fluency/50/000000/test-tube.png",
    },
    {
      title: "Flexible Schedule",
      description:
        "Weekday & Weekend courses available for in-person and live online",
      icon: "https://img.icons8.com/fluency/50/000000/clock.png",
    },
  ];

  return (
    <div className="flex flex-col mt-4 p-6  max-w-[1000px]">
      <h1 className="text-2xl font-bold">Key Features</h1>
      <div className="grid grid-cols-2 mt-6 gap-5 p-5">
        {trainingOptions.map((item) => (
          <div
            className="flex flex-row  max-w-lg items-center justify-center "
            key={item.title}
          >
            {/* <Image src={item.icon}  height={30} width={30}  alt="Feature Icon" /> */}
            <div className=" flex flex-col">
              <h1 className="font-semibold">{item.title}</h1>
              <h1>{item.description}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyfeatures;
