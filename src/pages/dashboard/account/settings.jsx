import { useEffect } from "react";
import axios from "axios";
import Head from "../../../components/Head";
import DashAccountHeader from "../../../components/dashboard/account/DashAccountHeader";
import TwoFACard from "../../../components/dashboard/account/settings/2FACard";
import CardOuterSectionTitle from "../../../components/globals/CardOuterSectionTitle";
import NotificationsCard from "../../../components/dashboard/account/settings/NotificationsCard";
import AccountPanel from "../../../components/dashboard/account/settings/AccountPanel";
import Preferences from "../../../components/dashboard/account/settings/Preferences";
import { userSettings } from "../../../api";
import Loader from "../../../components/globals/Loader";
axios.defaults.withCredentials = true;

const SettingsPage = () => {
  const { settings, settingsLoading, mutate } = userSettings();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Head pageTitle="Dashboard - Settings" />
      <>
        {settings && (
          <div className="bg-titusDashCardDarkBG rounded-lg flex flex-col gap-1">
            <div className="border-b-[1px] border-b-titusLightBorder">
              <DashAccountHeader />
            </div>
            <div className="mt-7 md:mt-7 px-5 md:px-10 flex flex-col gap-3">
              <CardOuterSectionTitle title="Preferences" />
              <Preferences settings={settings?.data} mutate={mutate} />
            </div>

            <div className="mt-7 md:mt-7 px-5 md:px-10 flex flex-col gap-3">
              <CardOuterSectionTitle title="2 Factor Authentication" />
              <TwoFACard settings={settings?.data} mutate={mutate} />
            </div>

            <div className="mt-8 md:mt-8 px-5 md:px-10 flex flex-col gap-3">
              <CardOuterSectionTitle title="App Notifications" />
              <NotificationsCard settings={settings?.data} mutate={mutate} />
            </div>

            <div className="mt-8 md:mt-8 mb-10 px-5 md:px-10 flex flex-col gap-3">
              <CardOuterSectionTitle title="Account Control" />
              <AccountPanel settings={settings?.data} mutate={mutate} />
            </div>
          </div>
        )}
        {settingsLoading && <Loader size={30} />}
      </>
    </>
  );
};

export default SettingsPage;
