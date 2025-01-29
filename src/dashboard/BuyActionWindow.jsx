import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { FaCheck, FaTimes } from "react-icons/fa";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isLoading, setIsLoading] = useState(false);
  const { closeBuyWindow } = useContext(GeneralContext); 

  const handleBuyClick = async () => {
    setIsLoading(true);

    try {
      console.log("buy button clicked");

      await axios.post("https://zerodha-backend-18pf.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      setStockQuantity(1);
      setStockPrice(0.0);

      closeBuyWindow(); 
      console.log("Order placed successfully!");

    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow(); 
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min="0"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button
            className="btn btn-primary"
            onClick={handleBuyClick}
            disabled={isLoading}
          >
            {isLoading ? (
              "Processing..."
            ) : (
              <>
                <FaCheck /> Buy
              </>
            )}
          </button>
          <button className="btn btn-secondary" onClick={handleCancelClick}>
            <FaTimes /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
