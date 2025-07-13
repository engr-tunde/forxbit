import { FaArrowAltCircleRight, FaTimesCircle } from "react-icons/fa";
import { fetchCurrencies, updateUserSettings } from "../../../../api";
import Loader from "../../../globals/Loader";
import { errorNotification } from "../../../../utils/helpers";

const ChangeCurrency = ({
  showChangeCurrency,
  setshowChangeCurrency,
  mutate,
}) => {
  const { currencies, currenciesLoading } = fetchCurrencies();

  const handleUpdateCurrency = async (item) => {
    try {
      const response = await updateUserSettings({ currency: item });
      if (response.status === 200) {
        mutate();
        setshowChangeCurrency(false);
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  return (
    <div
      className={
        showChangeCurrency
          ? "fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-black/50"
          : "hidden"
      }
      style={{
        backdropFilter: showChangeCurrency ? "blur(5px)" : "",
      }}
    >
      <div className="w-[85%] mx-auto md:w-[500px]  bg-titusDashCardDarkBG p-5 md:p-7">
        <div className="flex justify-between items-center mb-5">
          <div className="text-white font-medium">Change App Currency</div>
          <div className="p-1 cursor-pointer hover:text-white ease-in duration-200">
            <FaTimesCircle
              onClick={() => setshowChangeCurrency(false)}
              className="text-xl"
            />
          </div>
        </div>
        <div className="h-[350px] md:h-[400px] overflow-y-scroll">
          {currencies &&
            currencies?.data?.map((item, i) => (
              <div
                className="p-3 py-4 border-b-titusLightBorder border-b-[0.4px] flex items-center justify-between cursor-pointer"
                key={i}
                onClick={() => handleUpdateCurrency(item)}
              >
                <div className="flex gap-5">
                  <img src={item?.icon} alt="" className="w-6 h-6" />
                  <span className="text-sm">{item?.name}</span>
                </div>
                <FaArrowAltCircleRight className="text-white" />
              </div>
            ))}
          {currenciesLoading ? <Loader /> : null}
        </div>
      </div>
    </div>
  );
};

export default ChangeCurrency;
