import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { exploreMenu } from "../utils/data";
import {
  FaBook,
  FaNewspaper,
  FaProductHunt,
  FaQuestionCircle,
} from "react-icons/fa";

const BlogHeader = ({ title }) => {
  let location = useLocation();
  const pathname = location.pathname;
  const link = {
    active:
      "hover:text-titusGreenFaded duration-300 ease-in text-titusGreen flex items-center gap-[6px] font-bold lg:font-normal text-[14px] md:text-[13px]",
    inactive:
      "hover:text-titusGreenFaded duration-300 ease-in text-white flex items-center gap-[6px] font-normal",
  };
  console.log({ pathname });
  return (
    <>
      <div className="fixed w-full shadow-lg z-[10] pt-[11vh] md:pt-[11vh] pb-[10px] px-5 md:px-10 bg-titusDarkBG text-white border-b-titusGreenDeep border-b-[1px]">
        <div className="container flex justify-between items-center">
          <div className="font-semibold text-[0px] lg:text-lg">{title}</div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 lg:gap-10 text-[12px] md:text-[13px] items-center text-white max-w-max">
            {exploreMenu.map((item, i) => {
              console.log({ to: item.url });
              return (
                <Link
                  to={item.url}
                  key={i}
                  className={
                    pathname === item.url ? link.active : link.inactive
                  }
                >
                  {item.title === "Industry Updates" ? (
                    <FaNewspaper className="text-[16px]" />
                  ) : item.title === "Product Updates" ? (
                    <FaProductHunt className="text-[16px]" />
                  ) : item.title === "FAQs" ? (
                    <FaQuestionCircle className="text-[16px]" />
                  ) : (
                    <FaBook className="text-[16px]" />
                  )}
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
