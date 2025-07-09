import React from "react";
import { useM2MContext } from "../../../../context/m2mContext";

const CreateTradeSelectPriceType = () => {
  const { m2mmargin_type, setm2mMargin_type } = useM2MContext();

  return (
    <>
      <div className="flex items-center gap-20">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setm2mMargin_type("Fixed")}
        >
          <div
            className={
              m2mmargin_type === "Fixed"
                ? "text-white text-sm md:text-md"
                : "text-titusText text-sm md:text-md"
            }
          >
            Fixed
          </div>
          <div
            className={
              m2mmargin_type === "Fixed"
                ? "p-1 bg-transparent border-[6px] border-white rounded-full"
                : "p-[9px] bg-transparent border-[1px] border-white rounded-full"
            }
          ></div>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setm2mMargin_type("Floating")}
        >
          <div
            className={
              m2mmargin_type === "Floating"
                ? "text-white text-sm md:text-md"
                : "text-titusText text-sm md:text-md"
            }
          >
            Floating
          </div>
          <div
            className={
              m2mmargin_type === "Floating"
                ? "p-1 bg-transparent border-[6px] border-white rounded-full"
                : "p-[9px] bg-transparent border-[1px] border-white rounded-full"
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default CreateTradeSelectPriceType;
