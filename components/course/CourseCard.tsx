import React from "react";
import StarRating from "./Rating";

export interface CourseCardProps {
  title: string;
  description: string;
  instructor?: string;
  rating: string;
  category?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  instructor,
  description,
  rating,
  category,
}) => {
  return (
    <div className="h-[310px] w-[600px] flex flex-col justify-between border shadow-lg rounded-xl">
      <div className="ml-[20px] mt-4 flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="font-medium text-2xl">{title}</h1>
          <h3 className="font-medium text-lg opacity-75 mt-3 max-w-72">{description}</h3>
        </div>
        <h1 className="font-normal mr-5 mt-4 flex flex-row items-center gap-2">Rating:- <StarRating rating={rating} /></h1>
      </div>
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-sm ml-4 ">
          
        </h1>
        <div className=" w-48 h-8 relative flex items-center justify-center">
          <span className="text-white font-normal absolute ">{category}</span>
          <div
            className=" -ml-40 -mt-1 h-0 w-0 border-t-[20px] border-l-[40px] border-b-[18px] 
border-solid border-t-transparent border-b-transparent border-l-[#fff] absolute"
          ></div>
          <div className=" w-48 h-6  bg-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
