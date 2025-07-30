import { FaArrowCircleDown } from "react-icons/fa";
import { useM2MContext } from "../../../../context/m2mContext";

const CreateTradeSelectCurrency = ({
  currencies,
  showCurrencyList,
  setshowCurrencyList,
}) => {
  const { m2mCurrency, setm2mCurrency, m2mTradeType } = useM2MContext();

  const handleSelectCurrency = (item) => {
    setm2mCurrency(item);
    setshowCurrencyList(false);
  };

  return (
    <div className="relative w-full md:w-[45%]">
      <div className="flex flex-col gap-2">
        <div className="text-white text-sm md:text-md">
          {m2mTradeType === "Buy" ? "Buy in" : "Sell in"}
        </div>
        <div
          className="w-full flex items-center justify-between border-[1px] border-titusLightBorder hover:border-titusGreenFaded rounded-lg p-3"
          onMouseEnter={() => {
            setshowCurrencyList(true);
          }}
          onClick={() => {
            setshowCurrencyList(!showCurrencyList);
          }}
        >
          <div className="flex items-center gap-2">
            <img
              src={m2mCurrency?.icon}
              alt=""
              className="w-[15px] lg:w-[20px]"
            />
            <div className="text-white text-sm font-medium">
              {m2mCurrency?.ticker}
            </div>
          </div>
          <FaArrowCircleDown className="" />
        </div>
      </div>
      <div
        className={
          showCurrencyList
            ? "w-full absolute px-2 py-5 border-titusLightBorder max-h-[30vh] overflow-y-scroll flex flex-col gap-1 left-0 top-[90px] rounded-lg bg-titusDarkGrey"
            : "hidden"
        }
        onMouseLeave={() => setshowCurrencyList(false)}
      >
        {currencies?.map((item, i) => (
          <div
            className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
            key={i}
            onClick={() => handleSelectCurrency(item)}
          >
            <img src={item.icon} alt="" className="w-[20px]" />
            <div className="text-white text-sm font-medium">{item.ticker}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTradeSelectCurrency;
