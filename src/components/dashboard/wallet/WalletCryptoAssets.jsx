import { useEffect, useState } from "react";
import {
  FaFilter,
  FaMinus,
  FaPlus,
  FaSort,
  FaTimesCircle,
} from "react-icons/fa";

import TableSearch from "../../globals/TableSearch";
import Table from "../../globals/Table";
import {
  addTokenToWallet,
  fetchUserTokenBalances,
  fetchUserTokenNetworks,
  fetchUserUnaddedWalletTokens,
  removeTokenFromWallet,
} from "../../../api";
import Loader from "../../globals/Loader";
import ErrorWidget from "../../globals/ErrorWidget";
import useFetchCrypComp from "../../../api/useFetchCrypComp";
import {
  errorNotification,
  formatter,
  successNotification,
} from "../../../utils/helpers";
import { changeNowFetcher, useFetchChangeNow } from "../../../api/changeNow";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    header: "Coin",
    accessor: "coin",
  },
  {
    header: "Amount",
    accessor: "amount",
    // className: "table-cell",
  },
  {
    header: "Coin Price / Cost Price",
    accessor: "price",
    className: "hidden md:table-cell",
  },
  {
    header: "Change",
    accessor: "change",
    className: "table-cell",
  },
];

const WalletCryptoAssets = ({ settings, hideAssets }) => {
  const [clickedItem, setClickedItem] = useState("");
  const [assetsData, setAssetsData] = useState();
  const [searchBy, setSearchBy] = useState("");
  const [showAddAsset, setShowAddAsset] = useState(false);
  // const [token_price_value, settoken_price_value] = useState();
  // const [token_bal_value, settoken_bal_value] = useState();

  const { tokenBalances, tokenBalancesLoading, tokenBalancesError, mutate } =
    fetchUserTokenBalances();
  const { networks } = fetchUserTokenNetworks();
  const { unadded_tokens } = fetchUserUnaddedWalletTokens();
  const history = useNavigate();
  const handleLink = (item) => {
    history(`/dashboard/single-asset`, {
      state: {
        suppliedAsset: item,
      },
    });
  };

  const renderRow = (item, i) => {
    const { data: token_price } = useFetchCrypComp(
      `price?fsym=${item?.ticker}&tsyms=${settings?.currency?.ticker}`
    );

    // let token_price_value;
    // let token_bal_value;
    // if (settings) {
    //   let toCurrency;
    //   toCurrency = settings?.currency?.ticker;
    //   const runFuncti = async () => {
    //     let toAmountRes = await changeNowFetcher(
    //       `v2/markets/estimate?fromCurrency=${item?.ticker}&toCurrency=${toCurrency}&fromAmount=1&toAmount=&type=direct`
    //     );
    //     if (toAmountRes) {
    //       console.log(`${item?.ticker} toAmountRes`, toAmountRes);
    //       if (!toAmountRes?.error) {
    //         let t_p_v;
    //         t_p_v = toAmountRes?.toAmount;
    //         let t_b_v = t_p_v && Number(item.balance * t_p_v)?.toFixed(2);
    //         token_price_value = t_p_v;
    //         token_bal_value = t_b_v;
    //       }
    //     }
    //   };
    //   runFuncti();
    // }

    let token_price_value = token_price?.toAmount;
    let token_bal_value =
      token_price_value && Number(item.balance * token_price_value)?.toFixed(2);

    // console.log("token_price_value", token_price_value);
    // console.log("token_bal_value", token_bal_value);
    return (
      <tr
        key={i}
        onClick={() => handleLink(item)}
        className={
          clickedItem === item.ticker
            ? "bg-titusGreenDeep cursor-pointer w-full relative"
            : "hover:bg-black cursor-pointer w-full"
        }
      >
        <td className="flex items-center gap-4 px-0 md:px-2 py-4">
          <div className="relative">
            <img
              alt=""
              src={item.logoURI}
              width={20}
              height={20}
              className="md:hidden xl:block w-8 h-8 rounded-full object-cover"
            />
            {item.network && (
              <img
                alt=""
                src={
                  networks?.data.filter((net) => net.name == item.network)[0]
                    ?.logoURI
                }
                width={20}
                height={20}
                className="absolute bottom-0 -right-1 w-[14px] h-[14px] rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold text-white text-[12px] md:text-sm">
              {item.ticker}
            </h3>
            <div className="text-[11px] md:text-sm ">{item.name}</div>
          </div>
        </td>

        <td className="table-cell ">
          <div className="text-white text-[12px] md:text-sm">
            {hideAssets ? "*****" : item.balance.toFixed(3)}
          </div>
          <div className="text-[12px] md:text-sm">
            {settings?.currency?.symbol}
            {hideAssets
              ? "*****"
              : token_price_value
              ? formatter(token_bal_value).substring(1)
              : null}
          </div>
        </td>

        <td className="hidden md:table-cell">
          <div className="flex flex-col">
            <div className="text-white">
              {settings?.currency?.symbol}{" "}
              {formatter(token_price_value).substring(1)}
            </div>
            <div className="text-sm">{item.price}</div>
          </div>
        </td>

        <td
          className={
            item.change > 0
              ? "text-green-500 table-cell text-sm"
              : "text-red-500 table-cell text-sm"
          }
        >
          {item.change > 0 ? "+" : ""}
          {item.change}%
        </td>
      </tr>
    );
  };

  useEffect(() => {
    if (tokenBalances) {
      let data = tokenBalances?.data;
      setAssetsData(data);
    }
  }, [tokenBalances]);

  useEffect(() => {
    if (tokenBalances) {
      let newData = tokenBalances?.data;
      let filteredData = newData?.filter(
        (item) =>
          item.name.toLowerCase().includes(searchBy.toLowerCase()) ||
          item.ticker.toLowerCase().includes(searchBy.toLowerCase())
      );
      setAssetsData(filteredData);
      console.log("searchBy", searchBy);
    }
  }, [searchBy, tokenBalances]);
  const openAsset = (ticker) => {
    // `/dashboard/token/${item.ticker}`
  };

  const handleAddAsset = async (id) => {
    try {
      const response = await addTokenToWallet(id);
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        mutate();
        setShowAddAsset(false);
        window.location.reload();
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  const handleRemoveAsset = async (id) => {
    try {
      const response = await removeTokenFromWallet(id);
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        mutate();
        setShowAddAsset(false);
        window.location.reload();
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <>
      <div className="w-full rounded-xl p-5 flex flex-col gap-7 overflow-y-scroll relative bg-titusDashCardDarkBG">
        <div className="flex flex-col gap-5 md:flex-row items-center justify-between text-white">
          <div className="w-full flex justify-between md:justify-start items-end gap-6">
            <div className="text-[16px] md:text-[18px] font-semibold">
              Crypto Assets
            </div>
            <div
              onClick={() => setShowAddAsset(true)}
              className="font-semibold w-max flex items-center gap-1 text-titusYellow hover:opacity-50 ease-in duration-200 cursor-pointer text-sm"
            >
              <span>Add Token</span> <FaPlus />
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-4 self-end">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-codeGeekLilac">
                <FaFilter alt="" width={14} height={14} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-codeGeekLilac">
                <FaSort alt="" width={14} height={14} />
              </button>
            </div>
            <TableSearch setSearchBy={setSearchBy} />
          </div>
        </div>
        <div className="flex flex-col gap-3 max-h-[400px] md:max-h-[500px] overflow-y-scroll">
          {assetsData ? (
            <Table columns={columns} renderRow={renderRow} data={assetsData} />
          ) : null}
          {tokenBalancesLoading ? <Loader size={30} /> : null}
          {tokenBalancesError ? (
            <ErrorWidget error={tokenBalancesError} color="white" />
          ) : null}
        </div>
      </div>
      <div
        className={
          showAddAsset
            ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50"
            : "hidden"
        }
        style={{
          backdropFilter: showAddAsset ? "blur(5px)" : "",
        }}
      >
        <div
          className="w-[85%] mx-auto md:w-[500px] h-max bg-titusDashCardDarkBG p-5 md:p-7"
          // style={{ boxShadow: "2px 2px 3px #00dbc2 " }}
        >
          <div className="flex justify-between items-center mb-5">
            <div className="text-white font-medium">
              Add Asset To Your Wallet
            </div>
            <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
              <FaTimesCircle
                onClick={() => setShowAddAsset(false)}
                className="text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 max-h-[43vh] md:max-h-[50vh] overflow-y-scroll">
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium">Available Tokens To Add</div>
              <div className="max-h-[50vh] overflow-y-scroll">
                {unadded_tokens &&
                  unadded_tokens?.data?.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between pe-3"
                    >
                      <div className="flex items-center gap-4 px-0 py-3">
                        <div className="relative">
                          <img
                            alt=""
                            src={item.logoURI}
                            width={20}
                            height={20}
                            className="md:hidden xl:block w-8 h-8 rounded-full object-cover"
                          />
                          {item.network && (
                            <img
                              alt=""
                              src={
                                networks?.data.filter(
                                  (net) => net.name == item.network
                                )[0]?.logoURI
                              }
                              width={20}
                              height={20}
                              className="absolute bottom-0 -right-1 w-[14px] h-[14px] rounded-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-white text-[12px] md:text-sm">
                            {item.ticker}
                          </h3>
                          <div className="text-[11px] md:text-sm ">
                            {item.name}
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => handleAddAsset(item?._id)}
                        className="font-semibold w-max flex items-center gap-1 text-titusGreenFaded hover:opacity-50 ease-in duration-200 cursor-pointer text-xs"
                      >
                        <span>Add</span> <FaPlus />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium">Already Added Tokens</div>
              <div className="">
                {tokenBalances &&
                  tokenBalances?.data?.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between pe-3"
                    >
                      <div className="flex items-center gap-4 px-0 py-3">
                        <div className="relative">
                          <img
                            alt=""
                            src={item.logoURI}
                            width={20}
                            height={20}
                            className="md:hidden xl:block w-8 h-8 rounded-full object-cover"
                          />
                          {item.network && (
                            <img
                              alt=""
                              src={
                                networks?.data.filter(
                                  (net) => net.name == item.network
                                )[0]?.logoURI
                              }
                              width={20}
                              height={20}
                              className="absolute bottom-0 -right-1 w-[14px] h-[14px] rounded-full object-cover"
                            />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-semibold text-white text-[12px] md:text-sm">
                            {item.ticker}
                          </h3>
                          <div className="text-[11px] md:text-sm ">
                            {item.name}
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => handleRemoveAsset(item?._id)}
                        className="font-semibold w-max flex items-center gap-1 text-titusGreenFaded hover:opacity-50 ease-in duration-200 cursor-pointer text-xs"
                      >
                        <span>Remove</span> <FaMinus />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletCryptoAssets;
