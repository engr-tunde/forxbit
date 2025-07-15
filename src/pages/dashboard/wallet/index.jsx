import axios from "axios";
import Head from "../../../components/Head";
import WalletCryptoAssets from "../../../components/dashboard/wallet/WalletCryptoAssets";
import WalletTokenEstimatedBalance from "../../../components/dashboard/wallet/WalletTokenEstimatedBalance";
import WalletCurrencyEstimatedBalance from "../../../components/dashboard/wallet/WalletCurrencyEstimatedBalance";
import { updateUserSettings, userSettings } from "../../../api";
import { useEffect, useState } from "react";
import { errorNotification } from "../../../utils/helpers";
axios.defaults.withCredentials = true;

const WalletPage = () => {
  const [hideAssets, sethideAssets] = useState(false);
  const { settings, mutate } = userSettings();
  useEffect(() => {
    if (settings) {
      if (settings?.data?.hide_assets) {
        sethideAssets(true);
      } else {
        sethideAssets(false);
      }
    }
  }, [settings]);

  const handleToggleHideAsset = async () => {
    try {
      const response = await updateUserSettings({
        hide_assets: !settings?.data?.hide_assets,
      });
      if (response.status === 200) {
        const data = response.data;
        // successNotification(data.message);
        mutate();
        sethideAssets(!hideAssets);
      } else {
        errorNotification(response?.data?.error);
      }
    } catch (error) {
      errorNotification(error?.response?.data?.error);
    }
  };

  console.log("settings", settings);
  return (
    <>
      <Head pageTitle="User Dashboard - Wallet" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10">
        <div className="col-span-1 md:col-span-3">
          <WalletTokenEstimatedBalance
            hideAssets={hideAssets}
            handleToggleHideAsset={handleToggleHideAsset}
            settings={settings?.data}
          />
        </div>
        <div className="col-span-1 p-3 md:p-0">
          <img
            src="/assets/images/banners/wallet-ad-banner-3.jpg"
            alt=""
            className="h-full rounded-lg leftRight"
          />
        </div>
      </div>
      {/* <DashMarkets /> */}
      <WalletCurrencyEstimatedBalance
        hideAssets={hideAssets}
        handleToggleHideAsset={handleToggleHideAsset}
      />
      <WalletCryptoAssets settings={settings?.data} hideAssets={hideAssets} />
    </>
  );
};

export default WalletPage;
