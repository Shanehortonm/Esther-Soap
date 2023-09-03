import React, { useEffect, useState } from "react";
import { Soap2, Soap3, Soap4, Soap5, Soap6 } from "../images/index";

export const ImageSlider = () => {
  const slides = [Soap2, Soap3, Soap4, Soap5, Soap6];
  const [currentSlide, setCurrentSlide] = useState(0);

  const updateSlide = () => {
    setCurrentSlide((prevslide) => (prevslide + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(updateSlide, 7000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="max-w-[1200px] h-[480px] w-full m-auto py-16 px-4 ">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currentSlide]})` }}
      ></div>
    </div>
  );
};
