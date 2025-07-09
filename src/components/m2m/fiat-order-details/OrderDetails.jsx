import { FaBell, FaCheck, FaCopy } from "react-icons/fa";
import { copyFunc } from "../../../utils/helpers";
import OrderCreated from "./OrderCreated";
import OrderPaymentDetails from "./OrderPaymentDetails";
import NotifySeller from "./NotifySeller";

const OrderDetails = ({ orderData }) => {
  return (
    <>
      <h2 className="text-[16px] lg:text-[18px] font-medium text-white mb-0">
        {orderData.type == "Buy"
          ? "Order created, Pay the Seller within "
          : "You will receive payment within "}
        <span className="text-titusGreen">2 : 50</span>
      </h2>
      <div className="flex items-center gap-3 text-[12px] mb-10">
        <p className="flex gap-2 p-0 m-0">
          <span>Order number:</span>
          <span className="text-white font-medium">{orderData.order_no}</span>
        </p>
        <FaCopy
          onClick={() => copyFunc(orderData.order_no, "order number copied!")}
          className="cursor-pointer text-[15px]"
        />
      </div>

      <OrderCreated orderData={orderData} />

      <OrderPaymentDetails orderData={orderData} />

      <NotifySeller orderData={orderData} />
    </>
  );
};

export default OrderDetails;
