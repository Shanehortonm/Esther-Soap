import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Soap2, Soap3, Soap4, Soap5, Soap6 } from "../images/index";

export const ImageSlider = () => {
  const slides = [Soap2, Soap3, Soap4, Soap5, Soap6];

  return (
    <div className="max-w-[1200px] h-[480px] w-full m-auto py-16 px-4 ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[0]})` }}
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight />
      </div>
    </div>
  );
};
