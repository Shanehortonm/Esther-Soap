import React from "react";
import HeroLogo from "../images/soap1.jpg";

export const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-o left-0 w-full h-screen object-cover"
        src={HeroLogo}
        alt="bars of soap"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Nourish Your Skin Naturally</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Discover Esther's Handcrafted Soaps
          </h1>
          <p className="m-width[600px] drop-shadow-2xl py-2 text-xl">
            Elevating Your Skincare Routine with Nature's Goodness
          </p>
          <button className="bg-white text-black">Order Now</button>
        </div>
      </div>
    </div>
  );
};
