import React, { useRef, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useOutsideClick } from "../../../utils/helpers";

const NetworkDropdown = ({ data, setdata, array, firstItem }) => {
  const [showAsset, setshowAsset] = useState(false);
  // const ref = useRef();
  // useOutsideClick(ref.current, () => setshowAsset(false));
  return (
    <>
      <div
        className="flex items-center justify-between border-titusLightBorder border-[1px] hover:border-titusGreenFaded rounded-lg px-3 h-full py-[10px] gap-4 cursor-pointer"
        onMouseEnter={() => {
          setshowAsset(true);
        }}
        onClick={() => {
          setshowAsset(!showAsset);
        }}
      >
        <div className="text-white text-[12px]">
          {data.length ? data : firstItem}
        </div>
        <FaArrowCircleDown className="" />
      </div>
      <div
        className={
          showAsset
            ? "w-full absolute z-[1000] px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-12 rounded-lg bg-titusDarkGrey max-h-[300px] overflow-y-scroll"
            : "hidden"
        }
        onMouseLeave={() => setshowAsset(false)}
      >
        <div
          className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
          onClick={() => {
            setdata("");
            setshowAsset(false);
          }}
        >
          <div
            className={
              !Object.keys(data).length
                ? "text-white text-sm font-medium"
                : "text-white text-sm font-light"
            }
          >
            {firstItem}
          </div>
        </div>
        {array &&
          array.map((item, i) => {
            let it = item.ticker;

            return (
              <div
                className="flex ic justify-between hover:bg-titusDashCardDarkItemBG p-2 cursor-pointer"
                key={i}
                onClick={() => {
                  setdata(item?.network);
                  setshowAsset(false);
                }}
              >
                <div className="flex flex-col gap-1">
                  <div className="text-white text-sm">{item.ticker}</div>
                  <div className="text-[12px]">{item.name}</div>
                </div>

                <div className="flex flex-col gap-1">
                  {/* <div className="text-[12px]">
                    Arrival time ≈ {item.arrival_time}
                  </div> */}
                  <div className="text-[12px]">Fee ${item.network_fee}</div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NetworkDropdown;
