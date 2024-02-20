import React from "react";

interface Testimonialcardprops {
  name: string;
  designation: string;
  company: string;
  message: string;
}

const TestimonialCard: React.FC<Testimonialcardprops> = ({
  name,
  designation,
  company,
  message,
}) => {
  return (
    <div className="w-auto min-w-96 max-w-96 h-60 bg-white rounded-2xl shadow-2xl border-b-[15px] border-t border-t-slate-50 border-orange-500 overflow-hidden">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-row ">
          <div className="rounded-full w-16 h-16 bg-slate-400"></div>
          <div className="flex flex-col ml-6 justify-center">
            <h1>{name}</h1>
            <div className="flex flex-row space-x-2">
              <h1 className="font-medium text">{designation}</h1>
              <span>||</span>
              <h2>{company}</h2>
            </div>
          </div>
        </div>
        <div className="mt-7">{message}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
