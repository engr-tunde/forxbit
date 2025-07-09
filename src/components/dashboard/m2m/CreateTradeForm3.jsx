import { useReducer, useState } from "react";
import { FaArrowAltCircleDown, FaCheck, FaInfo } from "react-icons/fa";
import { tradeTermsTags } from "../../../utils/data";
import { useM2MContext } from "../../../context/m2mContext";
import { postM2MTrade } from "../../../api";
import { successNotification, errorNotification } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";
import HandleFuncButton from "../../forms/buttons/HandleFuncButton";

const CreateTradeForm3 = () => {
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
    auto_reply,

    setterms_tags,
    setm2mCurrentStage,
    setremarks,
    setauto_reply,

    setreset,
  } = useM2MContext();
  const [isSubmitting, setisSubmitting] = useState(false);
  const [disabled, setdisabled] = useState(false);

  const [showAddTermsTags, setshowAddTermsTags] = useState(false);
  const history = useNavigate();

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleAddTermsTags = (item) => {
    let termsArr = terms_tags;
    if (termsArr.includes(item)) {
      let updatedTermsArr = termsArr.filter((it) => it !== item);
      setterms_tags(updatedTermsArr);
    } else {
      if (terms_tags.length < 3) {
        termsArr.push(item);
        setterms_tags(termsArr);
      }
    }
    forceUpdate();
  };

  const handleRemoveAddTermsTags = (item) => {
    console.log("remove clicked");
    let termsArr = terms_tags;
    let updatedTermsArr = termsArr.filter((it) => it.title !== item.title);
    setterms_tags(updatedTermsArr);
    forceUpdate();
  };

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
      auto_reply: auto_reply,
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
  };

  return (
    <>
      <div className="w-full p-3 md:p-4 rounded-lg bg-titusGreenDeep text-white flex gap-2">
        <FaInfo className="block text-xl" />
        <div className="flex flex-col  gap-[10px] md:gap-[4px] text-[12px]">
          <div className="font-medium">
            Please ensure that you comply with P2P rules to avoid account
            suspension or expulsion from the Binance Merchant Program.
            Especially:
          </div>
          <div className="">
            1. If you require taker's document for verification, it's necessary
            to indicate the requirement in the 'Remarks' section of your
            advertisement.
          </div>
          <div className="">
            2. Imposing extra fees on takers is not allowed in all scenarios.
          </div>
        </div>
      </div>

      <div className="w-full md:w-[70%] flex flex-col gap-2">
        <div className="text-white text-sm md:text-md">
          Terms Tags (Optional)
        </div>
        <div className="flex flex-col">
          <div className="flex gap-1 items-center justify-between border-[1px] border-titusLightBorder py-4 md:py-3 px-3 rounded-lg">
            <div className="flex flex-wrap gap-x-3 gap-y-1 w-[90%]">
              {terms_tags.map((item, i) => (
                <div
                  className="bg-titusChatBg px-2 py-[2px] rounded-md flex items-center gap-2"
                  key={i}
                >
                  <div className="text-[12px] md:text-[12px] text-white font-light leading-[14px]">
                    {item.title}
                  </div>
                  <div
                    className="text-white p-1 font-semibold cursor-pointer"
                    onClick={() => handleRemoveAddTermsTags(item)}
                  >
                    x
                  </div>
                </div>
              ))}
            </div>
            <div
              className="w-[10%] flex justify-end items-center h-full"
              onMouseEnter={() => {
                setshowAddTermsTags(true);
              }}
              onClick={() => {
                setshowAddTermsTags(!showAddTermsTags);
              }}
            >
              <FaArrowAltCircleDown className="text-xl md:text-xl" />
            </div>
          </div>

          <div className="relative">
            <div
              onMouseLeave={() => setshowAddTermsTags(false)}
              className={
                showAddTermsTags
                  ? "w-full bg-titusDarkGrey text-sm py-4 flex flex-col absolute -left-0 top-1 rounded-2xl z-[3000] text-white shadow-md shadow-black"
                  : "hidden"
              }
              style={{
                boxShadow: showAddTermsTags ? "2px 2px 5px #000" : "none",
              }}
            >
              {tradeTermsTags.map((item, i) => (
                <div
                  key={i}
                  className={
                    terms_tags.includes(item)
                      ? "bg-titusGreenDeep pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex gap-2 items-center"
                      : terms_tags.length == 3
                      ? "pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex gap-2 items-center opacity-45"
                      : "hover:bg-titusGreenDeep pl-4 py-2 w-full ease-in duration-300 cursor-pointer flex gap-2 items-center"
                  }
                  onClick={() => handleAddTermsTags(item)}
                >
                  <div
                    className={
                      terms_tags.includes(item)
                        ? "h-5 w-5 border-0 text-black bg-titusGreen flex items-center justify-center rounded-md"
                        : "h-5 w-5 border-[2px] border-titusLightBorder text-transparent bg-transparent rounded-md"
                    }
                  >
                    <FaCheck />
                  </div>
                  <div className="flex flex-col -gap-3">
                    <div className="text-[12px] text-white">{item.title}</div>
                    <div className="text-[10px] text-titusText text-wrap leading-[12px]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-full flex flex-col justify-between gap-2">
        <div className="text-white text-sm md:text-md">Remarks (Optional)</div>
        <div className="flex flex-col gap-1">
          <div className="w-full flex items-center justify-between border-[1px] border-titusLightBorder rounded-lg py-1 px-2 md:px-3">
            <div className="w-[92%] flex items-end">
              <textarea
                type="text"
                className="w-full h-24 border-0 bg-transparent text-white text-[14px] input-no-border"
                value={remarks}
                onChange={(e) => setremarks(e.target.value)}
                maxlength="1000"
              />
            </div>
            <div className="h-full w-[8%] text-sm flex items-end justify-end">
              <span className="">{remarks.length}</span>
              <span className="">/1000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-full flex flex-col justify-between gap-2">
        <div className="text-white text-sm md:text-md">
          Auto Reply (Optional)
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-full flex items-center justify-between border-[1px] border-titusLightBorder rounded-lg py-1 px-2 md:px-3">
            <div className="w-[92%] flex items-end">
              <textarea
                type="text"
                className="w-full h-24 border-0 bg-transparent text-white text-[14px] input-no-border"
                value={auto_reply}
                onChange={(e) => setauto_reply(e.target.value)}
                maxlength="1000"
              />
            </div>
            <div className="h-full w-[8%] text-sm flex items-end justify-end">
              <span className="">{auto_reply.length}</span>
              <span className="">/1000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between md:justify-end gap-3 md:gap-5">
        <div
          className="w-[140px] btnn-dark py-2 text-center text-sm"
          onClick={() => setm2mCurrentStage(2)}
        >
          Previous
        </div>
        <HandleFuncButton
          handleSubmit={handleSubmit}
          title="Post Trade"
          className="w-[140px] btnn1"
          isSubmitting={isSubmitting}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default CreateTradeForm3;
