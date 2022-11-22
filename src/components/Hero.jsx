import React from "react";

import heroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={heroVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center">
        <h1>Decentralized</h1>
        <h1 className="py-2">
          <span className="text-[var(--primary-blue)]">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4">
          Guaranteed liquidity trading for millions of users and top Ethereum
          applications
        </p>
        <div className="py-4">
          <button className="m-2">Use DeFi</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div className="">
        <p className="text-center text-white text-2xl">
          Total Volume Secured: $42,104,783,662,47
        </p>
      </div>
    </div>
  );
};

export default Hero;
