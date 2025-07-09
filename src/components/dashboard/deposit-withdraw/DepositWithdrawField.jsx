import DepositWithdrawDropdownMini from "./DepositWithdrawDropdownMini";

const DepositWithdrawField = ({
  data,
  setdata,
  array,
  amount,
  setamount,
  disabled = false,
  errors,
  type,
  assetType,
}) => {
  const handleChange = (val) => {
    if (type == "withdraw" || type == "transfer") {
      if (!val) {
        delete errors["amount"];
      } else if (val == 0) {
        errors.amount = "You cannot withdraw 0. Go higher or fund wallet!";
      } else if (val > data?.balance) {
        errors.amount = "Insufficient balance. Go lower!";
      } else {
        // errors.amount = null;
        delete errors["amount"];
      }
    }

    setamount(val);
  };

  return (
    <div className="w-full flex items-center justify-between relative border-[1px] border-titusLightBorder rounded-xl bg-titusDarkBG">
      <div className="w-[36%] md:w-[26%] flex items-center justify-between px-1 h-full cursor-pointer">
        <DepositWithdrawDropdownMini
          data={data}
          setdata={setdata}
          array={array}
          type={assetType}
        />
      </div>

      <div className="w-[1px] h-[53px] bg-titusLightBorder"></div>

      <div className="w-[61%] md:w-[72%] flex flex-col">
        <input
          disabled={disabled}
          type="number"
          value={amount}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter amount"
          className="w-full px-0 py-2 border-[1px] bg-transparent input-no-border placeholder:text-[15px] placeholder:font-semibold text-[15px]"
        />
      </div>
    </div>
  );
};

export default DepositWithdrawField;
