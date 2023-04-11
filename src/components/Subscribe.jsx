import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center">
      <h1>Join Our DeFi Community</h1>
      <div className="py-4">
        <input
          className="p-4 px-5 rounded-3xl mr-4 w-[300px]"
          type="email"
          placeholder="Enter your email"
        />
        <button className="hover:scale-105 duration-300 ease-in-out">
          Sign Up
        </button>
      </div>
      <div className="flex items-center justify-center py-2">
        <input className="mr-2" type="checkbox" />
        <p>Yes, I agree to receive email communications from DeFi</p>
      </div>
    </div>
  );
};

export default Subscribe;
