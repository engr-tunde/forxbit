import Head from "../../../components/Head";
import {
  orderData,
  tradeChat,
  tradeSystemMessage,
  userData,
} from "../../../utils/data";
import HowP2PWorks from "../../../components/m2m/HowP2PWorks";
import OrderDetails from "../../../components/m2m/fiat-order-details/OrderDetails";
import TradeChat from "../../../components/m2m/fiat-order-details/TradeChat";

const FiatOrderDetailsPage = () => {
  return (
    <>
      <Head pageTitle={`Buy and Sell with your Preferred Traders`} />
      <div className="w-full pt-20 lg:pt-20 bg-titusDarkBG px-6 lg:px-0">
        <div className="container-order py-10 lg:py-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-x-[90px] gap-y-20 mb-20 lg:mb-32">
            <div className="col-span-1 lg:col-span-4">
              <OrderDetails orderData={orderData} />
            </div>
            <div className="col-span-1 lg:col-span-3">
              <TradeChat
                orderData={orderData}
                headerMessage="ATTENTION! DO NOT release crypto before confirming the money has been received and shows on the available balance"
                systemMessages={tradeSystemMessage}
                currentUser={userData}
                tradeChat={tradeChat}
              />
            </div>
          </div>
          <HowP2PWorks />
        </div>
      </div>
    </>
  );
};

export default FiatOrderDetailsPage;
