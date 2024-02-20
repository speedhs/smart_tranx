import { CalendarCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface scheduleformProps {
  title: string;
  duration: string;
}

const SheduleForm: React.FC<scheduleformProps> = ({ title, duration }) => {
  return (
    <div className="w-auto h-auto rounded px-4 py-2  justify-center   border-2 border-orange-500 max-w-[400px] bg-orange-50 flex flex-col min-w-72 p-7">
      <div className="w-full h-auto flex items-center justify-center">
        <Image
          src="/coursespage.png"
          alt="schedule logo"
          width={300}
          height={400}
        />
      </div>
      <div className="">
      <h1 className="mt-5 font-bold text-lg">{title}</h1>
      <div className=" flex flex-row items-center justify-start mt-5">
        <CalendarCheck />
        <div className="flex flex-col ml-2">
          <span className="font-semibold">Duration</span>
          <p>{duration}</p>
        </div>
      </div>

      </div>
      <div className="w-full p-3 flex items-center justify-center  bg-sky-500 min-h-9 h-auto mt-4 rounded-md shadow-sm">
        <span className="text-xl text-white font-semibold py-2 ">
          Schedule
        </span>
      </div>
    </div>
  );
};

export default SheduleForm;
