import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

import WatchList from "./WatchList";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-18pf.onrender.com/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]); //all holdings name

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <TopBar />
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <div className="holdings-container">
            <div className="holdings-content">
              <h3 className="title">Holdings ({allHoldings.length}) </h3>

              <div className="order-table">
                <table>
                  <thead>
                    <tr>
                      <th>Instrument</th>
                      <th>Qty.</th>
                      <th>Avg. cost</th>
                      <th>LTP</th>
                      <th>Cur. val</th>
                      <th>P&L</th>
                      <th>Net chg.</th>
                      <th>Day chg.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allHoldings.map((stock, index) => {
                      const currValue = stock.price * stock.qty;
                      const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                      const profClass = isProfit ? "profit" : "loss";
                      const dayClass = stock.isLoss ? "loss" : "profit";

                      return (
                        <tr key={index}>
                          <td>{stock.name}</td>
                          <td>{stock.qty}</td>
                          <td>{stock.avg.toFixed(2)}</td>
                          <td>{stock.price.toFixed(2)}</td>
                          <td>{currValue.toFixed(2)}</td>
                          <td className={profClass}>
                            {(currValue - stock.avg * stock.qty).toFixed(2)}
                          </td>
                          <td className={profClass}>{stock.net}</td>
                          <td className={profClass}>{stock.day}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="row">
                <div className="col">
                  <h5>
                    29,875.<span>55</span>
                  </h5>
                  <p>Total investment</p>
                </div>
                <div className="col">
                  <h5>
                    31,428.<span>95</span>
                  </h5>
                  <p>Current value</p>
                </div>
                <div className="col">
                  <h5>1,553.40 (+5.20%)</h5>
                  <p>P&L</p>
                </div>
              </div>
              <div className="vertical-graph">
              <VerticalGraph data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Holdings;
