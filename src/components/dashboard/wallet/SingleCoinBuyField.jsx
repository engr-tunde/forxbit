import DepositWithdrawDropdownMini from "../deposit-withdraw/DepositWithdrawDropdownMini";

const SingleCoinBuyField = ({
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
      } else if (val > data?.available_balance) {
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
        <div className="w-[30%]">
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
                    networks?.data.filter((net) => net.name == data.network)[0]
                      ?.logoURI
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
        </div>
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

export default SingleCoinBuyField;
