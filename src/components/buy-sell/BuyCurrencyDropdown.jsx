import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useOutsideClick } from "../../utils/helpers";
import { useBuySellContext } from "../../context/buySellContext";

const BuyCurrencyDropdown = ({ array }) => {
  const [showAsset, setshowAsset] = useState(false);
  const [newArr, setnewArr] = useState(array);
  const [search, setsearch] = useState();
  const { currency, setcurrency, setfiat_amount } = useBuySellContext();
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

  const handleChange = (val) => {
    setfiat_amount(val);
  };

  return (
    <>
      <div className="w-full relative border-[1px] border-titusLightBorder rounded-lg p-4">
        <div className="flex flex-row justify-between items-center">
          <div className="w-max flex flex-col gap-0">
            <div className="text-sm md:text-md text-[#ffffff7e] w-max">
              {currency ? `Currency Selected` : `Select Currency`}
            </div>
            <div
              className="w-max flex items-center justify-between rounded-lg h-full py-1 cursor-pointer text-white text-sm"
              onClick={() => {
                setshowAsset(!showAsset);
              }}
            >
              {currency ? `${currency?.ticker}` : "Select Currency"}
            </div>
          </div>
          <div
            className={`flex items-center gap-2 lg:gap-1 ${
              currency ? "w-60%" : "w-full"
            }`}
          >
            {currency && (
              <input
                type="number"
                onChange={(e) => handleChange(e.target.value)}
                placeholder="0"
                className="w-full px-0 bg-transparent input-no-border placeholder:text-[22px] placeholder:text-[#ffffff7e] font-semibold text-[22px] text-end"
              />
            )}
            <div
              className={`cursor-pointer ${
                currency ? "w-max" : "w-full flex justify-end "
              }`}
              onClick={() => {
                setshowAsset(!showAsset);
              }}
            >
              <FaChevronDown className="text-white text-[18px]" />
            </div>
          </div>
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

          {newArr?.map((item, i) => {
            let it = item?.ticker;

            return (
              <div
                className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                key={i}
                onClick={() => {
                  setcurrency(item);
                  setsearch();
                  setshowAsset(false);
                }}
              >
                <div
                  className={
                    currency?.ticker === it
                      ? "text-titusGreen text-sm font-semibold"
                      : "text-white text-sm font-light"
                  }
                >
                  {item?.ticker}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BuyCurrencyDropdown;
