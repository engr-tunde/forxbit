import { useEffect, useState } from "react";
import { useM2MContext } from "../../../../context/m2mContext";
import { toDecimal } from "../../../../utils/helpers";

const CTF2_OrderLimits = () => {
  const {
    m2mCurrency,
    m2mAsset,
    m2masset_price,
    min_limit,
    setmin_limit,
    max_limit,
    setmax_limit,
    fiat_amount,
  } = useM2MContext();

  const [min_limErr, setmin_limErr] = useState();
  const [max_limErr, setmax_limErr] = useState();

  const [min_limitInAsset, setmin_limitInAsset] = useState(
    min_limit / m2masset_price
  );
  const [max_limitInAsset, setmax_limitInAsset] = useState(
    max_limit / m2masset_price
  );

  const handleMinAmount = (val) => {
    let value = Number(val);
    let mx_lim = max_limit && Number(max_limit);
    console.log("value", value);
    console.log("mx_lim", mx_lim);
    if (!value || value == 0) {
      setmin_limErr(`Minimum limit cannot be empty`);
      setmin_limit(val);
    } else if (mx_lim && value >= mx_lim) {
      setmin_limErr(
        "Minimum limit cannot be more than or equal to Maximum limit!"
      );
      setmin_limit(val);
    } else if (fiat_amount && value >= fiat_amount) {
      setmin_limErr("Minimum limit must be lower!");
      setmin_limit(val);
    } else {
      setmin_limErr();
      setmin_limit(val);
    }
  };

  const handleMaxAmount = (val) => {
    // setmax_limit(val);
    let value = Number(val);
    let mn_lim = min_limit && Number(min_limit);
    console.log("value", value);
    console.log("mn_lim", mn_lim);
    if (!value || value == 0) {
      setmax_limErr(`Maximum limit cannot be empty`);
      setmax_limit(val);
    } else if (mn_lim && value <= mn_lim) {
      setmax_limErr(
        "Maximum limit cannot be less than or equal to Minimum limit!"
      );
      setmax_limit(val);
    } else if (fiat_amount && value > fiat_amount) {
      setmax_limErr("Already more than expected value!");
      setmax_limit(val);
    } else {
      setmax_limErr();
      setmax_limit(val);
    }
  };

  useEffect(() => {
    if (min_limit && Number(min_limit) > 0) {
      let min = Number(min_limit / m2masset_price);
      setmin_limitInAsset(min);
      if (max_limit && Number(min_limit) >= Number(max_limit)) {
        setmin_limErr(
          "Minimum limit cannot be more than or equal to Maximum limit!"
        );
      } else if (fiat_amount && Number(min_limit) >= fiat_amount) {
        setmin_limErr("Minimum limit must be lower!");
      } else {
        setmin_limErr();
      }
    }
  }, [min_limit, fiat_amount, max_limit]);

  useEffect(() => {
    if (max_limit && Number(max_limit) > 0) {
      let max = Number(max_limit / m2masset_price);
      setmax_limitInAsset(max);

      if (min_limit && Number(max_limit) <= Number(min_limit)) {
        setmax_limErr(
          "Maximum limit cannot be less than or equal to Minimum limit!"
        );
      } else if (fiat_amount && Number(max_limit) > fiat_amount) {
        setmax_limErr("Already more than expected value!");
      } else {
        setmax_limErr();
      }
    }
  }, [max_limit, fiat_amount, min_limit]);

  return (
    <>
      <div className="w-[43%] flex flex-col gap-1">
        <div className="w-full flex items-center justify-between border-[1px] border-titusLightBorder rounded-lg md:py-1 px-2 md:px-3">
          <input
            type="number"
            className="border-0 bg-transparent text-white font-medium text-[16px] input-no-border w-[85%]"
            value={min_limit}
            onChange={(e) => handleMinAmount(e.target.value)}
          />
          <div className="text-sm">{m2mCurrency.ticker}</div>
        </div>
        <div className="text-[12px] font-medium">
          ≈ {min_limitInAsset && toDecimal(min_limitInAsset, 6)}{" "}
          {m2mAsset.ticker}
        </div>
        {min_limErr ? <div className="error text-xs">{min_limErr}</div> : null}
      </div>
      <div className="pt-4 text-white">~</div>
      <div className="w-[43%] flex flex-col gap-1">
        <div className="w-full flex items-center justify-between border-[1px] border-titusLightBorder rounded-lg md:py-1 px-2 md:px-3">
          <input
            type="number"
            className="border-0 bg-transparent text-white font-medium text-[16px] input-no-border w-[85%]"
            value={max_limit}
            onChange={(e) => handleMaxAmount(e.target.value)}
          />
          <div className="text-sm">{m2mCurrency.ticker}</div>
        </div>
        <div className="text-[12px] font-medium">
          ≈ {max_limitInAsset && toDecimal(max_limitInAsset, 8)}{" "}
          {m2mAsset.ticker}
        </div>
        {max_limErr ? <div className="error text-xs">{max_limErr}</div> : null}
      </div>
    </>
  );
};

export default CTF2_OrderLimits;
