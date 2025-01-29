import React from "react";

const Stats = () => {
  return (
    <div className="container ">
      <div className="row stats p-5 d-flex align-items-stretch">
        <div className="col-md-6 p-4 d-flex flex-column justify-content-between">
          <div>
            <h1 className="fs-2">Trust with confidence</h1>
            <h4 className="mt-5 fs-5">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h4 className="mt-4 fs-5">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h4 className="mt-4 fs-5">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4 className="mt-4 fs-5">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>
        <div className="col-md-6 p-4 d-flex flex-column justify-content-between">
          <img
            src="/assets/ecosystem.png"
            alt="ecosystem"
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
          <div className="text-center mt-5 ">
            <a
              className="text-primary  text-decoration-none mx-4"
              style={{ cursor: "pointer" }}
            >
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a
              className="text-primary text-decoration-none mx-3"
              style={{ cursor: "pointer" }}
            >
              Try Kite demo <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
