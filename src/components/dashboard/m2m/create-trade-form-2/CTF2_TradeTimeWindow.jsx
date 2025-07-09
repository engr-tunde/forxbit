import { FaArrowAltCircleDown } from "react-icons/fa";

const CTF2_TradeTimeWindow = ({
  setShowPaymentTimeWindow,
  showPaymentTimeWindow,
  paymentLimitWindows,
  payment_time_limit,
  setpayment_time_limit,
}) => {
  return (
    <>
      <div className="relative">
        <div
          onMouseEnter={() => {
            setShowPaymentTimeWindow(true);
          }}
          onClick={() => {
            setShowPaymentTimeWindow(!showPaymentTimeWindow);
          }}
          className="flex gap-1 items-center justify-between border-[1px] border-titusLightBorder py-4 md:py-3 px-3 rounded-lg text-sm cursor-pointer"
        >
          <span className="text-white">{payment_time_limit}</span>
          <FaArrowAltCircleDown />
        </div>
        <div
          onMouseLeave={() => setShowPaymentTimeWindow(false)}
          className={
            showPaymentTimeWindow
              ? "bg-titusDarkGrey text-sm py-4 flex flex-col absolute -left-0 top-12 md:top-10 rounded-2xl z-[3000] text-white w-[150px] shadow-md shadow-black"
              : "hidden"
          }
          style={{
            boxShadow: showPaymentTimeWindow ? "2px 2px 5px #000" : "none",
          }}
        >
          {paymentLimitWindows.map((item, i) => (
            <div
              key={i}
              className="text-white hover:text-black hover:bg-titusYellow pl-4 py-2 w-full ease-in duration-300 cursor-pointer"
              onClick={() => setpayment_time_limit(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CTF2_TradeTimeWindow;
