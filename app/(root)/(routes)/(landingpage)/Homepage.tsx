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
      <div>
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Adjust the spacing between elements
          padding: '2rem',
          width:'100%',
          height:'100%' // Add some padding if needed
        }}>
          <div style={{
            backgroundColor: 'darkgreen',
            color: 'white',
            zIndex:2,
            height:'40%',
            padding: '2rem', // Add padding to the content area
            border: '8px solid orange', // Optional: if you want rounded corners
            flex: 1, // Take up the full space available
          }}>
            <h1>Best-in-Class Virtual Bootcamp</h1>
            <p>50,000+ careers advanced</p>
            <p>100+ live classes every month</p>
            <p>78% report career benefits including promotion or a new job</p>
            <button className="bg-sky-500" style={{
              color: 'white',
              padding: '10px 20px',
              cursor: 'pointer',
              marginTop: '1rem', // Add space above the button
            }}>
              Explore all Courses
            </button>
          </div>
          <img src='/home.PNG' style={{
            width: '50%', // Adjust the width as needed
            height: '60%', // Adjust the height as needed
            zIndex:1,
            position: 'relative', // Absolute position to overlap
            right: '1rem', // Adjust as needed for positioning
            bottom: '1rem', // Adjust as needed for positioning
          }} alt="Instructor" />
        </div>
    
        <div className="flex flex-col items-center justify-center w-full bg-orange-200 h-[7rem]">
          <h1 className="font-medium text-white underline underline-offset-2">
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
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Homepage;
