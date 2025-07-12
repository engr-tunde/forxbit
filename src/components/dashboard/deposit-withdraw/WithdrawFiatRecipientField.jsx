import { useRef, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { useOutsideClick } from "../../../utils/helpers";
import { Link } from "react-router-dom";
import AddBankAccount from "../account/payment-method/AddBankAccount";
import { fetchUserBankAccounts } from "../../../api";

const WithdrawFiatRecipientField = ({ data, setdata, array }) => {
  const [showAddBank, setshowAddBank] = useState(false);
  const { mutate } = fetchUserBankAccounts();
  const [showAsset, setshowAsset] = useState(false);
  const ref = useRef();
  // useOutsideClick(ref.current, () => setshowAsset(false));

  return (
    <>
      <div className="w-full flex items-center justify-between relative border-[1px] border-titusLightBorder rounded-xl bg-titusDarkBG">
        <div
          className="w-full flex items-center justify-between rounded-lg px-2 md:px-2 h-full py-[10px] cursor-pointer"
          onMouseEnter={() => {
            setshowAsset(true);
          }}
          onClick={() => {
            setshowAsset(!showAsset);
          }}
        >
          {data ? (
            <>
              <div className="text-white text-sm">{`${data?.account_name} - ${data?.bank_name}`}</div>
            </>
          ) : (
            <>
              <div className="text-white text-sm min-w-content">
                Select bank account
              </div>
            </>
          )}
          <FaArrowCircleDown className="" />
        </div>
        <div
          className={
            showAsset
              ? "max-h-[400px] w-full md:w-[70%] overflow-y-scroll absolute z-[1500] border-titusLightBorder flex flex-col gap-1 left-0 top-12 md:top-14 rounded-lg bg-titusDarkGrey"
              : "hidden"
          }
          onMouseLeave={() => {
            setshowAsset(false);
          }}
        >
          <div className="w-full relative">
            <div className="px-2 pb-5">
              {array?.length ? (
                array?.map((item, i) => (
                  <div
                    className="md:px-3 border-b-[1px] border-b-titusLightBorder flex items-center gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
                    key={i}
                    onClick={() => {
                      setdata(item);
                      setshowAsset(false);
                    }}
                  >
                    <div className="w-full flex flex-col">
                      <div className="text-sm text-white">
                        {item?.account_name}
                      </div>
                      <div className="flex gap-3 text-[12px] font-light">
                        <span>{item?.bank_name}</span>
                        <span>({item?.account_number})</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm">
                  No payment details added yet.{" "}
                  <span
                    onClick={() => {
                      setshowAsset(!showAsset);
                      setshowAddBank(true);
                    }}
                    className="text-titusYellowFaded"
                  >
                    Add bank account
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <AddBankAccount
        showAddBank={showAddBank}
        setshowAddBank={setshowAddBank}
        mutate={mutate}
        // data={array}
      />
    </>
  );
};

export default WithdrawFiatRecipientField;
