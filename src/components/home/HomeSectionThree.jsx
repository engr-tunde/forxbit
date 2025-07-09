import React from "react";
import { partnerLogos } from "../../utils/data";
import { AiFillNotification } from "react-icons/ai";
import { notificationsData } from "./../../utils/data";

const HomeSectionThree = () => {
  return (
    <div className="w-full bg-titusGreenDeep">
      <div className="container py-2 md:py-1 px-8 md:px-0 text-white flex gap-3 md:gap-10 items-center font-medium text-sm">
        <AiFillNotification className="" size={30} />
        <marquee behavior="" direction="alternate">
          <div className="flex gap-10">
            {notificationsData.map((item, i) => (
              <span className="" key={i}>
                {item}
              </span>
            ))}
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default HomeSectionThree;
