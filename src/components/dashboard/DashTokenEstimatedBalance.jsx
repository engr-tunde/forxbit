import { useEffect, useState } from "react";
import { FaArrowAltCircleDown, FaEye } from "react-icons/fa";
import { userBalances } from "../../utils/data";
import { Link, useNavigate } from "react-router-dom";
import {
  fetchUserCurrencyBalances,
  fetchUserTokenBalances,
  fetchUserTokenNetworks,
  fetchWalletTokens,
} from "../../api";
import useFetchCrypComp from "../../api/useFetchCrypComp";
import { formatter } from "../../utils/helpers";

const DashTokenEstimatedBalance = ({
  handleToggleHideAsset,
  hideAssets,
  settings,
}) => {
  const [selectedToken, setSelectedToken] = useState(userBalances[0]);
  const [showTokenList, setShowTokenList] = useState(false);
  const [cryptoCalculated, setcryptoCalculated] = useState(false);
  const [fiatCalculated, setfiatCalculated] = useState(false);
  const [cryptoValue, setcryptoValue] = useState(0);
  const [fiatValue, setfiatValue] = useState(0);
  const [walletValue, setwalletValue] = useState(0);
  const { tokenBalances } = fetchUserTokenBalances();
  const { wallet_tokens } = fetchWalletTokens();
  const { currencyBalances } = fetchUserCurrencyBalances();
  const { networks } = fetchUserTokenNetworks();
  const { data: token_price_1 } = useFetchCrypComp(
    `price?fsym=${selectedToken?.ticker}&tsyms=${settings?.data?.currency?.ticker}`
  );
  let token_price_value = token_price_1 && Object.values(token_price_1)[0];
  // let token_bal_value =
  //   token_price_value &&
  //   Number(selectedToken.balance * token_price_value).toFixed(2);

  useEffect(() => {
    if (wallet_tokens) {
      setSelectedToken(wallet_tokens?.data?.[0]);
    }
  }, [wallet_tokens]);

  const handleSetToken = (item) => {
    setSelectedToken(item);
    setShowTokenList(false);
    setcryptoCalculated(false);
  };

  useEffect(() => {
    let tokenVal = 0;
    let token_price = 0;
    let token_bal_val = 0;
    if (tokenBalances) {
      async function getBals() {
        let arrData = tokenBalances?.data;
        for (let ele in arrData) {
          try {
            const res = await fetch(
              `${import.meta.env.VITE_TOKEN_INFO}/price?fsym=${
                arrData[ele]?.ticker
              }&tsyms=${selectedToken?.ticker}&api_key=${
                import.meta.env.VITE_CRYP_COMP_IPA_YEK
              }`
            );
            const response = await res.json();
            token_price = Object.values(response)[0];
            token_bal_val = Number(arrData[ele].balance * token_price);
            tokenVal = tokenVal + token_bal_val;
            if (ele == Number(arrData.length) - 1) {
              try {
                const res2 = await fetch(
                  `${import.meta.env.VITE_TOKEN_INFO}/price?fsym=${
                    selectedToken?.ticker
                  }&tsyms=${settings?.data?.currency?.ticker}`
                );
                let response2 = await res2.json();
                let token_price_value = Object.values(response2)[0];
                let walVal = Number(tokenVal * token_price_value);
                setwalletValue(walVal);
                setcryptoValue(tokenVal);
                setcryptoCalculated(true);
              } catch (error) {
                console.log("error", error);
                throw Error(error);
              }
            }
          } catch (error) {
            console.log("error", error);
            throw Error(error);
          }
        }
      }
      getBals();
    }
  }, [tokenBalances, selectedToken]);

  // useEffect(() => {
  //   let tokenVal = 0;
  //   let token_price = 0;
  //   let token_bal_val = 0;
  //   if (currencyBalances) {
  //     async function getBals() {
  //       let arrData = currencyBalances?.data;
  //       for (let ele in arrData) {
  //         try {
  //           const res = await fetch(
  //             `${import.meta.env.VITE_TOKEN_INFO}/price?fsym=${
  //               arrData[ele]?.ticker
  //             }&tsyms=${"USD"}&api_key=${
  //               import.meta.env.VITE_CRYP_COMP_IPA_YEK
  //             }`
  //           );
  //           const response = await res.json();
  //           token_price = Object.values(response)[0];
  //           token_bal_val = Number(arrData[ele].balance * token_price);
  //           tokenVal = tokenVal + token_bal_val;
  //           if (ele == Number(arrData.length) - 1) {
  //             setfiatValue(tokenVal);
  //             setfiatCalculated(true);
  //           }
  //         } catch (error) {
  //           console.log("error", error);
  //           throw Error(error);
  //         }
  //       }
  //     }
  //     getBals();
  //   }
  // }, [currencyBalances, selectedToken]);

  console.log("cryptoValue", cryptoValue);
  console.log("fiatValue", fiatValue);
  console.log("wallet_tokens", wallet_tokens);

  const history = useNavigate();
  const handleLink = (link) => {
    history(`${link}`, {
      state: { suppliedAsset: selectedToken?.ticker },
    });
  };

  return (
    <div className="w-full h-full rounded-xl p-5 md:p-5 bg-titusDashCardDarkBG flex flex-col gap-8">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-3 justify-between items-start md:items-end">
        <div className="flex flex-col gap-5 md:gap-3 justify-between">
          <div className="flex items-center gap-2 font-medium md:font-semibold text-white">
            <span className="text-lg">Total Crypto Assets</span>
            <FaEye onClick={handleToggleHideAsset} className="cursor-pointer" />
          </div>
          {wallet_tokens && (
            <div className="flex items-end gap-2 text-white">
              <div className="flex leading-3 gap-1 font-semibold text-[28px] p-0 m-0">
                {/* {selectedToken.balance?.toFixed(3)} */}
                <span>
                  {hideAssets ? (
                    "*****"
                  ) : cryptoCalculated && cryptoValue > 0 ? (
                    cryptoValue?.toFixed(2)
                  ) : (
                    <span className="text-sm">Calculating...</span>
                  )}
                </span>
                {!hideAssets && cryptoCalculated && (
                  <span className="text-sm">In {selectedToken.ticker}</span>
                )}
              </div>
              <span className=""></span>
              <div className="relative">
                <div
                  onMouseEnter={() => {
                    setShowTokenList(true);
                  }}
                  className="flex text-sm gap-1 items-center cursor-pointer"
                >
                  <FaArrowAltCircleDown />
                </div>
                <div
                  onMouseLeave={() => setShowTokenList(false)}
                  className={
                    showTokenList
                      ? "bg-titusDarkGrey text-sm py-4 flex flex-col absolute -left-0 top-6 rounded-lg z-[2000] text-white w-[200px] shadow-md shadow-black h-[300px] overflow-y-scroll"
                      : "hidden"
                  }
                  style={{
                    backdropFilter: showTokenList ? "blur(5px)" : "",
                  }}
                >
                  {wallet_tokens &&
                    wallet_tokens?.data?.map((item, i) => (
                      <div
                        key={i}
                        className="text-white hover:text-black hover:bg-titusYellow pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex items-center gap-4"
                        onClick={() => handleSetToken(item)}
                      >
                        <div className="relative">
                          <img
                            alt=""
                            src={item.logoURI}
                            width={20}
                            height={20}
                            className="w-5 h-5 rounded-full object-cover"
                          />
                          {item?.network && (
                            <img
                              alt=""
                              src={
                                networks?.data?.filter(
                                  (net) => net.name == item.network
                                )[0]?.logoURI
                              }
                              width={20}
                              height={20}
                              className="absolute bottom-0 -right-1 w-[10px] h-[10px] rounded-full object-cover"
                            />
                          )}
                        </div>
                        <span>{`${item.ticker}`}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}
          {}
          <div className="text-sm font-semibold flex items-center gap-2">
            <div className="span">
              {/* ≈ {formatter(selectedToken.balance * 1500)} */}
              {settings?.data?.currency?.symbol}
              {hideAssets
                ? "*****"
                : cryptoCalculated
                ? // ? walletValue
                  formatter(walletValue).substring(1)
                : "..."}
              {/* {token_bal_value} */}
            </div>
            <span
              className={
                selectedToken.change > 0 ? "text-green-500" : "text-red-500"
              }
            >
              ({selectedToken.change > 0 ? "+" : ""}
              {selectedToken.change}%)
            </span>
            <div className=" md:hidden text-xs text-red-400">
              NB: Fiats not added
            </div>
          </div>
          <div className="hidden md:block text-xs text-red-400 -mt-3 md:mt-0">
            NB: Fiats not added
          </div>
        </div>
        {/* <div className="h-full flex flex-col gap-3 md:gap-0 justify-between"> */}
        <div className="w-full md:w-max flex justify-between md:justify-end gap-3">
          <Link
            to=""
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80"
          >
            Deposit
          </Link>
          <Link
            to=""
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80"
          >
            Withdraw
          </Link>
          <div
            onClick={() => handleLink("/dashboard/transfer-crypto")}
            to=""
            className="text-sm bg-titusChatBg py-2 w-24 h-max text-center rounded-md text-white hover:opacity-80 cursor-pointer"
          >
            Transfer
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default DashTokenEstimatedBalance;
