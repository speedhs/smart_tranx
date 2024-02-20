import Image from "next/image";
import React from "react";

const Keyfeatures = () => {
  const trainingOptions = [
    {
      title: "4-days CAPM Bootcamp",
      description:
        "4-days of instructor-led online live classroom on Gotomeeting.com or 4-days of traditional classroom training in your city",
      icon: "https://img.icons8.com/fluency/50/000000/calendar.png",
    },
    {
      title: "Accredited Trainers",
      description:
        "Our trainers are highly qualified, have 10+ years of real-world experience and will provide you with an engaging learning experience",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Success Ratio",
      description: "Success Ratio close to 98.6% of clearing the exam",
      icon: "https://img.icons8.com/fluency/50/000000/test-tube.png",
    },
    {
      title: "Case Studies",
      description:
        "Study Guide, Case Studies, Mock tests prepared by the industry expert",
      icon: "https://img.icons8.com/fluency/50/000000/test-tube.png",
    },
    {
      title: "100% Money-Back Guarantee",
      description: "100% money-back guarantee* within 7 days of enrollment",
      icon: "https://img.icons8.com/fluency/50/000000/money-back-guarantee.png",
    },
    {
      title: "Flexible Schedule",
      description:
        "Weekday & Weekend courses available for in-person and live online",
      icon: "https://img.icons8.com/fluency/50/000000/clock.png",
    },
    {
      title: "Certificate",
      description: "Earn 23 PDUs after course completion",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Support",
      description: "24/7 Support via Email, Online Chat, Telephone",
      icon: "https://img.icons8.com/fluency/50/000000/headset.png",
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
