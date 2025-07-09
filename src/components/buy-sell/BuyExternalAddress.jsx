import NetworkDropdown from "../globals/trade/NetworkDropdown";
import { useBuySellContext } from "../../context/buySellContext";
import {
  errorNotification,
  successNotification,
  validateWalletAddress,
} from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const BuyExternalAddress = () => {
  const {
    setrecipientAddress,
    recipientNetwork,
    setrecipientNetwork,
    token,
    errors,
  } = useBuySellContext();

  const [address, setaddress] = useState("");
  const [verify, setverify] = useState("Verify");

  const handleVerifyAddress = async () => {
    if (!recipientNetwork.length) {
      errorNotification("Please select token network first!");
    } else {
      const verifyAddressRes = validateWalletAddress(
        address,
        recipientNetwork?.toLowerCase()
      );
      console.log("verifyAddressRes bsc", verifyAddressRes);
      if (verifyAddressRes) {
        setrecipientAddress(address);
        successNotification("Wallet address validated!");
        setverify("Verified");
      } else {
        errorNotification(
          `Invalid wallet address for ${recipientNetwork?.toUpperCase()} network`
        );
        setrecipientAddress("");
        setverify("Verify");
      }
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-3">
      <div className="flex flex-col">
        {" "}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            onChange={(e) => setaddress(e.target.value)}
            placeholder="Enter address"
            className="w-full p-2 border-[1px] border-titusLightBorder bg-titusDarkBG rounded-md"
          />
          <div
            className="font-semibold text-white text-sm cursor-pointer flex items-center gap-1 w-max"
            onClick={handleVerifyAddress}
          >
            {verify}
            {verify == "Verified" && (
              <FaCheck className="text-titusGreenFaded" />
            )}
          </div>
        </div>
        {errors?.address ? <div className="error">{errors.address}</div> : null}
      </div>

      <div className="w-full relative bg-titusDarkBG rounded-lg">
        {token && (
          <NetworkDropdown
            data={recipientNetwork}
            setdata={setrecipientNetwork}
            array={token?.networks}
            firstItem="Select network"
          />
        )}
        {errors?.network ? <div className="error">{errors.network}</div> : null}
      </div>
    </div>
  );
};

export default BuyExternalAddress;
