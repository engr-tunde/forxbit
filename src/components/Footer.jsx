import React, { useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { successNotification } from "../utils/helpers";

const Footer = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="w-full z-30 px-2 md:px-0 bg-titusDarkBG text-[#fff] py-10 md:py-16 border-t-[1px] border-t-[#ffffff1f]">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-16 px-6 md:px-0 border-b-[1px] border-b-[#ffffff1f] pb-10">
        <div className="w-full col-span-1 text-[10px] md:text-[11px] flex flex-col justify-center items-center">
          <Link to="/">
            <img
              src="/assets/images/logo-green.png"
              alt=""
              className="w-[90px] mb-5"
            />
          </Link>
          {/* © 2024 {import.meta.env.VITE_APP_NAME}. All rights reserved */}
          <span className="font-semibold text-[14px]">
            Be part of our community
          </span>
          <div className="flex items-center justify-center gap-5 my-4 w-full sm:w-[80%] text-titusGreen">
            <Link
              to="https://x.com/"
              className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaTelegram />
            </Link>
            <Link
              to="https://x.com/"
              className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://x.com/"
              className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaDiscord />
            </Link>
            <Link
              to="https://instagram.com/"
              className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://facebook.com/"
              className="rounded-full shadow-md shadow-titusGreenFaded p-3 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-y-10 text-[#ffffff9a]">
          <div className="col-span-1 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-[18px] lg:text-xl text-[#eee]">
              Company
            </p>
            <Link to="/about">About</Link>
            <Link to="/about#team">Meet The Team</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/#features">Features</Link>
            <Link to="/#how-it-works">How it Works</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="col-span-1 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-[18px] lg:text-xl text-[#eee]">
              Products
            </p>
            <Link to="/swap">Swap</Link>
            <Link to="/buy-sell">Buy & Sell</Link>
            <Link to="/m2m">P2P</Link>
            <div
              className="cursor-pointer"
              onClick={() => {
                successNotification("Apps are coming soon!");
              }}
            >
              Mobile Apps
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                successNotification("Our Native Token is coming soon!");
              }}
            >
              {import.meta.env.VITE_APP_NAME} Token
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-[18px] lg:text-xl text-[#eee]">
              Explore
            </p>
            <Link to="/industry-updates">Industry Updates</Link>
            <Link to="">FAQs</Link>
            <Link to="/product-updates">Product Updates</Link>
            <Link to="">Whitepaper</Link>
          </div>
          <div className="col-span-1 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-[18px] lg:text-xl text-[#eee]">
              Legal
            </p>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms & Conditions</Link>
            <Link to="">AML Policy</Link>
          </div>
        </div>
      </div>
      <div className="text-sm text-center mt-8 text-[#ffffff87]">
        © 2025 {import.meta.env.VITE_APP_NAME}. All rights reserved
      </div>
    </div>
  );
};

export default Footer;
