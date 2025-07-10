import Head from "../../components/Head";
import SwapPageBody from "../../components/swap/SwapPageBody";
import { useEffect } from "react";

const SwapPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Swap Cryptocurrencies" />
      <div className="col-span-1 md:col-span-3">
        <SwapPageBody />
      </div>
    </>
  );
};

export default SwapPage;
