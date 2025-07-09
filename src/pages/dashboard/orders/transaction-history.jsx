import { useEffect, useState } from "react";
import Head from "../../../components/Head";
import GeneralOrdersHeader from "../../../components/dashboard/orders/GeneralOrdersHeader";
import TransactionHisBody from "../../../components/dashboard/orders/TransactionHisBody";
import { fetchUserTransactions } from "../../../api";

const TransactionHistoryPage = () => {
  const { transactions, transactionsLoading } = fetchUserTransactions();

  console.log("transactions", transactions);

  const [asset, setasset] = useState({});
  const [type, settype] = useState("");
  const [t_id, sett_id] = useState("");
  const [status, setstatus] = useState("");
  const [data, setdata] = useState();

  useEffect(() => {
    if (transactions) {
      const dt = transactions?.data;
      setdata(dt);
    }
  }, [transactions]);

  useEffect(() => {
    if (t_id.length) {
      let dt = data.filter((it) => it.t_id.includes(t_id));
      setdata(dt);
    }
  }, [t_id]);
  useEffect(() => {
    if (type.length) {
      let dt = data.filter((it) => it.type === type);
      setdata(dt);
    }
  }, [type]);
  useEffect(() => {
    if (Object.keys(status).length) {
      let dt = data.filter((it) => it.status === status);
      setdata(dt);
    }
  }, [status]);

  if (Object.keys(asset).length) {
    let dt = data.filter((it) => it.asset === asset.ticker);
    setdata(dt);
  }

  return (
    <>
      <Head pageTitle={`User Dashboard - Transaction History`} />
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
            title: "Transaction History",
            typeArr: ["Deposit", "Withdrawal"],
            statusArr: ["pending", "completed"],
            data,
          }}
        />
        <TransactionHisBody data={data} />
      </div>
    </>
  );
};

export default TransactionHistoryPage;
