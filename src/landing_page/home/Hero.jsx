import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedMessage = sessionStorage.getItem("signupMessage");

    if (storedMessage) {
      setMessage(storedMessage);
      setShowMessage(true);

      const timer = setTimeout(() => {
        setShowMessage(false);
        sessionStorage.removeItem("signupMessage");
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleCloseMessage = () => {
    setShowMessage(false);
    sessionStorage.removeItem("signupMessage");
  };

  return (
    <div className="container p-5 ">
      {showMessage && message && (
        <div className="alert alert-success d-flex justify-content-between align-items-center">
          <span>{message}</span>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleCloseMessage}
          ></button>
        </div>
      )}
      <div className="row text-center">
        <img src="/assets/homeHero.png" alt="homehero" className="mb-2 " />
        <h1 className="mt-5 mb-2">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        {/* Show success message if it exists and should be visible */}

        <Link to="/signup">
          <button
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

export default Hero;
