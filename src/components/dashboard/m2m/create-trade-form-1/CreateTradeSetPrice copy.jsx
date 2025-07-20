import { FaMinus, FaPlus } from "react-icons/fa";
import { useM2MContext } from "../../../../context/m2mContext";
import { toDecimal } from "../../../../utils/helpers";

const CreateTradeSetPrice = () => {
  const {
    m2mCurrency,
    m2mmargin_type,
    m2masset_price,
    setm2masset_price,
    m2mpercent,
    setm2mPercent,
    m2moriginal_price,
  } = useM2MContext();

  const handleIncreasePrice = () => {
    let pc = parseFloat((m2mpercent + 0.2).toFixed(2));
    let newpriceDiff = parseFloat(
      ((pc / 100) * Number(m2masset_price)).toFixed(2)
    );
    setm2mPercent(pc);
    setm2masset_price(newpriceDiff);
  };

  const handleDecreasePrice = () => {
    let pc = parseFloat((m2mpercent - 0.2).toFixed(2));
    let newpriceDiff = parseFloat(
      ((pc / 100) * Number(m2masset_price)).toFixed(2)
    );
    setm2mPercent(pc);
    setm2masset_price(newpriceDiff);
  };

  const handleInputChance = (val) => {
    if (m2mmargin_type === "Floating") {
      let pc = val.toString().split("%")[0];
      pc = Number(pc);
      pc = parseFloat(pc.toFixed(2));
      let newpriceDiff = parseFloat(
        ((pc / 100) * Number(m2masset_price)).toFixed(2)
      );
      setm2mPercent(pc);
      setm2masset_price(newpriceDiff);
    } else {
      let value = Number(val);
      let newPercent = Number((value * 100) / Number(m2masset_price));
      newPercent = parseFloat(newPercent.toFixed(2));
      setm2mPercent(newPercent);
      setm2masset_price(value);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="w-full border-[1px] border-titusLightBorder px-3 py-0 rounded-lg flex justify-between items-center">
        <div
          className="text-lg font-semibold hover:text-titusGreenFaded cursor-pointer"
          onClick={handleDecreasePrice}
        >
          <FaMinus />
        </div>
        <div className="flex items-center gap-1 text-white font-semibold text-md">
          <input
            type={m2mmargin_type === "Floating" ? "text" : "text"}
            className="border-0 bg-transparent text-white font-semibold text-[17px] md:text-lg text-center w-[200px]"
            value={
              m2mmargin_type === "Floating" ? `${m2mpercent}%` : m2masset_price
            }
            onChange={(e) => handleInputChance(e.target.value)}
          />
        </div>
        <div
          className="text-lg font-semibold hover:text-titusGreenFaded cursor-pointer"
          onClick={handleIncreasePrice}
        >
          <FaPlus />
        </div>
      </div>
      <div className="text-[12px]">
        Pricing formular: {toDecimal(m2moriginal_price, 3)} * {m2mpercent}% ≈{" "}
        <span className="text-white text-md font-semibold">
          {m2masset_price} {m2mCurrency?.ticker}
        </span>
      </div>
    </div>
  );
};

export default CreateTradeSetPrice;
