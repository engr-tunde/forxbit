import { useEffect } from "react";
import { useBuySellContext } from "../../context/buySellContext";
import BuySellPageOne from "../../components/buy-sell/BuySellPageOne";
import BuySellPageTwo from "../../components/buy-sell/BuySellPageTwo";

const BuySellPage = () => {
  const { page } = useBuySellContext();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="col-span-1 md:col-span-3 p-5 md:p-10 md:pb-20 bg-titusDashCardDarkBG rounded-lg border-[1px] border-titusLightBorder">
      {page === 1 ? (
        <BuySellPageOne />
      ) : page === 2 ? (
        <BuySellPageTwo />
      ) : (
        // <div className="">page 2</div>
        // <BuySellPageOne />
        <div className="">page 3</div>
      )}
    </div>
  );
};

export default BuySellPage;
