import React, { useEffect, useState } from "react";
import { userSettings } from "../../../../data/userData";
import Switch from "../../../globals/Switch";
import FlexButton from "../../../globals/FlexButton";

const AccountPanel = () => {
  const [enable_2fa, setEnable_2fa] = useState(false);

  const handleEnable2FA = () => {
    // setEnable_2fa((prev) => !prev);
  };

  useEffect(() => {
    if (userSettings.enable_2fa) {
      setEnable_2fa(true);
    } else {
      setEnable_2fa(false);
    }
  }, [userSettings]);

  const handleReset2FA = () => {};

  return (
    <div className="bg-titusDashCardDarkItemBG p-5 md:p-8 border-[1px] border-titusLightBorder rounded-lg flex flex-col gap-6">
      <FlexButton
        title="Suspend Acount"
        btnTitle="Suspend"
        func={handleReset2FA}
        transparentBtn={true}
      />
      <FlexButton
        title="Delete Acount"
        btnTitle="Delete"
        func={handleReset2FA}
        dangerBtn={true}
      />
    </div>
  );
};

export default AccountPanel;
