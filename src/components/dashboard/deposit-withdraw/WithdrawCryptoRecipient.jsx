import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import {
  errorNotification,
  validateWalletAddress,
} from "../../../utils/helpers";
import { useFiatDepositWithdrawContext } from "../../../context/fiatDepositWithdrawContext";

const WithdrawCryptoRecipient = ({ errors, setrecipientAddress }) => {
  const [address, setaddress] = useState();
  const [verify, setverify] = useState("Verify");
  const { token } = useFiatDepositWithdrawContext();

  const handleVerifyAddress = async () => {
    if (address) {
      const verifyAddressRes = validateWalletAddress(
        address,
        token?.network?.toLowerCase()
      );
      if (verifyAddressRes) {
        setrecipientAddress(address);
        setverify("Verified");
      } else {
        errorNotification(
          `Invalid wallet address for ${token?.network} network`
        );
        setrecipientAddress("");
        setverify("Verify");
      }
    }
  };

  const handleChange = (value) => {
    setaddress(value);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="w-full flex items-center gap-2 justify-between ">
        <div className="w-full md:w-[88%] flex flex-col border-[1px] border-titusLightBorder rounded-xl bg-titusDarkBG">
          <input
            //   disabled={disabled}
            type="text"
            // value={username}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Wallet address"
            className="w-full px-2 py-2 border-[1px] bg-transparent input-no-border placeholder:text-[15px] placeholder:font-semibold text-[15px]"
          />
        </div>
        <div
          className="font-semibold text-white text-sm cursor-pointer flex items-center gap-1 w-max"
          onClick={handleVerifyAddress}
        >
          {verify}
          {verify == "Verified" && <FaCheck className="text-titusGreenFaded" />}
        </div>
      </div>
      {errors.recipient && <div className="error">{errors.recipient}</div>}
    </div>
  );
};

export default WithdrawCryptoRecipient;
