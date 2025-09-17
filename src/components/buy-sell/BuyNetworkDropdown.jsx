import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { formatter, useOutsideClick } from "../../utils/helpers";
import { useBuySellContext } from "../../context/buySellContext";

const BuyNetworkDropdown = () => {
  const { networks, recipientNetwork, setrecipientNetwork, errors } =
    useBuySellContext();
  const [showAsset, setshowAsset] = useState(false);
  // const ref = useRef();
  // useOutsideClick(ref.current, () => setshowAsset(false));

  return (
    <>
      {networks && (
        <div className="w-full relative border-[1px] border-titusLightBorder rounded-lg p-4">
          <div className="flex flex-col gap-1">
            <div
              className="flex flex-row justify-between items-center"
              onClick={() => {
                setshowAsset(!showAsset);
              }}
            >
              <div className="w-max flex flex-col gap-0">
                <div className="text-sm md:text-md text-[#ffffff7e] w-max">
                  {recipientNetwork ? `Network Selected` : `Select Network`}
                </div>
                <div className="w-max flex items-center justify-between rounded-lg h-full py-1 cursor-pointer text-white text-sm">
                  {recipientNetwork
                    ? `${recipientNetwork?.name}`
                    : "Select Network"}
                </div>
              </div>
              <div
                className={`flex items-center lg:gap-0 ${
                  recipientNetwork ? "w-60%" : "w-full"
                }`}
              >
                <div className="cursor-pointer w-full flex justify-end">
                  <FaChevronDown className="text-white text-[18px]" />
                </div>
              </div>
            </div>
            {errors?.network ? (
              <div className="error">{errors.network}</div>
            ) : null}
          </div>
          <div
            className={
              showAsset
                ? "w-full absolute z-[1500] px-2 pt-5 pb-10 border-titusLightBorder flex flex-col gap-2 left-0 top-20 rounded-lg bg-titusDarkGrey max-h-[350px] overflow-y-scroll"
                : "hidden"
            }
            onMouseLeave={() => setshowAsset(false)}
          >
            {networks?.map((item, i) => {
              return (
                <div
                  className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer items-center justify-between"
                  key={i}
                  onClick={() => {
                    setrecipientNetwork(item);
                    setshowAsset(false);
                  }}
                >
                  <div
                    className={
                      item?.name === recipientNetwork?.name &&
                      item?.network === recipientNetwork?.network
                        ? "text-titusGreen text-sm"
                        : "text-white text-sm"
                    }
                  >
                    {item?.name}
                  </div>
                  <div className="text-sm">
                    {/* {formatter(item?.network_fee)?.substring(2)} */}
                    {item?.network_fee}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default BuyNetworkDropdown;
