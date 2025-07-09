import { useParams } from "react-router-dom";
import { fetchSingleM2MOrder } from "../../../api";
import M2MOrderDetails from "../../../components/dashboard/orders/m2m/M2MOrderDetails";
import Head from "../../../components/Head";

const M2MOrderDetailsPage = () => {
  let { order_no } = useParams();
  console.log("order_no", order_no);
  const { order, orderLoading, orderError } = fetchSingleM2MOrder(order_no);
  console.log("order", order);

  return (
    <>
      <Head pageTitle="User Dashboard - M2M Order Details" />
      <div className="w-full max-w-[800px] mx-auto flex flex-col gap-0 mb-10 md:mb-10">
        {order ? <M2MOrderDetails orderData={order?.data} /> : null}
      </div>
    </>
  );
};

export default M2MOrderDetailsPage;
