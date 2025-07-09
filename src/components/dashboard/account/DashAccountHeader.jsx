import React from "react";
import { Link, useLocation } from "react-router-dom";
import { relatedLinks } from "../../../data/menuData";

const DashAccountHeader = () => {
  let location = useLocation();
  const pathname = location.pathname;
  return (
    <div className="flex items-center flex-wrap gap-y-3 gap-x-5 md:gap-x-10 px-5 md:px-10 pt-5 md:pt-10 pb-2">
      {relatedLinks.map((item, i) => (
        <Link
          to={item.url}
          className={
            item.url === pathname
              ? "text-white font-semibold border-b-[2px] border-titusYellow rounded-md pb-1 hover:text-white ease-in duration-200 text-[14px] md:text-[15px]"
              : "font-medium pb-1 hover:text-white ease-in duration-200 text-[14px] md:text-[15px]"
          }
          key={i}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default DashAccountHeader;
