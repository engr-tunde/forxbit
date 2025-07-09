import React, { useEffect, useRef, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useOutsideClick } from "../../../utils/helpers";

const CurrencyAssetDropdownMini = ({
  data,
  setdata,
  array,
  title,
  firstItem = null,
  type,
}) => {
  const [showAsset, setshowAsset] = useState(false);
  const [newArr, setnewArr] = useState(array);
  const [search, setsearch] = useState();
  // const ref = useRef();
  // useOutsideClick(ref.current, () => setshowAsset(false));

  useEffect(() => {
    // code
    if (search && search.length) {
      let arr = array?.filter(
        (it) =>
          it.ticker?.toLowerCase().includes(search?.toLowerCase()) ||
          it.name?.toLowerCase().includes(search?.toLowerCase())
      );
      setnewArr(arr);
    } else {
      setnewArr(array);
    }
  }, [search, array]);

  return (
    <>
      <div
        className="w-full flex items-center justify-between rounded-lg px-2 h-full py-[10px] cursor-pointer"
        // onMouseEnter={() => {
        //   setshowAsset(true);
        // }}
        onClick={() => {
          setshowAsset(!showAsset);
        }}
      >
        {/* <img
          src={Object.keys(data).length && data?.networks[0]?.logo_url}
          alt={import.meta.env.VITE_APP_NAME}
          className="w-5"
        /> */}
        <div className="text-white text-sm">
          {data ? `${data?.name} (${data?.ticker})` : title}
        </div>
        <FaArrowCircleDown className="" />
      </div>
      <div
        className={
          showAsset
            ? "w-full absolute z-[1500] px-2 pt-0 pb-10 border-titusLightBorder flex flex-col gap-1 left-0 top-12 rounded-lg bg-titusDarkGrey max-h-[350px] overflow-y-scroll"
            : "hidden"
        }
        onMouseLeave={() => setshowAsset(false)}
      >
        <div className="sticky w-full top-0 left-0 bg-titusDarkGrey px-2 py-2">
          <input
            value={search}
            type="text"
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search"
            className="w-full py-0 rounded-lg bg-transparent border-[1px] border-titusLightBorder"
          />
        </div>

        {firstItem && (
          <div
            className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer "
            onClick={() => {
              setdata("");
              setshowAsset(false);
            }}
          >
            <div
              className={
                !data
                  ? "text-white text-sm font-medium"
                  : "text-white text-sm font-light"
              }
            >
              {firstItem}
            </div>
          </div>
        )}
        {newArr?.map((item, i) => {
          let it = item?.ticker;

          return (
            <div
              className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
              key={i}
              onClick={() => {
                setdata(item);
                setshowAsset(false);
              }}
            >
              {/* <img
                src={item && item?.networks[0]?.logo_url}
                alt={import.meta.env.VITE_APP_NAME}
                className="w-5"
              /> */}
              <div
                className={
                  data?.ticker === it
                    ? "text-white text-sm font-medium"
                    : "text-white text-sm font-light"
                }
              >
                {item?.name}
              </div>
              <div className="text-sm font-light">{item?.ticker}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CurrencyAssetDropdownMini;
