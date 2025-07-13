import DashUserOverview from "./DashUserOverview";
import { userProfile } from "./../../api/index";
import Loader from "../globals/Loader";
import ErrorWidget from "./../globals/ErrorWidget";
import DashTokenEstimatedBalance from "./DashTokenEstimatedBalance";

const DashboardOverview = ({ handleToggleHideAsset, hideAssets, settings }) => {
  const { user, userLoading, userError } = userProfile();

  console.log("user user", user);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10">
      <div className="col-span-1">
        {user ? <DashUserOverview user={user?.data} /> : null}
        {/* {userLoading ? <Loader /> : null} */}
        {userError ? (
          <ErrorWidget error={userError?.toString()} color="white" />
        ) : null}
      </div>
      <div className="col-span-1">
        <DashTokenEstimatedBalance
          handleToggleHideAsset={handleToggleHideAsset}
          hideAssets={hideAssets}
          settings={settings}
        />
      </div>
    </div>
  );
};

export default DashboardOverview;
