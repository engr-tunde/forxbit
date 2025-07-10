import NavBar from "../components/globals/NavBar";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Head from "../components/Head";
import FaqsWidget from "../components/globals/FaqsWidget";
import { buySellFaqs, swapFaqs } from "../data/faqsData";

const BuySellLayout = () => {
  let location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <Head pageTitle="Buy/Sell Cryptocurrencies" />
      <NavBar />
      <div className="">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-20 md:gap-16 pt-[120px] md:pt-[120px] pb-[100px] md:pb-[150px] px-5 md:px-0">
          <Outlet />
          <div className="col-span-1 md:col-span-2 px-5 md:px-0">
            <FaqsWidget
              data={pathname.includes("/swap") ? swapFaqs : buySellFaqs}
              title="FAQs"
              moreUrl="/faqs"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuySellLayout;
