import React from "react";

export const FooterForm = () => {
  return (
    <div>
      <form className="flex flex-col">
        <input type="email" placeholder="Enter Email..." />
        <button className="p-2 mt-2 rounded-md ">Subscribe</button>
      </form>
    </div>
  );
};
