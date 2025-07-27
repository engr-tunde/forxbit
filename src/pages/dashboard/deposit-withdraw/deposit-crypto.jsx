import { useEffect, useState } from "react";
import { FaCopy, FaShare } from "react-icons/fa";
import QRCode from "react-qr-code";
import { copyFunc } from "../../../utils/helpers";
import { useLocation } from "react-router-dom";
import DepositWithdrawHeader from "../../../components/globals/DepositWithdrawHeader";
import { fetchUserTokenNetworks } from "../../../api";
import Head from "../../../components/Head";

const userWalletAddresses = [
  {
    network: "Bitcoin",
    address: "bc1qs9hhykvd84m2pxpx2ce7zdqf3aj39zk8jnsv0q",
  },
  {
    network: "Ethereum",
    address: "0x0D6c6afE447Eda57ED74A0f46E29FAc248672a52",
  },
  {
    network: "Tron",
    address: "Trxc6afE447Eda57ED74A0f46E29FAc248672a52",
  },
  {
    network: "Binance Smart Chain (BSC)",
    address: "0x0D6c6afE447Eda57ED74A0f46E29FAc248672a52",
  },
  {
    network: "Ripple",
    address: "rfKpSz129bhQc3sU5j92hDdRg52XERr1Yo",
  },
  {
    network: "Solana",
    address: "J76QBapYaty4xCeRzUPTC6t799b1hcHRcnb2hF4Zh7ma",
  },
  {
    network: "Litecoin",
    address: "ltc1qr774wh7dghmwwasxck07gpgfkmspxnnjwmtkg3",
  },
  {
    network: "Stellar",
    address: "GDKEMKNYVIWTFSSUOSTOWHOY3YBOHQF7GZHC2EVWTJCQWR3P3NVSOLRS",
  },
  {
    network: "Cardano",
    address: "GDKEMKNYVIWTFSSUOSTOWHOY3YBOHQF7GZHC2EVWTJCQWR3P3NVSOLRS",
  },
  {
    network: "Avalanche C Chain",
    address: "GDKEMKNYVIWTFSSUOSTOWHOY3YBOHQF7GZHC2EVWTJCQWR3P3NVSOLRS",
  },
  {
    network: "Doge",
    address: "GDKEMKNYVIWTFSSUOSTOWHOY3YBOHQF7GZHC2EVWTJCQWR3P3NVSOLRS",
  },
];

const DepositPage = () => {
  const [qrCode, setqrCode] = useState("address");
  const location = useLocation();
  const suppliedToken = location.state?.suppliedToken;
  const [walletAddress, setwalletAddress] = useState();
  const { networks } = fetchUserTokenNetworks();

  console.log("suppliedToken", suppliedToken);

  useEffect(() => {
    if (userWalletAddresses) {
      const selectedNetwork = userWalletAddresses?.filter(
        (item) =>
          item.network.toLowerCase() == suppliedToken?.network.toLowerCase()
      )[0];
      setwalletAddress(selectedNetwork);
    }
  }, [userWalletAddresses]);

  return (
    <>
      <Head pageTitle="User Dashboard - Deposit Crypto" />
      <div className="w-full lg:w-[600px] mx-auto">
        <div className="flex flex-col gap-10 md:gap-10 pb-10 md:p-0 md:pb-20 ">
          <DepositWithdrawHeader
            title={`Deposit ${suppliedToken?.ticker}`}
            subtitle={`Only send ${suppliedToken?.network} assets to this address. Other
              assets will be lost forever`}
          />

          <div className="w-full flex flex-col gap-6 md:gap-6 bg-titusDashCardDarkBG rounded-lg p-8 lg:p-10">
            {/* <div className="p-2 bg-[#f7a5000a] flex gap-2 items-center rounded-md -mt-5">
            <div className="h-4 w-4 rounded-full bg-titusYellow text-black font-semibold flex items-center justify-center">
              <span>!</span>
            </div>
            <div className="text-[#fffb] text-xs ">
              Only send {suppliedToken?.network} assets to this address. Other
              assets will be lost forever
            </div>
          </div> */}
            <div className="flex items-center justify-center gap-2">
              <img
                src={
                  networks?.data?.filter(
                    (net) => net?.name == walletAddress?.network
                  )[0]?.logoURI
                }
                alt=""
                className="w-7 rounded-full"
              />
              <div className="font-semibold text-white">
                {suppliedToken?.ticker}
              </div>
              <div className="text-xs bg-titusDarkLightBG p-1 rounded-md">
                {suppliedToken?.network}
              </div>
            </div>

            <div className="">
              {walletAddress && (
                <div className="w-[90%] md:w-[50%] mx-auto p-3 lg:p-3 bg-white rounded-lg flex flex-col gap-5 flex-wrap">
                  <QRCode
                    size={256}
                    style={{
                      height: "auto",
                      maxWidth: "100%",
                      width: "100%",
                    }}
                    value={walletAddress?.address.toString()}
                    viewBox={`0 0 256 256`}
                  />
                  <div className="w-full text-sm text-black break-words text-center">
                    {walletAddress?.address}
                  </div>
                  {walletAddress?.memo ? (
                    <div className="w-full text-[13px] text-black break-words text-center">
                      {walletAddress?.memo}
                    </div>
                  ) : (
                    <div className="w-full text-xs text-black break-words text-center">
                      No memo required
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-5 md:gap-7">
              <div
                className="flex flex-col items-center gap-1 cursor-pointer"
                onClick={() =>
                  copyFunc(walletAddress?.address, "wallet address copied!")
                }
              >
                <div className="p-2 rounded-full bg-titusDarkLightBG">
                  <FaCopy className="cursor-pointer text-[15px] " />
                </div>
                <span className="text-[10px] lg:text-xs text-white">Copy</span>
              </div>

              <div className="flex flex-col items-center gap-1 cursor-pointer">
                <div className="p-2 rounded-full bg-titusDarkLightBG">
                  <FaShare className="cursor-pointer text-[15px] " />
                </div>
                <span className="text-[10px] lg:text-xs text-white">Share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositPage;
