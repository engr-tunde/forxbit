import { Link, useLocation } from "react-router-dom";
import M2MHeaderMenu from "./M2MHeaderMenu";
import { m2mTradeHeaderAssets } from "../../data/generalData";

const M2MHeader = ({ setToken, token, type, setType }) => {
  let location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full mt-[0px] pt-20 lg:pt-20">
      <M2MHeaderMenu />
      <div className="container py-2 flex flex-row lg:flex-row items-center gap-5 text-sm font-medium">
        <div className="flex gap-3 border-[1px] border-[#ffffff1f] p-2 rounded-md w-max h-max">
          <div
            onClick={() => setType("Buy")}
            className={
              type === "Buy"
                ? "bg-titusGreen text-black py-1 px-5 rounded-md cursor-pointer"
                : "text-titusLightText py-1 px-5 rounded-md hover:bg-titusGreen hover:text-black duration-300 ease-in cursor-pointer"
            }
          >
            Buy
          </div>
          <div
            onClick={() => setType("Sell")}
            className={
              type === "Sell"
                ? "bg-titusGreen text-black py-1 px-5 rounded-md cursor-pointer"
                : "text-titusLightText py-1 px-5 rounded-md hover:bg-titusGreen hover:text-black duration-300 ease-in cursor-pointer"
            }
          >
            Sell
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center text-[13px] lg:text-sm">
          {m2mTradeHeaderAssets.map((item, i) => (
            <div
              className={
                token?.symbol === item
                  ? "text-titusGreen ease-in duration-300 cursor-pointer"
                  : "hover:text-titusGreen ease-in duration-300 cursor-pointer"
              }
              key={i}
              onClick={() => setToken(item)}
            >
              {item}
            </div>
          ))}
          <div
            className={
              !token
                ? "text-titusGreen ease-in duration-300 cursor-pointer"
                : "hover:text-titusGreen ease-in duration-300 cursor-pointer"
            }
            onClick={() => setToken()}
          >
            All
          </div>
        </div>
      </div>
    </div>
  );
};

export default M2MHeader;
