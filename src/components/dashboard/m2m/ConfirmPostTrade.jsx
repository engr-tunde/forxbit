import { FaTimesCircle } from "react-icons/fa";
import { postM2MTrade } from "../../../api";
import { useM2MContext } from "../../../context/m2mContext";
import {
  errorNotification,
  formatter,
  successNotification,
} from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";

const ConfirmPostTrade = ({
  showConfirmTrade,
  setshowConfirmTrade,
  setisSubmitting,
  setdisabled,
}) => {
  const {
    m2mCurrency,
    m2mAsset,
    m2masset_price,
    m2mTradeType,
    min_limit,
    max_limit,
    fiat_amount,
    token_amount,
    payment_methods,
    payment_time_limit,
    terms_tags,
    remarks,
    setreset,
  } = useM2MContext();
  const history = useNavigate();

  const handleSubmit = async () => {
    setisSubmitting(true);
    setdisabled(true);
    const payload = {
      currency: m2mCurrency,
      token: m2mAsset,
      price: Number(m2masset_price),
      type: m2mTradeType,
      min_limit: Number(min_limit),
      max_limit: Number(max_limit),
      token_amount: Number(token_amount),
      fiat_amount: Number(fiat_amount),
      payment_methods: payment_methods,
      completion_window: payment_time_limit,
      terms_tags: terms_tags,
      remarks: remarks,
    };
    console.log("payload", payload);
    const response = await postM2MTrade(payload);
    console.log("response", response);
    if (response.status === 200) {
      const data = response.data;
      successNotification(data.message);
      setreset(true);
      setTimeout(() => history("/dashboard/m2m/my-trades"), 1500);
      setisSubmitting(false);
      setdisabled(false);
    } else {
      errorNotification(response?.data?.error);
      setisSubmitting(false);
      setdisabled(false);
    }
    setshowConfirmTrade(false);
  };

  return (
    <div
      className={
        showConfirmTrade
          ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50"
          : "hidden"
      }
      style={{
        backdropFilter: showConfirmTrade ? "blur(5px)" : "",
      }}
    >
      <div className="w-[85%] mx-auto md:w-[500px] h-max bg-titusDashCardDarkBG p-7 pb-12 md:py-10 md:px-7 flex flex-col gap-8 md:gap-10">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-semibold">Confirm trade</div>
          <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
            <FaTimesCircle
              onClick={() => setshowConfirmTrade(false)}
              className="text-xl"
            />
          </div>
        </div>
        <div className="text-sm text-center text-titusChatText leading-6">
          {m2mTradeType.toLowerCase() == "buy" ? (
            <div className="">
              {" "}
              Are you sure you want to buy{" "}
              <span className="text-titusYellow text-[16px]">
                {token_amount} {m2mAsset?.ticker?.toUpperCase()}
              </span>{" "}
              at total price of{" "}
              <span className="text-titusGreenFaded text-[16px]">
                {formatter(fiat_amount).substring(1)}{" "}
                {m2mCurrency?.ticker?.toUpperCase()}
              </span>
              ?
            </div>
          ) : (
            <div className="">
              {" "}
              Are you sure you want to put up{" "}
              <span className="text-titusYellow text-[16px]">
                {token_amount} {m2mAsset?.ticker?.toUpperCase()}
              </span>{" "}
              for a total price of{" "}
              <span className="text-titusGreenFaded text-[16px]">
                {formatter(fiat_amount).substring(1)}{" "}
                {m2mCurrency?.ticker?.toUpperCase()}
              </span>
              ?
            </div>
          )}
        </div>
        <div
          className="w-full btnn1 py-[10px] px-8 flex justify-center items-center gap-2 text-sm  font-medium"
          onClick={handleSubmit}
        >
          <span>Confirm & Post Trade</span>
          <img
            src="/assets/images/wallet/Trade-M2M-3.svg"
            alt=""
            className="w-5"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmPostTrade;
