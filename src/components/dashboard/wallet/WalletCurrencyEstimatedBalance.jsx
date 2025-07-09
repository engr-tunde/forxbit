import { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaEye } from "react-icons/fa";
import { userBalances } from "../../../utils/data";
import { Link, useNavigate } from "react-router-dom";
import { fetchUserCurrencyBalances } from "../../../api";
import { formatter } from "../../../utils/helpers";

const WalletCurrencyEstimatedBalance = ({
  handleToggleHideAsset,
  hideAssets,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState(userBalances[0]);
  const [showCurrencyList, setShowCurrencyList] = useState(false);

  const { currencyBalances } = fetchUserCurrencyBalances();

  useEffect(() => {
    if (currencyBalances) {
      setSelectedCurrency(currencyBalances?.data?.[0]);
    }
  }, [currencyBalances]);

  const handleSetCurrency = (item) => {
    setSelectedCurrency(item);
    setShowCurrencyList(false);
  };

  const history = useNavigate();

  const handleLink = (link) => {
    history(`${link}`, {
      state: { suppliedAsset: selectedCurrency?.ticker },
    });
  };

  return (
    <div className="w-full h-full rounded-xl p-5 md:p-8 bg-titusDashCardDarkBG flex flex-col gap-8 ">
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-start md:items-end">
        <div className="w-full flex flex-row md:flex-col gap-3 justify-between">
          <div className="flex items-center gap-2 font-semibold text-white">
            <span className="text-[16px] md:text-[18px]">Currency Assets</span>
            <FaEye onClick={handleToggleHideAsset} className="cursor-pointer" />
          </div>
          {currencyBalances && (
            <div className="flex items-end gap-2 text-white">
              <span className=" font-semibold text-[28px]">
                {selectedCurrency?.symbol}
                {hideAssets
                  ? "*****"
                  : formatter(selectedCurrency?.balance).substring(1)}
              </span>
              <div className="relative">
                <div
                  onClick={() => {
                    setShowCurrencyList(!showCurrencyList);
                  }}
                  className="flex text-sm gap-1 items-center cursor-pointer"
                >
                  <span className="">{selectedCurrency.ticker}</span>
                  <FaArrowAltCircleDown />
                </div>
                <div
                  onMouseLeave={() => setShowCurrencyList(!showCurrencyList)}
                  className={
                    showCurrencyList
                      ? "bg-titusDarkGrey text-sm py-4 flex flex-col absolute -left-0 bottom-6 rounded-lg z-[2000] text-white w-[200px] shadow-md shadow-black h-[300px] overflow-y-scroll"
                      : "hidden"
                  }
                  style={{
                    backdropFilter: showCurrencyList ? "blur(5px)" : "",
                  }}
                >
                  {currencyBalances &&
                    currencyBalances?.data?.map((item, i) => (
                      <div
                        key={i}
                        className="text-white hover:text-black hover:bg-titusYellow pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex items-center gap-4"
                        onClick={() => handleSetCurrency(item)}
                      >
                        <img
                          alt=""
                          src={item.icon}
                          width={20}
                          height={20}
                          className="w-5 h-5 rounded-full object-cover"
                        />
                        <span>{`${item.ticker}`}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-max flex justify-between md:justify-normal md:gap-10">
          <div
            onClick={() => handleLink("/dashboard/deposit-fiat")}
            className="text-sm bg-titusChatBg py-2 md:py-1 w-[32%] md:w-40 flex gap-1 md:gap-2 items-center justify-center h-max rounded-md text-white hover:opacity-80 cursor-pointer"
          >
            <img
              src="/assets/images/icons/deposit.svg"
              alt=""
              className="w-6 md:w-10"
            />
            <span>Deposit</span>
          </div>
          <div
            onClick={() => handleLink("/dashboard/withdraw-fiat")}
            className="text-sm bg-titusChatBg py-2 md:py-1 w-[32%] md:w-40 flex gap-1 md:gap-2 items-center justify-center h-max rounded-md text-white hover:opacity-80 cursor-pointer"
          >
            <img
              src="/assets/images/icons/deposit.svg"
              alt=""
              className="w-6 md:w-10"
            />
            <span>Withdraw</span>
          </div>
          <div
            onClick={() => handleLink("/dashboard/transfer-fiat")}
            className="text-sm bg-titusChatBg py-2 md:py-1 w-[32%] md:w-40 flex gap-1 md:gap-2 items-center justify-center h-max rounded-md text-white hover:opacity-80 cursor-pointer"
          >
            <img
              src="/assets/images/icons/deposit.svg"
              alt=""
              className="w-6 md:w-10"
            />
            <span>Transfer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCurrencyEstimatedBalance;
