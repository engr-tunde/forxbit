import React, { useState } from "react";
import Head from "../../../components/Head";
import DashboardSidebar from "../../../components/dashboard/DashboardSidebar";
import { swapOrdersData } from "../../../data/orderData";
import GeneralOrdersHeader from "../../../components/dashboard/orders/GeneralOrdersHeader";
import SwapOrdersBody from "../../../components/dashboard/orders/SwapOrdersBody";

const SwapOrdersPage = () => {
  const [asset, setasset] = useState({});
  const [type, settype] = useState(null);
  const [t_id, sett_id] = useState("");
  const [status, setstatus] = useState("");

  let data = swapOrdersData;

  if (Object.keys(asset).length) {
    data = data.filter(
      (it) => it.from.ticker === asset.ticker || it.to.ticker === asset.ticker
    );
  }
  if (Object.keys(status).length) {
    data = data.filter((it) => it.status === status);
  }
  if (t_id.length) {
    data = swapOrdersData.filter((it) => it.t_id.includes(t_id));
  }

  return (
    <>
      <Head pageTitle={`User Dashboard - Swap Orders`} />
      <div className="flex flex-col gap-14">
        <GeneralOrdersHeader
          componentData={{
            asset,
            setasset,
            type,
            settype,
            status,
            setstatus,
            t_id,
            sett_id,
            title: "Swap Orders",
            statusArr: ["pending", "completed"],
            data,
          }}
        />
        <SwapOrdersBody data={data} />
      </div>
    </>
  );
};

export default SwapOrdersPage;
