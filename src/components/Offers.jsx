import React, { useState } from "react";

export const Offers = () => {
  const offerlist = [
    { title: "lorem1", description: "word1" },
    { title: "lorem2", description: "word2" },
    { title: "lorem3", description: "word3" },
  ];

  const [isShown, setIsShown] = useState(false);

  const handleMouseEnter = (index) => {
    setIsShown(index);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div>
      <h1 className="flex justify-center align-middle text-bold text-2xl pt-6 text-gray-700 ">
        Experience the difference of soap made with passion
      </h1>
      <div className="max-w-[900px] m-auto px-4 py-12 flex flex-wrap justify-between">
        {offerlist.map((offerlist, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <p
              className={`offer${index + 1} text-lg font-bold text-gray-700 ${
                isShown === index ? "hovered" : ""
              }`}
            >
              {offerlist.title}
            </p>
            {isShown === index && (
              <p className="description text-gray-500">
                {offerlist.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
