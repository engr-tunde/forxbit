import { FaCheck, FaTimesCircle } from "react-icons/fa";

const CTF2_SelectPaymentMethod = ({
  showAddPaymentMethod,
  setShowAddPaymentMethod,
  handleAddPayemntMethod,
  paymentMethods,
  payment_methods,
}) => {
  return (
    <div
      className={
        showAddPaymentMethod
          ? "flex justify-center items-center w-screen h-full bg-black/25 fixed top-0 left-0"
          : "hidden"
      }
      style={{
        backdropFilter: showAddPaymentMethod ? "blur(5px)" : "",
      }}
    >
      {/* <div className="fixed top-[15%] md:top-[30%] z-[150] flex flex-col w-[90%] md:w-[450px] mx-auto bg-titusChatBg p-5 md:p-8 rounded-2xl gap-3"> */}
      <div className="flex flex-col h-max w-[90%] md:w-[450px] mx-auto bg-titusDashCardDarkBG p-5 md:p-7 gap-3">
        <div className="flex items-center justify-between">
          <div className="font-medium text-white">Select payment method</div>
          <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
            <FaTimesCircle
              onClick={() => setShowAddPaymentMethod(false)}
              className="text-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {paymentMethods?.map((item, i) => (
            <div
              className="border-[1px] border-titusLightBorder p-2 rounded-sm flex items-center justify-between cursor-pointer"
              key={i}
              onClick={() => handleAddPayemntMethod(item.name)}
            >
              <div className="flex items-center gap-1">
                <div className="h-3 w-[2px] even:bg-titusGreen odd:bg-titusYellowFaded"></div>
                <div
                  className={
                    payment_methods.includes(item.name)
                      ? "text-white text-sm"
                      : "text-sm"
                  }
                >
                  {item.name}
                </div>
              </div>
              <div
                className={
                  payment_methods.includes(item.name)
                    ? "h-5 w-5 border-0 text-black bg-titusGreen flex items-center justify-center"
                    : "h-5 w-5 border-[2px] border-titusLightBorder text-transparent bg-transparent"
                }
              >
                <FaCheck />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTF2_SelectPaymentMethod;
