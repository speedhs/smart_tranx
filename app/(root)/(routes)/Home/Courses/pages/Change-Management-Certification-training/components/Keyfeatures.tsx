import React from "react";

const Keyfeatures = () => {
  const trainingOptions = [
    {
      title: "1-day Change Management Certification",
      description:
        "1-day of instructor-led online live classroom on Gotomeeting.com or 1-day of traditional classroom training in your city",
      icon: "https://img.icons8.com/fluency/50/000000/calendar.png",
    },
    {
      title: "Accredited Trainers",
      description:
        "Our trainers are highly qualified, have 10+ years of real-world experience and will provide you with an engaging learning experience.",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Certificate",
      description: "Course completion certification issued by Shine BrightX",
      icon: "https://img.icons8.com/fluency/50/000000/certificate.png",
    },
    {
      title: "Case Studies",
      description:
        "Real-World Simulations and Case Studies prepared by the industry expert",
      icon: "https://img.icons8.com/fluency/50/000000/test-tube.png",
    },
    {
      title: "Flexible Schedule",
      description:
        "Weekday & Weekend courses available for in-person and live online",
      icon: "https://img.icons8.com/fluency/50/000000/clock.png",
    },
    {
      title: "Guaranteed to Run Bootcamp",
      description:
        "All training classes are guaranteed to run, whether they are classroom, Live virtual or in-house",
      icon: "https://img.icons8.com/fluency/50/000000/checkmark.png",
    },
    {
      title: "Support",
      description: "24/7 Support via Email, Online Chat, Telephone",
      icon: "https://img.icons8.com/fluency/50/000000/online-support.png",
    },
  ];

  return (
    <div className="flex flex-col mt-4 p-6 max-w-[1000px]">
      <h1 className="text-2xl font-bold">Key Features</h1>
      <div className="grid grid-cols-2 mt-6 gap-5 p-5">
        {trainingOptions.map((item) => (
          <div
            className="flex flex-row max-w-lg items-center justify-center"
            key={item.title}
          >
            <img src={item.icon} className="h-10 w-10 mr-4" alt="Feature Icon" />
            <div className="flex flex-col">
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
