import React from "react";
import { useBuySellContext } from "../../context/buySellContext";

const SellExternalAddress = () => {
  const { setbank_name, setaccount_name, setaccount_number, errors } =
    useBuySellContext();
  return (
    <div className="flex flex-col gap-5 mt-3">
      <div className="">
        <input
          type="text"
          onChange={(e) => setbank_name(e.target.value)}
          placeholder="Enter bank name"
          className="w-full p-2 border-[1px] border-titusLightBorder bg-titusDarkBG rounded-md"
        />
        {errors?.bank_name ? (
          <div className="error">{errors.bank_name}</div>
        ) : null}
      </div>

      <div className="">
        <input
          type="text"
          onChange={(e) => setaccount_name(e.target.value)}
          placeholder="Enter account name"
          className="w-full p-2 border-[1px] border-titusLightBorder bg-titusDarkBG rounded-md"
        />
        {errors?.account_name ? (
          <div className="error">{errors.account_name}</div>
        ) : null}
      </div>

      <div className="">
        <input
          type="text"
          onChange={(e) => setaccount_number(e.target.value)}
          placeholder="Enter account number"
          className="w-full p-2 border-[1px] border-titusLightBorder bg-titusDarkBG rounded-md"
        />
        {errors?.account_number ? (
          <div className="error">{errors.account_number}</div>
        ) : null}
      </div>
    </div>
  );
};

export default SellExternalAddress;
