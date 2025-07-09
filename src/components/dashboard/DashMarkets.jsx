import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { dashboardMarketChart } from "../../utils/data";
import { Link } from "react-router-dom";

const DashMarkets = () => {
  const [selectedFilter, setSellectedFilter] = useState("Holding");
  const filter = {
    active:
      "text-white font-medium cursor-pointer hover:text-titusText border-b-[2px] border-b-titusYellowFaded pb-1",
    inactive: "text-titusText font-medium cursor-pointer hover:text-white",
  };
  return (
    <div className="w-full rounded-xl bg-titusDashCardDarkBG p-5 flex flex-col gap-7">
      <div className="flex items-center justify-between text-white">
        <div className="text-[18px] md:text-xl font-semibold">Markets</div>
        <Link
          to=""
          className="flex items-center gap-2 cursor-pointer hover:text-titusGreen duration-300 ease-in"
        >
          <div className="text-sm md:text-md pb-[1px] border-b-[1px] border-b-titusYellowFaded hover:border-b-titusGreen">
            More...
          </div>
          {/* <FaArrowCircleRight className="text-[12px] text-titusYellowFaded" /> */}
        </Link>
      </div>
      <div className="flex items-center gap-5 md:gap-7">
        {dashboardMarketChart.map((item, i) => (
          <div
            className={
              item.title == selectedFilter ? filter.active : filter.inactive
            }
            key={i}
            onClick={() => setSellectedFilter(item.title)}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashMarkets;
