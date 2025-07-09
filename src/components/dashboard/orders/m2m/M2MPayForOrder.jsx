import { FaBell, FaCoins } from "react-icons/fa";
import { cancelM2MOrder } from "../../../../api";
import { successNotification } from "../../../../utils/helpers";
import { useNavigate } from "react-router-dom";

const M2MPayForOrder = ({ orderData }) => {
  const history = useNavigate();
  const handleCancelOrder = async () => {
    const response = await cancelM2MOrder(
      orderData.order_no,
      orderData.trade_id
    );
    console.log("response", response);
    if (response.status === 200) {
      successNotification(response.data.message);
      setTimeout(
        () =>
          history(
            `/dashboard/orders/m2m/order-details/${response.data.order_no}`
          ),
        1500
      );
    } else {
      errorNotification(response?.data?.error);
    }
  };

  return (
    <div className="w-full flex gap-5">
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 flex items-center justify-center bg-[#bbb] text-[#222] p-0 m-0 text-[11px] font-bold">
          3
        </div>
        <div className="h-full w-[2px] bg-[#bbb]"></div>
      </div>

      <div className="w-full flex flex-col">
        <p className="text-sm lg:text-md font-medium text-white mb-3">
          {orderData?.order?.type == "Buy"
            ? "Payment Settlement"
            : "Release asset"}
        </p>
        <div className="text-[12px] font-medium leading-5 mb-5 md:mb-7">
          {orderData?.order?.type == "Buy" ? (
            orderData?.status === "Processing" ? (
              <div>
                Following a succesful creation of your Buy order, what is next
                is for you to pay the seller in order to complete the trade.
                Click the{" "}
                <span className="font-semibold text-titusYellow">
                  Pay Seller
                </span>{" "}
                button below
              </div>
            ) : orderData?.status === "Paid" ? (
              <div>
                Payment has been successfully made. Order is now completed.
              </div>
            ) : null
          ) : orderData?.status === "Processing" ? (
            <div>
              Following a succesful creation of order by your trade partner,
              kindly wait while the system verifies payment from the user. If
              the payment is not made within 30 minutes, the order will be
              closed.
            </div>
          ) : orderData?.status === "Paid" ? (
            <div>
              Payment has been successfully made by the buyer and the order is
              now completed.
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          {orderData?.order?.type == "Buy" ? (
            <div className="flex btnn1 py-[6px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300 cursor-pointer">
              <span className="mr-1">Pay Seller!</span>
              <span>
                <FaBell className="text-black" />
              </span>
            </div>
          ) : null}

          {orderData.status === "Processing" ? (
            <div
              onClick={handleCancelOrder}
              className="flex btnn-yellow py-[6px] px-4 text-[12px] font-medium justify-center items-center ease-in duration-300 cursor-pointer"
            >
              Cancel Order
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default M2MPayForOrder;
