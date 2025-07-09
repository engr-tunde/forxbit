import Head from "../../../components/Head";
import GeneralOrdersHeader from "../../../components/dashboard/orders/GeneralOrdersHeader";
import { useEffect, useState } from "react";
import M2MTradesBody from "../../../components/dashboard/m2m/M2MTradesBody";
import { userM2MPosts } from "../../../api";
import Loader from "./../../../components/globals/Loader";

const MyM2MTradesPage = () => {
  const [asset, setasset] = useState({});
  const [type, settype] = useState("");
  const [t_id, sett_id] = useState("");
  const [status, setstatus] = useState("");
  const [reset, setreset] = useState(false);

  const { m2mPosts, m2mPostsLoading, m2mPostsError } = userM2MPosts();

  const [data, setdata] = useState();

  useEffect(() => {
    if (m2mPosts) {
      setdata(m2mPosts?.data);
    }
  }, [m2mPosts]);

  useEffect(() => {
    console.log("Object.keys(asset).length", Object.keys(asset).length);
    if (Object.keys(asset).length > 1) {
      let newData = m2mPosts?.data?.filter(
        (it) => it.order.token.symbol === asset.symbol
      );
      console.log("newData", newData);
      setdata(newData);
    } else {
      setdata(m2mPosts?.data);
    }
    if (type.length) {
      let newData = data.filter((it) => it.order.type === type);
      setdata(newData);
    }
    if (status.length) {
      let newData = data.filter((it) => it.status === status);
      setdata(newData);
    }
    if (t_id.length) {
      let newData = data.filter((it) => it.t_id.includes(t_id));
      setdata(newData);
    }
    // if (reset) {
    //   setdata(m2mPosts?.data);
    // }
  }, [asset, type, status, t_id]);

  console.log("data", data);

  return (
    <>
      <Head pageTitle="User Dashboard - My Trades" />
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
            title: `My ${import.meta.env.VITE_P2P_NAME}`,
            typeArr: ["Buy", "Sell"],
            statusArr: ["Open", "Close"],
            data,
            setreset,
          }}
        />
        {data && <M2MTradesBody data={data} />}
        {m2mPostsLoading && <Loader size={30} color="00dbc2" />}
      </div>
    </>
  );
};

export default MyM2MTradesPage;
