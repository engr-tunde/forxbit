import React, { useState } from "react";
import CreateTradeHeader from "./CreateTradeHeader";
import CreateTradeForm from "./CreateTradeForm";
import SellTradeForm from "./SellTradeForm";

const M2MCreateTradeBody = () => {
  return (
    <div className="h-full max-w-[1000px] mx-auto flex flex-col gap-10 overflow-y-scroll">
      <CreateTradeHeader />

      <CreateTradeForm />
    </div>
  );
};

export default M2MCreateTradeBody;
