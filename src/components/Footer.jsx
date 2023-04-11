import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] bg-black mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00d8ff]">DS.</h1>
        <p className="py-4">
          Thank you for visiting our DeFi finance landing page. With our
          cutting-edge technology, we are committed to helping you monitor your
          data analytics to maximize revenue on BTB, BTC, and SASS platforms.
          Let's grow together!.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare
            size={30}
            className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          />
          <FaInstagram
            size={30}
            className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          />
          <FaTwitterSquare
            size={30}
            className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          />
          <FaGithubSquare
            size={30}
            className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          />
          <FaDribbbleSquare
            size={30}
            className="hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Analytics
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Marketing
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Commerce
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Pricing
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Documentation
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              Guides
            </li>
            <li className="py-2 text-sm hover:text-[#00d8ff] hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-105">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
