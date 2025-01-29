import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import { DoughnutChart } from "./DoughnutChart";
import {
  ArrowUp,
  ArrowDown,
  ShoppingCart,
  BarChart2,
  MoreHorizontal,
} from "lucide-react"; // Modern icons from Lucide

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-18pf.onrender.com/allWatchList").then((res) => {
      console.log(res.data);
      setWatchlist(res.data);
    });
  }, []);

  const labels = watchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "#FF6B6B", // Vibrant Red
          "#4ECDC4", // Soft Aqua
          "#FFB400", // Warm Yellow
          "#7E57C2", // Modern Purple
          "#26C6DA", // Blue Accent
          "#FF8A65", // Coral Orange
        ],
        borderColor: [
          "#E63946",
          "#43A047",
          "#FFB300",
          "#7E57C2",
          "#29B6F6",
          "#EF5350",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container py-5">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty, etc"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <div className="doughnut-chart">
        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };
  const handleMouseExit = () => {
    setShowWatchlistActions(false);
  };

  return (
    <li
      className="watchlist-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}
    >
      <div className="item">
        <p className={`stock-name ${stock.isDown ? "down" : "up"}`}>
          {stock.name}
        </p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <ArrowDown className="icon down" />
          ) : (
            <ArrowUp className="icon up" />
          )}

          <span className="price">${stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    console.log("Buy button clicked for:", uid);
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
       <button className="btn btn-analytics" title="Analytics (A)">
        <BarChart2 className="icon" /> Analytics
      </button>
      <button className="btn btn-buy" title="Buy (B)" onClick={handleBuyClick}>
        <ShoppingCart className="icon" /> Buy
      </button>
      <button className="btn btn-sell" title="Sell (S)">
        <ArrowDown className="icon" /> Sell
      </button>
      <button className="btn btn-more" title="More (M)">
        <MoreHorizontal className="icon" />
      </button>
    </span>
  );
};

export default WatchList;
