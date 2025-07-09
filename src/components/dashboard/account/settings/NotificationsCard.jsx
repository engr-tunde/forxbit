import Switch from "../../../globals/Switch";
import { updateUserSettings } from "../../../../api";
import {
  errorNotification,
  successNotification,
} from "../../../../utils/helpers";

const NotificationsCard = ({ settings, mutate }) => {
  const handleEnablePushNot = async () => {
    try {
      const response = await updateUserSettings({
        push_notification: !settings?.push_notification,
      });
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
        mutate();
        setshowChangeCurrency(false);
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  const handleEnableSMSPush = async () => {
    errorNotification("You cannot alter this settings at this time.");
  };

  const handleEnableNewsLetterNot = async () => {
    try {
      const response = await updateUserSettings({
        newsletter: !settings?.newsletter,
      });
      if (response.status === 200) {
        const data = response.data;
        successNotification(data.message);
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
    <div className="bg-titusDashCardDarkItemBG p-5 md:p-8 border-[1px] border-titusLightBorder rounded-lg flex flex-col gap-7">
      <Switch
        title="Enable Push Notification"
        func={handleEnablePushNot}
        enable={settings.push_notification}
      />

      <Switch
        title="SMS Notifications"
        func={handleEnableSMSPush}
        enable={settings.sms_notification}
      />

      <Switch
        title="Weekly Newsletter"
        func={handleEnableNewsLetterNot}
        enable={settings.newsletter}
        opacity={true}
      />
    </div>
  );
};

export default NotificationsCard;
