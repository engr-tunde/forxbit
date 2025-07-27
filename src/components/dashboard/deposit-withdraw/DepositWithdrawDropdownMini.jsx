import { useEffect, useRef, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useOutsideClick } from "../../../utils/helpers";
import { fetchUserTokenNetworks } from "../../../api";

const DepositWithdrawDropdownMini = ({ data, setdata, array, type }) => {
  const [showAsset, setshowAsset] = useState(false);
  const ref = useRef();
  // useOutsideClick(ref.current, () => setshowAsset(false));
  const { networks } = fetchUserTokenNetworks();

  const [newArr, setnewArr] = useState(array);
  const [search, setsearch] = useState();

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
        className="w-full flex items-center justify-between rounded-lg px-0 md:px-2 h-full py-[10px] cursor-pointer"
        onMouseEnter={() => {
          setshowAsset(true);
          setsearch("");
        }}
        onClick={() => {
          setshowAsset(!showAsset);
          setsearch("");
        }}
      >
        {data ? (
          <>
            {type == "fiat" ? (
              <img
                src={data?.icon}
                alt={import.meta.env.VITE_APP_NAME}
                className="w-5 rounded-full"
              />
            ) : (
              <div className="relative">
                <img
                  alt=""
                  src={data.logoURI}
                  width={20}
                  height={20}
                  className="md:hidden xl:block w-6 h-6 rounded-full object-cover"
                />
                {data.network && (
                  <img
                    alt=""
                    src={
                      networks &&
                      networks?.data.filter(
                        (net) => net.name == data.network
                      )[0]?.logoURI
                    }
                    width={20}
                    height={20}
                    className="absolute bottom-0 -right-1 w-[14px] h-[14px] rounded-full object-cover"
                  />
                )}
              </div>
            )}
            <div className="text-white text-sm">
              {data?.ticker?.toUpperCase()}
            </div>
          </>
        ) : (
          <>
            <div className="text-white text-sm min-w-content">
              {type == "fiat" ? "Select currency" : "Select asset"}
            </div>
          </>
        )}
        <FaArrowCircleDown className="" />
      </div>
      <div
        className={
          showAsset
            ? "max-h-[400px] w-full md:w-[70%] overflow-y-scroll absolute z-[1500] border-titusLightBorder flex flex-col gap-1 left-0 top-12 md:top-14 rounded-lg bg-titusDarkGrey"
            : "hidden"
        }
        onMouseLeave={() => {
          setshowAsset(false);
          setsearch("");
        }}
      >
        <div className="w-full relative">
          <div className="sticky w-full top-0 left-0 bg-titusDarkGrey px-2 py-4">
            <input
              value={search}
              type="text"
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search"
              className="w-full py-3 rounded-lg bg-transparent border-[1px] border-titusLightBorder"
            />
          </div>

          <div className="px-2 pb-5">
            {newArr?.map((item, i) => {
              return (
                <div
                  className="md:px-3 border-b-[1px] border-b-titusLightBorder flex items-center gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                  key={i}
                  onClick={() => {
                    setdata(item);
                    setshowAsset(false);
                  }}
                >
                  {type == "fiat" ? (
                    <img
                      src={item?.icon}
                      alt={import.meta.env.VITE_APP_NAME}
                      className="w-5 rounded-full"
                    />
                  ) : (
                    <div className="relative">
                      <img
                        alt=""
                        src={item.logoURI}
                        width={20}
                        height={20}
                        className="md:hidden xl:block w-6 h-6 rounded-full object-cover"
                      />
                      {item?.network && (
                        <img
                          alt=""
                          src={
                            networks &&
                            networks?.data?.filter(
                              (net) => net.name == item.network
                            )[0]?.logoURI
                          }
                          width={20}
                          height={20}
                          className="absolute bottom-0 -right-1 w-[14px] h-[14px] rounded-full object-cover"
                        />
                      )}
                    </div>
                  )}
                  <div className="flex flex-col">
                    {/* <div className="flex gap-1 items-center">
                      <div
                        className={
                          data?.ticker.toUpperCase() === it
                            ? "text-white text-sm font-medium"
                            : "text-white text-sm font-light"
                        }
                      >
                        {item.ticker.toUpperCase()}
                      </div>
                      {item?.network != item?.ticker && (
                        <div className="text-xs py-[1px] px-1 bg-titusYellowFaded text-titusDarkBG rounded-sm">
                          {item.network.toUpperCase()}
                        </div>
                      )}
                    </div> */}
                    <div className="text-[12px] font-light">{item.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositWithdrawDropdownMini;
