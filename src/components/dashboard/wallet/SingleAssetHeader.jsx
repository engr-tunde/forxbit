import { FaArrowCircleLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleAssetHeader = ({ name }) => {
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
      <div className="text-[18px] lg:text-xl text-titusYellowFaded font-semibold">
        {name}
      </div>
    </div>
  );
};

export default SingleAssetHeader;
