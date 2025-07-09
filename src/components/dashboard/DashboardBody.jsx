import React from "react";
import { dashboardServices, userData } from "../../utils/data";
import DashboardOverview from "./DashboardOverview";
import DashMarkets from "./DashMarkets";

const DashboardBody = ({ user }) => {
  return (
    <div className="h-full w-full flex flex-col gap-10">
      <DashboardOverview user={user} />
      <DashMarkets />
    </div>
  );
};

export default DashboardBody;
