import React from "react";
import { Soap2, Soap3, Soap4 } from "../images/index";

export const BrandMessage = () => {
  return (
    <div className="max-w-[1200px] h-[430px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Lorem, ipsum dolor.</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          asperiores vitae deserunt sequi a laboriosam.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src={Soap2} alt="/" />
        <img
          className="row-span-2 object-cover w-full h-full"
          src={Soap3}
          alt="/"
        />
        <img className="object-cover w-full h-full" src={Soap4} alt="/" />
      </div>
    </div>
  );
};
