import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleUp, FaArrowCircleDown } from 'react-icons/fa'; // FontAwesome icons

import WatchList from "./WatchList";
import TopBar from "./TopBar";
import { GeneralContextProvider } from "./GeneralContext";

const Funds = () => {
  return (
    <>
    <TopBar />
      <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link to="" className="btn btn-success">
          <FaArrowCircleUp /> Add funds
        </Link>
        <Link to="" className="btn btn-info">
          <FaArrowCircleDown /> Withdraw
        </Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>3,736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link to="/signup" className="btn btn-primary">Open Account</Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Funds;
