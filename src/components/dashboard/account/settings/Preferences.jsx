import { useState } from "react";
import { errorNotification } from "../../../../utils/helpers";
import ChangeCurrency from "./ChangeCurrency";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Preferences = ({ settings, mutate }) => {
  const [showChangeCurrency, setshowChangeCurrency] = useState(false);

  return (
    <>
      <div className="bg-titusDashCardDarkItemBG p-5 md:p-8 border-[1px] border-titusLightBorder rounded-lg flex flex-col gap-7">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-white">Currency</div>
            <div className="text-sm">{settings?.currency?.ticker}</div>
          </div>
          <FaArrowAltCircleRight
            className="text-white text-xl cursor-pointer hover:scale-150 duration-200 ease-in hover:text-titusGreen pl-3 w-max"
            onClick={() => setshowChangeCurrency(true)}
          />
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex flex-col">
            <div className="text-white">Language</div>
            <div className="text-sm">English</div>
          </div>
          <FaArrowAltCircleRight
            className="text-white text-xl cursor-pointer hover:scale-150 duration-200 ease-in hover:text-titusGreen pl-3 w-max"
            onClick={() =>
              errorNotification("You cannot change app language for now")
            }
          />
        </div>
      </div>
      <ChangeCurrency
        showChangeCurrency={showChangeCurrency}
        setshowChangeCurrency={setshowChangeCurrency}
        mutate={mutate}
      />
    </>
  );
};

export default Preferences;
