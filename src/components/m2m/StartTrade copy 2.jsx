import React, { useEffect } from "react";
import InputFieldBorderless from "../forms/InputFieldBorderless";
import CustomFormik from "../../utils/CustomFormik";
import { p2pTradeValues } from "../../utils/initialValues";
import { validateP2pTrade } from "../../utils/validate";
import { useNavigate } from "react-router-dom";
import SelectFieldBorderless from "../forms/SelectFieldBorderless";

const StartTrade = ({
  currency,
  showStartTrade,
  setShowStartTrade,
  selectedTrade,
  setSelectedTrade,
}) => {
  // const initialValues = p2pTradeValues(selectedTrade?.order);
  let initialValues = {
    // pay: "200",
    pay: selectedTrade ? selectedTrade?.order?.min_limit : "",
    get: "",
  };
  const validationSchema = validateP2pTrade();
  const history = useNavigate();

  console.log({ selectedTrade });

  const handleSubmit = async (values) => {};

  const handleCloseTrade = () => {
    setShowStartTrade(false);
    setSelectedTrade({});
  };

  console.log({ initialValues });

  const handleBuyAll = () => {
    initialValues.pay = selectedTrade?.order?.max_limit;
    console.log("new initial value", initialValues);
  };

  // useEffect(() => {
  //   console.log("selected", selectedTrade?.order);
  //   initialValues = {
  //     // pay: "200",
  //     pay: selectedTrade?.order?.min_limit,
  //     get: "",
  //   };
  //   console.log({ initialValues });
  // }, [selectedTrade, setSelectedTrade]);

  return (
    <div
      className={
        showStartTrade
          ? "flex justify-center items-center w-screen h-full bg-black/85 absolute top-0 left-0"
          : "hidden"
      }
    >
      <div className="fixed top-[15%] md:top-[20%] z-[150] flex flex-col w-[90%] md:w-[40%] max-auto bg-black border-titusGreenFaded border-[1px] p-5 md:p-10 rounded-lg">
        <div className="flex items-center justify-between mb-5">
          <div className="text-md font-semibold text-white">
            Trade with {selectedTrade?.user?.username} &nbsp;
            <span className="text-sm">
              ({selectedTrade?.user?.orders} orders)
            </span>
          </div>
          <div
            className="text-[26px] cursor-pointer font-semibold text-titusYellowFaded p-0"
            onClick={handleCloseTrade}
          >
            x
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
        <div className="flex flex-col gap-5">
          <div className="text-sm ">
            <div className="font-medium text-white mb-1">
              Advertisement Terms <span className="text-red-600">*</span>
            </div>
            <div className="">{selectedTrade?.terms}</div>
          </div>

          <div className="text-sm">
            Price{" "}
            <span className="text-white text-md">
              {selectedTrade?.order?.price} {currency?.ticker}
            </span>
          </div>

          <CustomFormik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <div className="border-[1px] border-titusLightBorder rounded-lg p-4">
              <div className="text-sm">You Pay</div>
              <div className="flex items-center justify-between">
                <div className="w-[50%] md:w-[70%]">
                  <InputFieldBorderless name="pay" full={true} type="number" />
                </div>
                <div className="flex items-center justify-end gap-2 md:gap-3">
                  <div
                    className="text-titusGreen font-semibold text-sm"
                    onClick={handleBuyAll}
                  >
                    Buy All
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <img
                      src={`/assets/images/tokens/${currency.icon}`}
                      alt={import.meta.env.VITE_APP_NAME}
                      className="h-6 w-6"
                    />
                    <div className="text-sm">{currency.ticker}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-titusLightBorder rounded-lg p-4">
              <div className="text-sm">You Get</div>
              <div className="flex items-center justify-between">
                <div className="w-[70%]">
                  <InputFieldBorderless name="get" full={true} type="number" />
                </div>
                <div className="flex items-center justify-end gap-2">
                  <img
                    src={`/assets/images/tokens/${selectedTrade?.order?.token.toLowerCase()}.png`}
                    alt={import.meta.env.VITE_APP_NAME}
                    className="h-6 w-6"
                  />
                  <div className="text-sm">{selectedTrade?.order?.token}</div>
                </div>
              </div>
            </div>

            <div className="border-[1px] border-titusLightBorder rounded-lg p-4 text-white">
              {/* <SelectFieldBorderless
                name="payment_option"
                options={selectedTrade?.payment}
                placeholder="Payment method"
              /> */}
              Select payment method
            </div>
          </CustomFormik>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default StartTrade;
