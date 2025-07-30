import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleAssetHeader = ({ suppliedAsset }) => {
  const history = useNavigate();
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <div
        onClick={() => history(-1)}
        className="p-2 bg-titusChatBg  text-[18px] cursor-pointer font-medium duration-200 ease-in rounded-md hover:opacity-50"
      >
        <FaArrowCircleLeft />
      </div>
      <div className="text-[18px] lg:text-xl text-white font-semibold">
        Wallet
      </div>
      <div className=" text-[14px] cursor-pointer font-medium duration-200 ease-in rounded-md hover:opacity-50">
        <FaArrowRight />
      </div>
      <div className="bg-titusDashCardDarkBG w-max p-2 rounded-md flex items-end gap-3">
        <img src={suppliedAsset?.logoURI} alt="" className="w-5 rounded-full" />
        <div className="text-white">{suppliedAsset?.name}</div>
        <div className="text-sm">{suppliedAsset?.ticker}</div>
      </div>

      {/* <div className="text-[18px] lg:text-xl text-titusYellowFaded font-semibold">
        {name}
      </div> */}
    </div>
  );
};

export default SingleAssetHeader;
