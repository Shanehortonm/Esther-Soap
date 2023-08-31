import React from "react";
import { FooterForm } from "./FooterForm";

export const Footer = () => {
  return (
    <div className="w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <h6>Products</h6>
          <ul>
            <li>Men's Scents</li>
            <li>Women's Scents</li>
            <li>Unisex Scents</li>
          </ul>
        </div>
        <div>
          <h6>Our Mission</h6>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
        <div>
          <h6>Contact Us</h6>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h6>Legal</h6>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <p>Subscribe to our newsletter</p>
          The Lastest Deals, Scents and announcement's sent to your inbox
          weekly.
        </div>
        <div>{FooterForm}</div>
      </div>
    </div>
  );
};
