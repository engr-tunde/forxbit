import React, { useEffect } from "react";
import Head from "../../components/Head";
import MarketsSectionOne from "../../components/markets/MarketsSectionOne";

const MarketsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Cyrpto Markets" />
      <MarketsSectionOne />
    </>
  );
};

export default MarketsPage;
