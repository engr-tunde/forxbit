import { useSwapContext } from "../../context/swapContext";
import { validateWalletAddress } from "../../utils/helpers";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const SwapExternalAddress = () => {
  const { setrecipient_address, recipient_address, to_token, errors } =
    useSwapContext();

  const [address, setaddress] = useState("");

  const handleVerifyAddress = async () => {
    if (address) {
      const verifyAddressRes = validateWalletAddress(
        address,
        to_token?.network?.toLowerCase()
      );
      if (verifyAddressRes) {
        setrecipient_address(address);
      } else {
        setrecipient_address();
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleVerifyAddress();
    }, 2000);
  }, [address]);

  const handleChange = (val) => {
    setrecipient_address();
    setaddress(val);
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-2 items-center w-full py-1 pe-5 border-0 bg-titusDarkBG rounded-xl">
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter address"
          className="w-full border-0 bg-titusDarkBG rounded-xl"
        />
        {recipient_address && <FaCheck className="text-titusGreenFaded" />}
      </div>
      {errors?.address ? <div className="error">{errors.address}</div> : null}
    </div>
  );
};

export default SwapExternalAddress;
