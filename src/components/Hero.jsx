import React from "react";

// imports
import heroImage from "../assets/heroProductImage.png";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] top-[90px]">
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-[var(--primary-blue)] px-4 text-center">
        <h1>Stupidly Simple </h1>
        <h1 className="py-2">
          <span className="text-[var(--primary-blue)]">Accounting</span>{" "}
          Software
        </h1>
        <div className="my-4">
          <img
            src={heroImage}
            alt="Onesheet Product"
            width={500}
            height={500}
          />
        </div>
        <p className="text-xl py-[3rem] max-w-[55rem]">
          Onesheet is an intuitive online accounting software that provides
          users with an easy way to track financial information, manage
          expenses, and generate detailed reports with just a few clicks.
        </p>
        <div className="py-4">
          {/* <button className="m-2">Start free trial</button> */}
          {/* <button className="m-2">Learn More</button> */}
        </div>
        <div className="d-flex w-full h-full">
          <div className="justify-center items-center text-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
