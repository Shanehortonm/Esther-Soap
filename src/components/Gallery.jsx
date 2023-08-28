import React from "react";
import { Soap2, Soap3, Soap4, Soap5, Soap6 } from "../images/index";

export const Gallery = () => {
  return (
    <div className="max-w-[1200px] m-auto py-15 px-6 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 hover: transition ease-in-out delay-150 duration-500"
          src={Soap2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={Soap3}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={Soap4}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={Soap5}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={Soap6}
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Lorem ipsum dolor sit.
        </h3>
        <p className="text-2xl py-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          inventore!
        </p>
        <p className="pb-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          cupiditate ad a totam. Tempore, consectetur!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Lorem, ipsum.
          </button>
          <button className="bg-black text-white hover:shadow-xl">
            Lorem, ipsum.
          </button>
        </div>
      </div>
    </div>
  );
};
