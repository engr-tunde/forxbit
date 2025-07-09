import React, { useRef, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useOutsideClick } from "../../../utils/helpers";

const CurrencyAssetDropdown = ({
  data,
  setdata,
  array,
  title,
  firstItem,
  type,
}) => {
  const [showAsset, setshowAsset] = useState(false);
  const ref = useRef();
  useOutsideClick(ref.current, () => setshowAsset(false));
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
        <div className="text-white text-sm font-medium">{title}</div>
        <div className="flex items-center gap-3">
          <div className="text-white text-[12px]">
            {Object.keys(data).length ? data.ticker : firstItem}
          </div>
          <FaArrowCircleDown className="" />
        </div>
      </div>
      <div
        className={
          showAsset
            ? "w-full absolute z-[1000] px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-12 rounded-lg bg-titusDarkGrey"
            : "hidden"
        }
        onMouseLeave={() => setshowAsset(false)}
      >
        <div
          className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
          onClick={() => {
            setdata({});
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
        {array.map((item, i) => {
          let it = item.ticker;

          return (
            <div
              className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
              key={i}
              onClick={() => {
                setdata(item);
                setshowAsset(false);
              }}
            >
              <img
                src={type === "asset" ? item.logoURI : item.icon}
                alt={import.meta.env.VITE_APP_NAME}
                className="w-5"
              />
              {type == "asset" ? (
                <div
                  className={
                    data?.symbol === item.symbol
                      ? "text-white text-sm font-semibold"
                      : "text-white text-sm font-light"
                  }
                >
                  {item.symbol}
                </div>
              ) : (
                <div
                  className={
                    data?.ticker === item.ticker
                      ? "text-white text-sm font-semibold"
                      : "text-white text-sm font-light"
                  }
                >
                  {item.ticker}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrencyAssetDropdown;
