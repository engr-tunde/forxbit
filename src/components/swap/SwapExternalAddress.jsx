import NetworkDropdown from "../globals/trade/NetworkDropdown";
import { useSwapContext } from "../../context/swapContext";
import {
  errorNotification,
  successNotification,
  validateWalletAddress,
} from "../../utils/helpers";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { changeNowFetcherNoAuth } from "../../api/changeNow";

const SwapExternalAddress = () => {
  const {
    setrecipient_address,
    recipient_address,
    recipient_network,
    setrecipient_network,
    to_token,
    errors,
  } = useSwapContext();

  const [address, setaddress] = useState("");
  const [addressError, setaddressError] = useState(false);
  const [verify, setverify] = useState("Verify");

  const handleVerifyAddress = async () => {
    // if (to_token.network == "bsc" || to_token.network == "ton") {
    const verifyAddressRes = validateWalletAddress(
      address,
      to_token?.network?.toLowerCase()
    );
    console.log("verifyAddressRes bsc", verifyAddressRes);
    if (verifyAddressRes) {
      setrecipient_address(address);
      successNotification("Wallet address validated!");
      setverify("Verified");
    } else {
      errorNotification(
        `Invalid wallet address for ${to_token?.network?.toUpperCase()} network`
      );
      setrecipient_address("");
      setverify("Verify");
    }

    // }

    // else {
    //   const verifyAddressRes = await changeNowFetcherNoAuth(
    //     `v2/validate/address?currency=${to_token?.network}&address=${address}`
    //   );
    //   console.log("verifyAddressRes", verifyAddressRes);
    //   console.log("verifyAddressRes.error", verifyAddressRes.error);
    //   if (verifyAddressRes) {
    //     if (verifyAddressRes.error) {
    //       if (verifyAddressRes.error == "bad_params") {
    //         errorNotification(
    //           `${to_token?.network} network is not supported for this swap`
    //         );
    //         setrecipient_address("");
    //         setverify("Verify");
    //       } else {
    //         errorNotification(
    //           `Invalid wallet address for ${to_token.network} network`
    //         );
    //         setrecipient_address("");
    //         setverify("Verify");
    //       }
    //     }

    //     if (verifyAddressRes.result) {
    //       if (verifyAddressRes.result == true) {
    //         setrecipient_address(address);
    //         successNotification("Wallet address validated!");
    //         setverify("Verified");
    //       }
    //     }
    //     //  else {
    //     //   errorNotification("Invalid wallet address supplied!");
    //     //   setrecipient_address("");
    //     //   setverify("Verify");
    //     // }
    //   }
    // }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            onChange={(e) => setaddress(e.target.value)}
            placeholder="Enter address"
            className="w-full p-5 border-[1px] border-titusLightBorder bg-titusDarkBG rounded-md"
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

      {/* <div className="w-full relative bg-titusDarkBG rounded-lg">
        <NetworkDropdown
          data={recipient_network}
          setdata={setrecipient_network}
          array={to_token?.networks}
          firstItem="Select network"
        />
        {errors?.network ? <div className="error">{errors.network}</div> : null}
      </div> */}
    </div>
  );
};

export default SwapExternalAddress;
