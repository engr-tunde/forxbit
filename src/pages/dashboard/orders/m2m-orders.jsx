import { useEffect, useState } from "react";
import Head from "../../../components/Head";
import M2MOrdersHeader from "../../../components/dashboard/orders/M2MOrdersHeader";
import M2MOrdersBody from "../../../components/dashboard/orders/M2MOrdersBody";
import { userM2MOrders } from "../../../api";

const M2MOrdersPage = () => {
  const [orderState, setorderState] = useState("processing");
  const [paymentStatus, setpaymentStatus] = useState("All");
  const [asset, setasset] = useState({});
  const [currency, setcurrency] = useState({});
  const [type, settype] = useState("");
  const [ordernumber, setordernumber] = useState("");

  const { m2mOrders, m2mOrdersLoading, m2mOrdersError } = userM2MOrders();

  console.log("m2mOrders", m2mOrders);

  const [data, setdata] = useState();

  useEffect(() => {
    if (m2mOrders) {
      let newData = m2mOrders?.data;
      setdata(newData);
    }
  }, [m2mOrders]);

  useEffect(() => {
    if (data) {
      let newData2 = data?.filter((it) => {
        let dd;
        if (orderState == "processing") {
          dd = it?.status.toLowerCase() === "processing";
          if (paymentStatus != "All") {
            dd =
              it?.payment_status.toLowerCase() ===
                paymentStatus.toLowerCase() &&
              it?.status.toLowerCase() === "processing";
          }
        } else {
          dd = it?.status.toLowerCase() !== "processing";
          if (paymentStatus == "completed") {
            dd = it?.status.toLowerCase() === "completed";
          } else if (paymentStatus == "cancelled") {
            dd = it?.status.toLowerCase() === "cancelled";
          }
        }
        return dd;
      });
      setdata(newData2);
    }
  }, [orderState, paymentStatus]);

  // if (Object.keys(asset).length) {
  //   data = data.filter((it) => it?.order?.token?.symbol === asset.symbol);
  // }
  // if (Object.keys(currency).length) {
  //   data = data?.filter(
  //     (it) => it?.order?.currency?.ticker === currency?.ticker
  //   );
  // }
  // if (type.length) {
  //   data = data?.filter((it) => it.type === type);
  // }
  // if (ordernumber.length) {
  //   data = data?.filter((it) => it.order_no.includes(ordernumber));
  // }

  console.log("data", data);

  return (
    <>
      <Head pageTitle="User Dashboard - M2M Orders" />
      <div className="flex flex-col gap-14">
        <M2MOrdersHeader
          componentData={{
            orderState,
            setorderState,
            paymentStatus,
            setpaymentStatus,

            asset,
            setasset,
            currency,
            setcurrency,
            type,
            settype,
            ordernumber,
            setordernumber,
            data,
          }}
        />
        <M2MOrdersBody data={data} />
      </div>
    </>
  );
};

export default M2MOrdersPage;
