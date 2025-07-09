import { AiFillLike } from "react-icons/ai";
import { MdTimer } from "react-icons/md";
import { errorNotification, formatter } from "../../utils/helpers";
import { checkSession, userProfile, userProfileForTrade } from "../../api";
import { useNavigate } from "react-router-dom";

const OpenAds = ({
  data,
  setShowStartTrade,
  selectedTrade,
  setSelectedTrade,
}) => {
  const { session } = checkSession();
  const history = useNavigate();
  const { userForTrade } = userProfileForTrade();

  const handleStartTrade = (item) => {
    if (session) {
      if (
        userForTrade?.data?.username.toLowerCase() ===
        item?.user?.username.toLowerCase()
      ) {
        errorNotification(
          `You cannot ${item.order.type} ${item.order.token.symbol} from yourself. Trade with another user`
        );
      } else {
        setShowStartTrade(true);
        setSelectedTrade(item);
      }
    } else {
      errorNotification("Kindly login first");
      setTimeout(() => history("/login"), 2500);
    }
  };

  return (
    <div className="w-full flex flex-col gap-7 lg:gap-5">
      <div className="hidden w-full lg:grid lg:grid-cols-11  h-max pb-0 text-[12px]">
        <div className="col-span-3">
          <p className="">Advertisers</p>
        </div>
        <div className="col-span-2">
          <p className="m-0 p-0">Price</p>
        </div>
        <div className="col-span-2">
          <p className="m-0 p-0">Available/Order Limit</p>
        </div>
        <div className="col-span-2">
          <p className="m-0 p-0">Payment</p>
        </div>
        <div className="col-span-2">
          <p className="m-0 p-0 text-end">Trade</p>
        </div>
      </div>

      {data?.map((item, i) => (
        <div className="flex flex-col" key={i}>
          <div className="w-full grid grid-cols-2 lg:grid-cols-11 border-b-[#ffffff27] border-b-[0.1px] pb-7 lg:pb-5 gap-y-0">
            <div className="col-span-2 lg:col-span-3 flex gap-2">
              <div className="h-[20px] w-[20px] bg-white text-black rounded-md flex items-center justify-center">
                {item.user.username.charAt(0)}
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm m-0 p-0 text-white">
                  {item.user.username}
                </p>
                <div className="flex items-center gap-2 text-[12px]">
                  <span className="">{item.user.orders} orders</span>
                  <div className="w-[1px] h-[65%] bg-[#ffffff27]"></div>
                  <span className="">
                    {item.user.completion_rate}% completion
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[12px]">
                  <div className="flex items-center gap-1">
                    <AiFillLike />
                    <span className="">{item.user.rating}%</span>
                  </div>
                  <div className="w-[1px] h-[65%] bg-[#ffffff27]"></div>
                  <span className="flex items-center gap-1">
                    <MdTimer />
                    <span className="">{item.order.completion_window} min</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-2 text-white">
              <p className="text-lg font-semibold">
                {formatter(item.order.price).slice(1, 20)}{" "}
                <span className="text-sm font-medium">
                  {item.order.currency.ticker}
                </span>
              </p>
            </div>
            <div className="col-span-2 lg:col-span-2 flex flex-col gap-1">
              <span className="text-sm text-[#ffffffc4]">
                {item.order.token_amount} {item.order.token.symbol}
              </span>
              <span className="text-[13px] text-white">
                <span className="lg:hidden">Order Limit: </span>
                {`${item.order.min_limit} ${item.order.currency.ticker} - ${item.order.max_limit} ${item.order.currency.ticker}`}
              </span>
            </div>
            <div className="col-span-1 lg:col-span-2 flex flex-col gap-2 justify-end lg:justify-start">
              {item.order.payment_methods.map((pay, i) => (
                <div
                  className={
                    pay === "Bank Transfer"
                      ? "border-l-[3px] h-4  border-l-yellow-500 text-[12px] text-white pl-1 m-0"
                      : pay === "Interbank"
                      ? "border-l-[3px] h-4  border-l-red-500 text-[12px] text-white pl-1 m-0"
                      : "border-l-[3px] h-4  border-l-blue-500 text-[12px] text-white pl-1 m-0"
                  }
                  key={i}
                >
                  {pay}
                </div>
              ))}
            </div>

            <div className="col-span-1 lg:col-span-2 flex justify-end gap-2">
              <div
                onClick={() => handleStartTrade(item)}
                className={
                  item.order.type === "Sell"
                    ? "bg-green-400 hover:bg-green-700 duration-300 ease-in font-medium text-sm py-2 w-[130px] text-center h-max text-black rounded-md cursor-pointer"
                    : "bg-red-400 hover:bg-red-700 duration-300 ease-in font-medium text-sm py-2 w-[130px] text-center h-max text-black rounded-md cursor-pointer"
                }
              >
                {item.order.type === "Sell"
                  ? `Buy ${item.order.token.symbol}`
                  : `Sell ${item.order.token.symbol}`}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OpenAds;
