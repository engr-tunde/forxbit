import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DepositWithdrawHeader = ({ title, subtitle, clearFunc = null }) => {
  const history = useNavigate();
  const handleClick = () => {
    history(-1);
    clearFunc();
  };
  return (
    <div className="flex flex-col gap-2 lg:gap-2">
      <div className="flex items-center gap-2">
        <div
          onClick={handleClick}
          className="p-2 bg-titusChatBg text-titusYellow text-[18px] cursor-pointer font-medium duration-200 ease-in rounded-md hover:opacity-50"
        >
          <FaArrowCircleLeft />
        </div>
        <div className="text-[18px] lg:text-xl text-white font-semibold">
          {title}
        </div>
      </div>
      <div className="text-sm lg:text-sm">{subtitle}</div>
    </div>
  );
};

export default DepositWithdrawHeader;
