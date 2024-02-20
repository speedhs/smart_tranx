"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./adds.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const add = [
  {
    Image: "/addpage.jpg",
    url: "",
  },
  {
    Image: "/addpage.jpg",
    url: "",
  },
  {
    Image: "/addpage.jpg",
    url: "",
  },
];


interface  AddProps {
  title?:string,
  url?:string
}
const Adds:React.FC<AddProps> = ({
  title,
  url
}) => {
  return (
    <div className="p-10 ">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination,Autoplay]}
        autoplay={{
            delay:2000,
            disableOnInteraction:false
        }}
        className="mySwiper"
      >
        {add.map((item) => (
          <div className="">
            <SwiperSlide className="">
              <Link href={item.url}>
                <Image src={url ? url : item.Image} alt="add" width={360} height={100} className="shadow-lg rounded-lg"/>
              </Link>
            </SwiperSlide>
          </div>
        ))} 
      </Swiper>
    </div>
  );
};

export default Adds;
