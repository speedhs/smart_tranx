const Image = dynamic(() => import("next/image"), { ssr: false });

import dynamic from "next/dynamic";
import React from "react";

const Homepage = () => {
  const companies = [
    {
      name: "aws",
      url: "/aws.png",
    },
    {
      name: "facebook",
      url: "/facebook.png",
    },
    {
      name: "ibm",
      url: "/ibm.png",
    },
    {
      name: "pur",
      url: "/pur.png",
    },
    {
      name: "wharton",
      url: "/wharton.png",
    },
  ];
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="w-full h-[30rem]"></div>
      <div className="flex flex-col items-center justify-center w-full bg-orange-200 h-[7rem] ">
        <h1 className="font-medium text-white underline underline-offset-2 ">
          Our proud partners
        </h1>
        <div className="flex items-center justify-center flex-row gap-x-5">
          {companies.map((item) => (
            <Image
              key={item.name}
              src={item.url}
              alt={item.name}
              width={66}
              height={46}
              className=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
