import { FaMinus, FaPlus } from "react-icons/fa";
import { useM2MContext } from "../../../../context/m2mContext";
import { toDecimal } from "../../../../utils/helpers";
import { useState } from "react";

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

  const [error, seterror] = useState();

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

  const handleFloatingInputChance = (val) => {
    let pc = val.toString().split("%")[0];
    pc = Number(pc);
    pc = parseFloat(pc.toFixed(2));
    let newpriceDiff = parseFloat(
      ((pc / 100) * Number(m2moriginal_price)).toFixed(2)
    );
    if (pc > 130) {
      seterror("Cannot go higher than 130% of the market price");
    } else if (pc < 70) {
      seterror("Cannot go lower than 70% of the market price");
    } else {
      seterror();
    }
    setm2mPercent(pc);
    setm2masset_price(newpriceDiff);
  };

  const handleFixedInputChance = (val) => {
    let value = Number(val);
    let newPercent = Number((value * 100) / Number(m2moriginal_price));
    newPercent = parseFloat(newPercent.toFixed(2));
    if (newPercent > 130) {
      seterror("Cannot go higher than 130% of the market price");
    } else if (newPercent < 70) {
      seterror("Cannot go lower than 70% of the market price");
    } else {
      seterror();
    }
    setm2mPercent(newPercent);
    setm2masset_price(val);
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
          {m2mmargin_type === "Floating" ? (
            <input
              type="text"
              className="border-0 bg-transparent text-white font-semibold text-[17px] md:text-lg text-center w-[200px]"
              value={m2mpercent && `${m2mpercent}%`}
              onChange={(e) => handleFloatingInputChance(e.target.value)}
            />
          ) : (
            <input
              type="number"
              // type="text"
              // pattern="(?:0|[1-9]\d*)"
              // inputMode="decimal"
              // min={0}
              // step={1}
              className="border-0 bg-transparent text-white font-semibold text-[17px] md:text-lg text-center w-[200px]"
              value={m2masset_price}
              // defaultValue={m2masset_price}
              onChange={(e) => handleFixedInputChance(e.target.value)}
            />
          )}
        </div>
        <div
          className="text-lg font-semibold hover:text-titusGreenFaded cursor-pointer"
          onClick={handleIncreasePrice}
        >
          <FaPlus />
        </div>
      </div>
      <div className="text-[12px]">
        Pricing formular:{" "}
        {/* {m2moriginal_price ? toDecimal(m2moriginal_price, 3) : null} Pricing */}
        {m2moriginal_price} Pricing formular: {m2moriginal_price} * {m2mpercent}
        % ≈{" "}
        <span className="text-white text-md font-semibold">
          {m2masset_price} {m2mCurrency?.ticker}
        </span>
      </div>

      {error ? <div className="error">{error}</div> : null}
    </div>
  );
};

export default CreateTradeSetPrice;
