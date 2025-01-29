import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) => {
  return (
    <div
      className="container"
      style={{ fontFamily: "sans-serif", fontSize: "0.85rem" }}
    >
      <div className="row rightSection align-items-center p-lg-5 p-md-4 p-sm-3 p-2 my-md-3 my-sm-3">
        <div className="col-lg-6 col-md-7 col-12 mt-lg-5 mt-md-4 mt-sm-3 mt-2 px-lg-5 px-md-4 px-sm-3 px-2">
          <h1 className="mb-3 fs-2">{productName}</h1>
          <p>{productDescription}</p>
          <a className="text-decoration-none" href={learnMore}>
            Learn More <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-lg-6 col-12 px-lg-5 px-3">
          <img src={imageURL} style={{ width: "80%" }} alt="Product" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
