import { useEffect } from "react";
import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import SingleAssetHeader from "../../../components/dashboard/wallet/SingleAssetHeader";

const SingleAssetPage = () => {
  const location = useLocation();
  const history = useNavigate();
  const suppliedAsset = location.state?.suppliedAsset;

  console.log("suppliedAsset", suppliedAsset);

  const handleCryptoDepoLink = () => {
    history(`/dashboard/deposit-crypto`, {
      state: {
        suppliedToken: {
          network: suppliedAsset?.network,
          ticker: suppliedAsset?.ticker,
          name: suppliedAsset?.name,
          logoURI: suppliedAsset?.logoURI,
        },
      },
    });
  };
  const handleCryptoWithdrLink = () => {
    history(`/dashboard/withdraw-crypto`, {
      state: { suppliedAsset: suppliedAsset?.ticker },
    });
  };

  //   useEffect(() => {
  //     if (!suppliedAsset) {
  //       history(-1);
  //     }
  //   }, [suppliedAsset]);

  return (
    <div className="md:px-10 py-10 md:py-5">
      <div className="flex flex-col gap-10">
        <SingleAssetHeader name={suppliedAsset?.name} />

        <div className="grid grid-cols-1 md:grid-cols-7 gap-10">
          <div className="col-span-1 md:col-span-4">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-5">
                <div className="bg-titusDashCardDarkBG w-max p-2 rounded-md flex items-end gap-3">
                  <img
                    src={suppliedAsset?.logoURI}
                    alt=""
                    className="w-5 rounded-full"
                  />
                  <div className="text-white">{suppliedAsset?.name}</div>
                  <div className="text-sm">{suppliedAsset?.ticker}</div>
                </div>

                <div className="font-semibold md:font-bold text-white">
                  {suppliedAsset?.balance}
                </div>
              </div>

              <div className="w-full bg-titusDashCardDarkBG p-20 rounded-lg border-[1px] border-[#ffffff1a] text-center">
                Live chart here
              </div>
              <div className="w-full bg-titusDashCardDarkBG p-3 rounded-lg">
                <div className="flex flex-col gap-5">
                  <div className="uppercase text-white">About Coin</div>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam odit nulla autem delectus quibusdam, obcaecati,
                    nostrum, quasi voluptates ex magni iusto. Officiis ducimus
                    nemo repellendus vitae fugiat repellat nesciunt. Maiores
                    cupiditate eaque esse repellendus debitis sapiente officia
                    minima ipsa pariatur!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3">
            <div className="flex flex-col gap-5">
              <div className="flex justify-between md:justify-end md:gap-7">
                <div
                  onClick={handleCryptoDepoLink}
                  className="py-2 px-4 flex items-center gap-2 bg-titusYellow hover:bg-titusYellowFaded ease-in duration-200 cursor-pointer text-black rounded-md"
                >
                  <img
                    src="/assets/images/wallet/Deposit-01.svg"
                    alt=""
                    className="w-4"
                  />
                  <span className="text-sm font-semibold">Deposit Coin</span>
                </div>
                <div
                  onClick={handleCryptoWithdrLink}
                  className="py-2 px-4 flex items-center gap-2 bg-titusYellow hover:bg-titusYellowFaded ease-in duration-200 cursor-pointer text-black rounded-md"
                >
                  <img
                    src="/assets/images/wallet/Withdraw-01.svg"
                    alt=""
                    className="w-4"
                  />
                  <span className="text-sm font-semibold">Withdraw Coin</span>
                </div>
              </div>

              <div className="w-full bg-titusDashCardDarkBG p-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssetPage;
