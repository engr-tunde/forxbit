import React, { useState } from "react";
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const FaqsWidget = ({ title, data, moreUrl = "" }) => {
  const [selectedFaq, setselectedFaq] = useState(0);
  const handleOpen = (i) => {
    if (selectedFaq === i) {
      setselectedFaq("");
    } else {
      setselectedFaq(i);
    }
  };
  return (
    <div className="flex flex-col gap-5 md:gap-7">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold">{title}</div>
        <Link
          to={moreUrl}
          className="text-white hover:text-titusGreen text-[12px] flex items-center gap-2 duration-200 ease-in"
        >
          <span>More</span>
          <FaArrowAltCircleRight />
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {data.map((item, i) => (
          <div
            className={
              selectedFaq === i
                ? "flex flex-col gap-3 py-2 px-3 rounded-md border-b-[1.5px] border-titusYellow"
                : "flex flex-col gap-3 py-2 px-3 rounded-md border-b-[1px] border-titusLightBorder"
            }
            key={i}
          >
            <div
              className=" cursor-pointer flex justify-between items-center"
              onClick={() => handleOpen(i)}
            >
              <div className="text-white font-medium text-[15px]">
                {item.question}
              </div>
              <div className="text-titusYellowFaded">
                {selectedFaq === i ? (
                  <FaArrowAltCircleDown className="text-titusYellow" />
                ) : (
                  <FaArrowAltCircleRight className="text-titusText" />
                )}
              </div>
            </div>
            <div
              className={
                selectedFaq === i
                  ? "block text-sm duration-200 ease-in"
                  : "hidden duration-200 ease-in"
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsWidget;
