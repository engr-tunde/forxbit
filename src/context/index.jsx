import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [m2mCurrentStage, setm2mCurrentStage] = useState(1);
  const [m2mTradeType, setm2mTradeType] = useState("Buy");

  return (
    <AppContext.Provider
      value={{
        m2mCurrentStage,
        setm2mCurrentStage,
        m2mTradeType,
        setm2mTradeType,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
