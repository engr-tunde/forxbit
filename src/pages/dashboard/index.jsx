import Head from "../../components/Head";
import axios from "axios";
import DashboardOverview from "../../components/dashboard/DashboardOverview";
import DashMarkets from "../../components/dashboard/DashMarkets";
import DashRecentTransactions from "../../components/dashboard/DashRecentTransactions";
import { useEffect, useState } from "react";
import { updateUserSettings, userSettings } from "../../api";
import { errorNotification } from "../../utils/helpers";
axios.defaults.withCredentials = true;

const DashboardPage = () => {
  const [hideAssets, sethideAssets] = useState(false);
  const { settings, mutate } = userSettings();

  const handleToggleHideAsset = async () => {
    try {
      const response = await updateUserSettings({
        hide_assets: !settings?.data?.hide_assets,
      });
      if (response.status === 200) {
        mutate();
        sethideAssets(!hideAssets);
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    if (settings) {
      if (settings?.data?.hide_assets) {
        sethideAssets(true);
      } else {
        sethideAssets(false);
      }
    }
  }, [settings]);

  return (
    <>
      <Head pageTitle="User Dashboard" />
      <DashboardOverview
        handleToggleHideAsset={handleToggleHideAsset}
        hideAssets={hideAssets}
        settings={settings}
      />
      <DashMarkets />
      <DashRecentTransactions />
    </>
  );
};

export default DashboardPage;
