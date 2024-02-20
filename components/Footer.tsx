import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const company = [
    {
      title: "About Us",
      url: "/Home/Aboutus",
    },
    {
      title: "Careers",
      url: "",
    },
    {
      title: "Blog",
      url: "/Home/Blog",
    },
    {
      title: "gallery",
      url: "",
    },
  ];
  const support = [
    {
      title: "Terms & conditions",
      url: "/Home/Policies",
    },
    {
      title: "Refund policy",
      url: "/Home/Policies",
    },
    {
      title: "Privacy policy",
      url: "/Home/Policies",
    },
    {
      title: "Contact Us",
      url: "/Home/Contact",
    },
  ];
  const contact = [
    {
      title: "insta",
      url: "/insta.png",
    },
    {
      title: "twitter",
      url: "/Twitter.png",
    },
    {
      title: "youtube",
      url: "/youtube.png",
    },
  ];

  const certificationCourses = [
    { name: "PMP® Certification Training Course", url: "/pmp-certification" },
    { name: "CSM Certification Course", url: "/csm-certification" },
    {
      name: "ITIL 4 Foundation Certification Training Course",
      url: "/itil4-certification",
    },
    {
      name: "Lean Six Sigma Green Belt Certification Course",
      url: "/lean-six-sigma-certification",
    },
    { name: "CISSP Certification Training", url: "/cissp-certification" },
    { name: "CISA Certification Training", url: "/cisa-certification" },
    { name: "CISM Certification Training", url: "/cism-certification" },
    { name: "CAPM Certification Training", url: "/capm-certification" },
    {
      name: "Change Management Certification Training",
      url: "/change-management-certification",
    },
    {
      name: "Project Management Techniques Certification",
      url: "/project-management-techniques",
    },
    { name: "PMI-ACP® Certification", url: "/pmi-acp-certification" },
    {
      name: "Conflict Management Certification",
      url: "/conflict-management-certification",
    },
    {
      name: "Management Skills Certification",
      url: "/management-skills-certification",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-between w-full h-auto bg-black">
      <div className="flex flex-row gap-10 justify-between mt-10 mb-4">
        <div className="grid grid-cols-3  gap-x-14  ml-5">
          <div>
            <h1 className="text-orange-500">Company</h1>
            {company.map((item) => (
              <div className="mt-3">
                <Link href={item.url} className="">
                  <h3 className="font-extralight text-white text-xs gap-y-7 opacity-75">
                    {item.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-orange-500">Support</h1>
            {support.map((item) => (
              <div className="mt-3">
                <Link href={item.url} className="">
                  <h3 className="font-extralight text-white text-xs gap-y-7 opacity-75">
                    {item.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-orange-500">Contact Us</h1>
            {contact.map((item) => (
              <div className="flex items-center flex-row mt-3 ml-3">
                <Link href={item.url}>
                  <Image
                    src={item.url}
                    alt={item.title}
                    height={26}
                    width={26}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" ml-5 w-96">
          <h1 className="font-thin text-slate-300 ">Trending Courses</h1>
          <div className="">
            {certificationCourses.map((item) => (
              <Link href={item.url}>
                <span className="text-slate-500 text-xs">{item.name} || </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-96">
          <h1 className="text-slate-400 font-extralight ">Disclaimer</h1>
          <p className="text-slate-400 text-xs ">
            PMI®, PMBOK®, PMP® and PMI-ACP® are registered marks of the Project
            Management Institute, Inc. ITIL® is a registered Trade Mark of
            AXELOS Limited, used under permission of AXELOS Limited. All rights
            reserved. IASSC® is a registered Trade Mark of International
            Association for Six Sigma Certification. The Swirl logo™ is a Trade
            Mark of AXELOS Limited. Certified ScrumMaster® (CSM) is a registered
            Trade Mark of SCRUM ALLIANCE
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-10 bg-zinc-700">
        <h3 className="text-slate-200 text-xs opacity-65">
          &copy; 2024-25 All rights Reserved to Smartranx.pvt Ltd
        </h3>
      </div>
    </div>
  );
};

export default Footer;
