import React, { useState } from "react";

const Footer = () => {
  return (
    <footer className="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-5">
      <div className="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
        <div className="flex flex-wrap items-center justify-between md:flex-nowrap">
          <div className="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start"></div>
          <span className="block text-gray-300">
            Need help?{" "}
            <a href="#" className="font-semibold text-white">
              {" "}
              Contact Us
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
