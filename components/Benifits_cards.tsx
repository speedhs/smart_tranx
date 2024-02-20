import { AwardIcon, RouteIcon, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaHeadset } from "react-icons/fa";

const Benifits_cards = () => {
  const items = [
    {
      title: "Quality",
      description:
        "We believe that every professional who comes knocking at our doors have certain goals that can be only achieved with quality training.",
      icon: AwardIcon,
    },
    {
      title: "Experience",
      description:
        "You will obtain hands on experience on current best practice and case studies which fit into your work schedule trained by best industry experts.",
      icon: RouteIcon,
    },
    {
      title: "Certificate",
      description:
        "After successfully completing your course & projects, Shine BrightX will provide a professional certification for you",
      icon: ShieldCheck,
    },
    {
      title: "Support",
      description:
        "We offer 24*7 support to ensure not a single client misses an opportunity to score high grades in their certification exam",
      icon: FaHeadset,
    },
  ];
  return (
    <div className="grid grid-cols-4 p-10 gap-4">
      {items.map((item) => (
        <div className="w-auto max-w-96  h-auto flex flex-col items-center p-6 justify-center bg-white gap-4 shadow-lg rounded-xl border-b-4 border-transparent hover:border-orange-500 transition border-opacity-0 duration-300 ease-in-out">
           <item.icon className="w-11 h-11 text-orange-500"/>
           <h1 className="text-lg font-semibold ">{item.title}</h1>
           <p className="">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Benifits_cards;
