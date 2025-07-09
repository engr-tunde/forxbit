import React from "react";
import ChatHeader from "../../globals/chat/ChatHeader";
import ChatBody from "../../globals/chat/ChatBody";

const TradeChat = ({
  orderData,
  headerMessage,
  systemMessages,
  currentUser,
  tradeChat,
}) => {
  return (
    <div className="rounded-2xl border-[2px] border-titusLightBorder overflow-y-scroll lg:max-h-[100vh] 4xl:max-h-[85vh]">
      <ChatHeader
        orderData={orderData}
        headerMessage={headerMessage}
        systemMessages={systemMessages}
      />
      <ChatBody
        tradeChat={tradeChat}
        currentUser={currentUser}
        title="Traders messages"
      />
    </div>
  );
};

export default TradeChat;
