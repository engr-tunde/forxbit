import React from "react";
import Head from "../../components/Head";
import { useBuySellContext } from "../../context/buySellContext";
import BuySellPageOne from "../../components/buy-sell/BuySellPageOne";
import FaqsWidget from "../../components/globals/FaqsWidget";
import { buySellFaqs } from "../../data/faqsData";

const BuySellPage = () => {
  const { page } = useBuySellContext;
  return (
    <>
      <Head pageTitle="Buy/Sell Cryptocurrencies" />
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-7 gap-10 md:gap-16 pt-[120px] md:pt-[120px] pb-[100px] md:pb-[150px]">
        <div className="col-span-1 md:col-span-4 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg ">
          {page === 1 ? (
            <BuySellPageOne />
          ) : page === 2 ? (
            <BuySellPageOne />
          ) : (
            <BuySellPageOne />
          )}
        </div>
        <div className="col-span-1 md:col-span-3">
          <FaqsWidget data={buySellFaqs} title="FAQs" moreUrl="/faqs" />
        </div>
      </div>
    </>
  );
};

export default BuySellPage;
