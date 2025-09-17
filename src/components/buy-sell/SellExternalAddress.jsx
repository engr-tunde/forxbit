import { useBuySellContext } from "../../context/buySellContext";

const SellExternalAddress = () => {
  const { setbank_name, setaccount_name, setaccount_number, errors } =
    useBuySellContext();
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="">
        <input
          type="text"
          onChange={(e) => setbank_name(e.target.value)}
          placeholder="Enter bank name"
          className="w-full py-5 h-[50px] px-3 border-[1px] border-titusLightBorder bg-transparent rounded-md"
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
          className="w-full py-5 h-[50px] px-3 border-[1px] border-titusLightBorder bg-transparent rounded-md"
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
          className="w-full py-5 h-[50px] px-3 border-[1px] border-titusLightBorder bg-transparent rounded-md"
        />
        {errors?.account_number ? (
          <div className="error">{errors.account_number}</div>
        ) : null}
      </div>
    </div>
  );
};

export default SellExternalAddress;
