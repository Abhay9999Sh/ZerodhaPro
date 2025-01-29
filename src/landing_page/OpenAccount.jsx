import React from "react";
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h1 className="mt-5 mb-3 fs-2">Open a Zerodha account</h1>
        <p className="text-muted">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link to="/signup">
          <button
            type="submit"
            style={{ width: "20%", margin: "0 auto" }}
            className="btn btn-primary mt-3 fs-6 p-2 "
          >
            Sign up for free
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OpenAccount;
