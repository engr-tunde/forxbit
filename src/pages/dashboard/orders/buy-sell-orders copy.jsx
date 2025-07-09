import React, { useState } from "react";
import Head from "../../../components/Head";
import DashboardSidebar from "../../../components/dashboard/DashboardSidebar";
import { buySellOrdersData } from "../../../data/orderData";
import BuySellOrdersBody from "../../../components/dashboard/orders/BuySellOrdersBody";
import GeneralOrdersHeader from "../../../components/dashboard/orders/GeneralOrdersHeader";

const BuySellOrdersPage = () => {
  const [asset, setasset] = useState({});
  const [type, settype] = useState("");
  const [t_id, sett_id] = useState("");
  const [status, setstatus] = useState("");

  let data = buySellOrdersData;

  if (Object.keys(asset).length) {
    data = data.filter((it) => it.token.ticker === asset.ticker);
  }
  if (type.length) {
    data = data.filter((it) => it.type === type);
  }
  if (Object.keys(status).length) {
    data = data.filter((it) => it.status === status);
  }
  if (t_id.length) {
    data = data.filter((it) => it.t_id.includes(t_id));
  }

  return (
    <>
      <Head pageTitle={`User Dashboard - Buy & Sell Orders`} />
      <div className="w-screen h-full relative">
        <div className="w-full h-full flex gap-0 md:gap-10 ">
          <div className=" bg-titusDarkGrey pt-24 pb-14 w-0 md:w-2/12 ps-0 md:ps-10">
            <DashboardSidebar />
          </div>
          <div className="bg-titusDarkBG w-full md:w-10/12 pt-24 pb-14 ps-5 md:ps-0 pe-5 md:pe-10 min-h-screen">
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
                  title: "Buy & Sell Orders",
                  typeArr: ["Buy", "Sell"],
                  statusArr: ["pending", "completed"],
                  data,
                }}
              />
              <BuySellOrdersBody data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuySellOrdersPage;
