import { FaArrowCircleDown } from "react-icons/fa";
import { useM2MContext } from "../../../../context/m2mContext";

const CreateTradeSelectAsset = ({
  tokens,
  showAssetList,
  setshowAssetList,
}) => {
  const { m2mAsset, setm2mAsset, m2mTradeType } = useM2MContext();

  const handleSelectAsset = (item) => {
    console.log("item 1", item);
    setm2mAsset(item);
    setshowAssetList(false);
  };

  return (
    <div className="relative w-full md:w-[45%]">
      <div className="flex flex-col gap-2">
        <div className="text-white text-sm md:text-md">
          {m2mTradeType === "buy" ? "Asset to buy" : "Asset to sell"}
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
            ? "w-full absolute px-2 py-5 border-titusLightBorder flex flex-col gap-1 left-0 top-[90px] rounded-lg bg-titusDarkGrey"
            : "hidden"
        }
        onMouseLeave={() => setshowAssetList(false)}
      >
        {tokens?.map((item, i) => {
          // console.log("item", item);
          return (
            <div
              className="flex gap-4 hover:bg-[#ffffff1a] hover:text-black p-2 cursor-pointer"
              key={i}
              onClick={() => handleSelectAsset(item)}
            >
              <img src={item.logoURI} alt="" className="w-[20px]" />
              <div className="text-white text-sm font-medium">
                {item.symbol}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreateTradeSelectAsset;
