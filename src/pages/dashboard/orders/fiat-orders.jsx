import React, { useState } from "react";
import Head from "../../../components/Head";
import DashboardSidebar from "../../../components/dashboard/DashboardSidebar";
import { fiatOrdersData } from "../../../data/orderData";
import GeneralOrdersHeader from "../../../components/dashboard/orders/GeneralOrdersHeader";
import FiatOrdersBody from "../../../components/dashboard/orders/FiatOrdersBody";

const FiatOrdersPage = () => {
  const [currency, setcurrency] = useState({});
  const [type, settype] = useState("");
  const [t_id, sett_id] = useState("");
  const [status, setstatus] = useState("");

  let data = fiatOrdersData;

  if (Object.keys(currency).length) {
    data = data.filter((it) => it.currency.ticker === currency.ticker);
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
      <Head pageTitle={`User Dashboard - Fiat Orders`} />
      <div className="flex flex-col gap-14">
        <GeneralOrdersHeader
          componentData={{
            currency,
            setcurrency,
            type,
            settype,
            status,
            setstatus,
            t_id,
            sett_id,
            title: "Fiat Orders",
            typeArr: ["Deposit", "Withdrawal"],
            data,
          }}
        />
        <FiatOrdersBody data={data} />
      </div>
    </>
  );
};

export default FiatOrdersPage;
