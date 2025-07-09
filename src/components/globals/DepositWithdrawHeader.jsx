import { useNavigate } from "react-router-dom";

const DepositWithdrawHeader = ({ title, subtitle }) => {
  const history = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="text-xl text-white font-semibold">{title}</div>
        <div
          onClick={() => history(-1)}
          className="py-1 px-5 bg-titusChatBg text-titusYellow text-sm cursor-pointer font-medium duration-200 ease-in rounded-md hover:opacity-50"
        >
          Go back
        </div>
      </div>
      <div className="text-sm">{subtitle}</div>
    </div>
  );
};

export default DepositWithdrawHeader;
