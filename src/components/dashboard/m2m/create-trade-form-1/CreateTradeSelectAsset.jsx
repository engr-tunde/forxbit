import { FaArrowCircleDown } from "react-icons/fa";
import { useM2MContext } from "../../../../context/m2mContext";
import { fetchUserTokenNetworks } from "./../../../../api";

const CreateTradeSelectAsset = ({
  tokens,
  showAssetList,
  setshowAssetList,
}) => {
  const { m2mAsset, setm2mAsset, m2mTradeType } = useM2MContext();
  const { networks } = fetchUserTokenNetworks();

  const handleSelectAsset = (item) => {
    console.log("item 1", item);
    setm2mAsset(item);
    setshowAssetList(false);
  };

  // console.log("tokens", tokens);

  return (
    <div className="relative w-full md:w-[45%]">
      <div className="flex flex-col gap-2">
        <div className="text-white text-sm md:text-md">
          {m2mTradeType === "Buy" ? "Asset to buy" : "Asset to sell"}
        </div>
        <div
          className="w-full flex items-center justify-between border-[1px] border-titusLightBorder hover:border-titusGreenFaded rounded-lg p-3"
          onMouseEnter={() => {
            setshowAssetList(true);
          }}
          onClick={() => {
            setshowAssetList(!showAssetList);
          }}
        >
          <div className="flex items-center gap-2">
            <img
              src={m2mAsset?.logoURI}
              alt=""
              className="w-[15px] lg:w-[20px]"
            />
            <div className="text-white text-sm font-medium">
              {m2mAsset?.symbol}
            </div>
          </div>
          <FaArrowCircleDown className="" />
        </div>
      </div>

      <div
        className={
          showAssetList
            ? "w-full absolute px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-[90px] rounded-lg bg-titusDarkGrey max-h-[30vh] overflow-y-scroll z-50"
            : "hidden"
        }
        onMouseLeave={() => setshowAssetList(false)}
      >
        {tokens?.map((item, i) => {
          return (
            // <div
            //   className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
            //   key={i}
            //   onClick={() => handleSelectAsset(item)}
            // >
            //   <img src={item.logoURI} alt="" className="w-[20px]" />
            //   <div className="text-white text-sm font-medium">
            //     {item.ticker}
            //   </div>
            // </div>
            <div
              key={i}
              onClick={() => handleSelectAsset(item)}
              className="flex items-center justify-between pe-3"
            >
              <div className="flex items-center gap-4 px-0 py-3">
                <div className="relative">
                  <img
                    alt=""
                    src={item.logoURI}
                    className="md:hidden xl:block w-6 h-6 rounded-full object-cover"
                  />
                  {item.network && (
                    <img
                      alt=""
                      src={
                        networks?.data.filter(
                          (net) => net.name == item.network
                        )[0]?.logoURI
                      }
                      width={15}
                      height={15}
                      className="absolute bottom-0 -right-1 w-[14px] h-[14px] rounded-full object-cover"
                    />
                  )}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-white text-[12px] md:text-sm">
                    {item.ticker}
                  </h3>
                  <div className="text-[11px] md:text-sm ">{item.name}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateTradeSelectAsset;
