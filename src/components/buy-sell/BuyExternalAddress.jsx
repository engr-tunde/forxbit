import { useBuySellContext } from "../../context/buySellContext";
import { validateWalletAddress } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";

const BuyExternalAddress = () => {
  const { recipientAddress, setrecipientAddress, recipientNetwork, errors } =
    useBuySellContext();

  const [address, setaddress] = useState("");

  const handleVerifyAddress = async () => {
    if (address && recipientNetwork) {
      const verifyAddressRes = validateWalletAddress(
        address,
        recipientNetwork?.network?.toLowerCase()
      );
      if (verifyAddressRes) {
        setrecipientAddress(address);
      } else {
        setrecipientAddress("");
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleVerifyAddress();
    }, 2000);
  }, [address]);

  const handleChange = (val) => {
    setrecipientAddress();
    setaddress(val);
  };

  console.log("recipientAddress", recipientAddress);

  return (
    <div className="flex flex-col gap-1 mt-2">
      <div className="flex gap-2 items-center">
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Enter address"
          className="w-full py-5 h-[50px] px-3 border-[1px] border-titusLightBorder bg-transparent rounded-md"
        />

        {recipientAddress && <FaCheck className="text-titusGreenFaded" />}
      </div>
      {errors?.address ? <div className="error">{errors.address}</div> : null}
    </div>
  );
};

export default BuyExternalAddress;
