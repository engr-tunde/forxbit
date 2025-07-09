import Switch from "../../../globals/Switch";
import FlexButton from "../../../globals/FlexButton";
import { errorNotification } from "../../../../utils/helpers";

const TwoFACard = ({ settings }) => {
  const handleEnable2FA = () => {
    errorNotification("You cannot alter this settings at this time");
  };

  const handleReset2FA = () => {
    errorNotification("You cannot reset 2FA for now");
  };

  return (
    <div className="bg-titusDashCardDarkItemBG p-5 md:p-8 border-[1px] border-titusLightBorder rounded-lg flex flex-col gap-7">
      <Switch
        title="Enable 2FA"
        func={handleEnable2FA}
        enable={settings.enable_2fa}
        opacity={true}
      />
      <FlexButton
        title="Reset 2FA"
        btnTitle="Reset 2FA"
        func={handleReset2FA}
        opacity={true}
      />
    </div>
  );
};

export default TwoFACard;
