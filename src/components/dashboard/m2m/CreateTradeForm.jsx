import { useM2MContext } from "../../../context/m2mContext";
import CreateTradeForm1 from "./CreateTradeForm1";
import CreateTradeForm2 from "./CreateTradeForm2";
import CreateTradeForm3 from "./CreateTradeForm3";

const CreateTradeForm = () => {
  const { m2mCurrentStage } = useM2MContext();

  return (
    <div className="w-full bg-titusDashCardDarkBG px-5 pt-8 pb-10 md:p-7 rounded-xl flex flex-col gap-12 md:gap-10">
      {m2mCurrentStage === 1 ? (
        <CreateTradeForm1 />
      ) : m2mCurrentStage === 2 ? (
        <CreateTradeForm2 />
      ) : m2mCurrentStage === 3 ? (
        <CreateTradeForm3 />
      ) : null}
    </div>
  );
};

export default CreateTradeForm;
