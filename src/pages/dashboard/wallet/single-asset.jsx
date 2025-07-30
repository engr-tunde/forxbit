import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import SingleAssetHeader from "../../../components/dashboard/wallet/SingleAssetHeader";
import Loader from "../../../components/globals/Loader";
import { useFetchCG } from "../../../api/coinGecko";
import { dateFormatter, formatter } from "../../../utils/helpers";
import { userSettings } from "../../../api";

const SingleAssetPage = () => {
  const [hideAssets, sethideAssets] = useState(false);
  const { settings, mutate } = userSettings();
  useEffect(() => {
    if (settings) {
      if (settings?.data?.hide_assets) {
        sethideAssets(true);
      } else {
        sethideAssets(false);
      }
    }
  }, [settings]);
  const location = useLocation();
  const history = useNavigate();
  const suppliedAsset = location.state?.suppliedAsset;

  const { data, loading } = useFetchCG(`/coins/${suppliedAsset?.id}`);
  const [token_bal_value, settoken_bal_value] = useState();
  const [currencyTicker, setcurrencyTicker] = useState();
  const [currencySymbol, setcurrencySymbol] = useState();
  const [market_cap, setmarket_cap] = useState(0);
  const [total_supply, settotal_supply] = useState(0);
  const [circulating_supply, setcirculating_supply] = useState(0);
  const [fully_diluted_valuation, setfully_diluted_valuation] = useState(0);
  const [token_price, settoken_price] = useState(0);
  const [price_change_24h, setprice_change_24h] = useState(0);
  const [two_4_hr_low, settwo_4_hr_low] = useState(0);
  const [two_4_hr_high, settwo_4_hr_high] = useState(0);
  const [all_time_low, setall_time_low] = useState(0);
  const [all_time_high, setall_time_high] = useState(0);
  const [all_time_low_change, setall_time_low_change] = useState(0);
  const [all_time_high_change, setall_time_high_change] = useState(0);
  const [all_time_low_date, setall_time_low_date] = useState();
  const [all_time_high_date, setall_time_high_date] = useState();

  useEffect(() => {
    if (settings) {
      let ct = settings?.data?.currency?.ticker?.toLowerCase();
      let cs = settings?.data?.currency?.symbol;
      setcurrencyTicker(ct);
      setcurrencySymbol(cs);
    }
  }, [settings]);

  useEffect(() => {
    if (data) {
      let tpv = data?.market_data?.current_price;
      let ggg = tpv && Object.entries(tpv);
      let newVal = ggg?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      let token_price_val = newVal && newVal[0];
      token_price_val = token_price_val && token_price_val[1];
      settoken_price(token_price_val);
      let token_bal_val =
        token_price_val &&
        Number(suppliedAsset.available_balance * token_price_val)?.toFixed(2);
      settoken_bal_value(token_bal_val);

      let mk = data?.market_data?.market_cap;
      mk = mk && Object.entries(mk);
      let newMKVal = mk?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newMKVal = newMKVal && newMKVal[0];
      let market_c = newMKVal && newMKVal[1];
      setmarket_cap(market_c);

      let fde = data?.market_data?.fully_diluted_valuation;
      fde = fde && Object.entries(fde);
      let newfdeVal = fde?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newfdeVal = newfdeVal && newfdeVal[0];
      newfdeVal = newfdeVal && newfdeVal[1];
      setfully_diluted_valuation(newfdeVal);

      //   24hr low
      let low_24_hr = data?.market_data?.low_24h;
      low_24_hr = low_24_hr && Object.entries(low_24_hr);
      let newlow_24_hrVal = low_24_hr?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newlow_24_hrVal = newlow_24_hrVal && newlow_24_hrVal[0];
      newlow_24_hrVal = newlow_24_hrVal && newlow_24_hrVal[1];
      settwo_4_hr_low(newlow_24_hrVal);

      //   24hr high
      let high_24_hr = data?.market_data?.high_24h;
      high_24_hr = high_24_hr && Object.entries(high_24_hr);
      let newhigh_24_hrVal = high_24_hr?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newhigh_24_hrVal = newhigh_24_hrVal && newhigh_24_hrVal[0];
      newhigh_24_hrVal = newhigh_24_hrVal && newhigh_24_hrVal[1];
      settwo_4_hr_high(newhigh_24_hrVal);

      //   All-time low
      let low_all_time = data?.market_data?.atl;
      low_all_time = low_all_time && Object.entries(low_all_time);
      let newlow_all_timeVal = low_all_time?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newlow_all_timeVal = newlow_all_timeVal && newlow_all_timeVal[0];
      newlow_all_timeVal = newlow_all_timeVal && newlow_all_timeVal[1];
      setall_time_low(newlow_all_timeVal);

      //   All-time high
      let high_all_time = data?.market_data?.ath;
      high_all_time = high_all_time && Object.entries(high_all_time);
      let newhigh_all_timeVal = high_all_time?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newhigh_all_timeVal = newhigh_all_timeVal && newhigh_all_timeVal[0];
      newhigh_all_timeVal = newhigh_all_timeVal && newhigh_all_timeVal[1];
      setall_time_high(newhigh_24_hrVal);

      //   All-time low change
      let atl_change = data?.market_data?.atl_change_percentage;
      atl_change = atl_change && Object.entries(atl_change);
      let newatl_changeVal = atl_change?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newatl_changeVal = newatl_changeVal && newatl_changeVal[0];
      newatl_changeVal = newatl_changeVal && newatl_changeVal[1];
      setall_time_low_change(newatl_changeVal);

      //   All-time high change
      let ath_change = data?.market_data?.ath_change_percentage;
      ath_change = ath_change && Object.entries(ath_change);
      let newath_changeVal = ath_change?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newath_changeVal = newath_changeVal && newath_changeVal[0];
      newath_changeVal = newath_changeVal && newath_changeVal[1];
      setall_time_high_change(newath_changeVal);

      //   All-time low date
      let atl_date = data?.market_data?.atl_date;
      atl_date = atl_date && Object.entries(atl_date);
      let newatl_dateVal = atl_date?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newatl_dateVal = newatl_dateVal && newatl_dateVal[0];
      newatl_dateVal = newatl_dateVal && newatl_dateVal[1];
      setall_time_low_date(newatl_dateVal);

      //   All-time high date
      let ath_date = data?.market_data?.ath_date;
      ath_date = ath_date && Object.entries(ath_date);
      let newath_dateVal = ath_date?.filter((obj) => {
        return obj[0] == currencyTicker;
      });
      newath_dateVal = newath_dateVal && newath_dateVal[0];
      newath_dateVal = newath_dateVal && newath_dateVal[1];
      setall_time_high_date(newath_dateVal);

      let t_s = data?.market_data?.total_supply;
      settotal_supply(t_s);

      let c_s = data?.market_data?.circulating_supply;
      setcirculating_supply(c_s);

      let p_c_24 = data?.market_data?.price_change_percentage_24h;
      setprice_change_24h(p_c_24);

      mutate();
    }
  }, [data]);

  console.log("token_bal_value", token_bal_value);
  console.log("data", data);

  const handleCryptoDepoLink = () => {
    history(`/dashboard/deposit-crypto`, {
      state: {
        suppliedToken: {
          network: suppliedAsset?.network,
          ticker: suppliedAsset?.ticker,
          name: suppliedAsset?.name,
          logoURI: suppliedAsset?.logoURI,
        },
      },
    });
  };
  const handleCryptoWithdrLink = () => {
    history(`/dashboard/withdraw-crypto`, {
      state: { suppliedAsset: suppliedAsset?.ticker },
    });
  };

  //   useEffect(() => {
  //     if (!suppliedAsset) {
  //       history(-1);
  //     }
  //   }, [suppliedAsset]);

  return (
    <div className="md:px-10 py-0 md:py-5">
      <div className="flex flex-col gap-10">
        <div className="">
          <div className="hidden md:block">
            <SingleAssetHeader suppliedAsset={suppliedAsset} />
          </div>
          <div className="md:hidden">
            <SingleAssetHeader suppliedAsset={suppliedAsset} />
            {/* <div className="mt-2">
              {suppliedAsset?.available_balance?.toFixed(3)} ~{currencySymbol}
              {formatter(token_bal_value).substring(1)}
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
          <div className="col-span-1 md:col-span-4">
            {data ? (
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-0 md:gap-5 gap-y-3 flex-wrap">
                  <div className="rounded-md flex items-end gap-3">
                    Bal: {suppliedAsset?.available_balance?.toFixed(3)} ~
                    {currencySymbol}
                    {formatter(token_bal_value).substring(1)}
                  </div>

                  <div className="flex gap-1 md:gap-2 items-center">
                    <div className="text-white text-xl font-semibold">
                      {currencySymbol}
                      {formatter(token_price).substring(1)}
                    </div>
                    <div
                      className={
                        price_change_24h < 0
                          ? "text-red-600 bg-titusDashCardDarkBG px-3 py-1 rounded-md text-sm"
                          : price_change_24h > 0
                          ? "text-green-600 bg-titusDashCardDarkBG px-3 py-1 rounded-md text-sm"
                          : "text-white bg-titusDashCardDarkBG px-3 py-1 rounded-md text-sm"
                      }
                    >
                      {price_change_24h > 0 ? "+" : ""}
                      {price_change_24h?.toFixed(2)}% (24hr)
                    </div>
                  </div>
                </div>

                <div className="w-full bg-titusDashCardDarkBG p-20 rounded-lg border-[1px] border-[#ffffff1a] text-center">
                  Live chart here
                </div>
                <div className="hidden md:block w-full bg-titusDashCardDarkBG p-3 rounded-lg">
                  <div className="flex flex-col gap-5">
                    <div className="uppercase text-white">About Coin</div>
                    <div className="text-sm whitespace-pre-line">
                      {data?.description?.en}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {loading ? <Loader /> : null}
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between md:justify-end md:gap-7">
                <div
                  onClick={handleCryptoDepoLink}
                  className="py-2 px-4 flex items-center gap-2 bg-titusYellow hover:bg-titusYellowFaded ease-in duration-200 cursor-pointer text-black rounded-md"
                >
                  <img
                    src="/assets/images/wallet/Deposit-01.svg"
                    alt=""
                    className="w-4"
                  />
                  <span className="text-sm font-semibold">Deposit Coin</span>
                </div>
                <div
                  onClick={handleCryptoWithdrLink}
                  className="py-2 px-4 flex items-center gap-2 bg-titusYellow hover:bg-titusYellowFaded ease-in duration-200 cursor-pointer text-black rounded-md"
                >
                  <img
                    src="/assets/images/wallet/Withdraw-01.svg"
                    alt=""
                    className="w-4"
                  />
                  <span className="text-sm font-semibold">Withdraw Coin</span>
                </div>
              </div>

              <div className="w-full bg-titusDashCardDarkBG p-7 flex flex-col gap-5">
                <div className="text-white font-medium">Info</div>
                <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
                  <div className="">Market Cap</div>
                  <div className="text-white font-medium">
                    {currencySymbol}
                    {formatter(market_cap).substring(1)}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
                  <div className="">Fully Diluted Valuation</div>
                  <div className="text-white font-medium">
                    {currencySymbol}
                    {formatter(fully_diluted_valuation).substring(1)}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
                  <div className="">Total Supply</div>
                  <div className="text-white font-medium">
                    {currencySymbol}
                    {formatter(total_supply).substring(1)}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
                  <div className="">Circulating Supply</div>
                  <div className="text-white font-medium">
                    {currencySymbol}
                    {formatter(circulating_supply).substring(1)}
                  </div>
                </div>
              </div>

              <div className="w-full bg-titusDashCardDarkBG p-7 flex flex-col gap-5">
                <div className="text-white font-medium">Historical Data</div>
                <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
                  <div className="">24h Change</div>
                  <div className="text-white font-medium">
                    {currencySymbol}
                    {formatter(two_4_hr_low).substring(1)} - {currencySymbol}
                    {formatter(two_4_hr_high).substring(1)}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
                  <div className="">All Time Low</div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium">
                        {currencySymbol}
                        {formatter(all_time_low).substring(1)}
                      </div>
                      <div
                        className={
                          all_time_low_change < 0
                            ? "text-red-600 bg-titusDashCardDarkBG rounded-md text-xs"
                            : all_time_low_change > 0
                            ? "text-green-600 bg-titusDashCardDarkBG rounded-md text-xs"
                            : "text-white bg-titusDashCardDarkBG rounded-md text-xs"
                        }
                      >
                        {all_time_low_change > 0 ? "+" : ""}
                        {all_time_low_change?.toFixed(2)}%
                      </div>
                    </div>
                    <div className="text-xs">
                      {dateFormatter(all_time_low_date)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm pb-1 border-b-[1px] border-b-titusLightBorder">
                  <div className="">All Time High</div>
                  <div className="flex flex-col gap-1 items-end">
                    <div className="flex items-center gap-1">
                      <div className="text-white font-medium">
                        {currencySymbol}
                        {formatter(all_time_high).substring(1)}
                      </div>
                      <div
                        className={
                          all_time_high_change < 0
                            ? "text-red-600 bg-titusDashCardDarkBG rounded-md text-xs"
                            : all_time_high_change > 0
                            ? "text-green-600 bg-titusDashCardDarkBG rounded-md text-xs"
                            : "text-white bg-titusDashCardDarkBG rounded-md text-xs"
                        }
                      >
                        {all_time_high_change > 0 ? "+" : ""}
                        {all_time_high_change?.toFixed(2)}%
                      </div>
                    </div>
                    <div className="text-xs">
                      {dateFormatter(all_time_high_date)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-titusDashCardDarkBG p-10"></div>

              <div className="md:hidden w-full bg-titusDashCardDarkBG p-3 rounded-lg">
                <div className="flex flex-col gap-5">
                  <div className="uppercase text-white">About Coin</div>
                  <div className="text-sm whitespace-pre-line">
                    {data?.description?.en}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssetPage;
