import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenBuyWindow = (uid) => {
    console.log("Opening BuyActionWindow for UID:", uid);

    // Reset state before opening again
    setIsBuyWindowOpen(false);
    setTimeout(() => {
      setSelectedStockUID(uid);
      setIsBuyWindowOpen(true);
    }, 50); // Small delay ensures re-render
  };

  const handleCloseBuyWindow = () => {
    console.log("Closing BuyActionWindow for UID:", selectedStockUID);
    setIsBuyWindowOpen(false);
    setSelectedStockUID(""); // Reset UID after closing
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
