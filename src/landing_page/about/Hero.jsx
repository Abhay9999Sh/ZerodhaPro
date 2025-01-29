import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-3 mt-4 mb-4 text-center">
        <h1 className="fs-4">We pioneered the discount broking model in India.</h1>
        <h1 className="fs-4">Now, we are breaking ground with our technology.</h1>
      </div>
      <div className="row py-4 border-top" style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}>
        <div className="col-lg-6 col-12 px-4 py-3 text-muted">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier. <br /> <br />
            Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India. <br /> <br />
            Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-lg-6 col-12 px-4 py-3 text-muted">
          <p>
            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors. <br /> <br />
            <Link className="text-decoration-none">Rainmatter</Link>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. <br /> <br />
            And yet, we are always up to something new every day. Catch up on the latest updates on our <Link className="text-decoration-none">blog</Link> or see what the media is <Link className="text-decoration-none">saying about us</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
