import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container" style={{fontFamily:"sans-serif", fontSize:"0.85rem"}}>
      <div className="row leftSection align-items-center p-lg-5 my-sm-3 my-md-3 p-md-4 p-sm-3 p-2">
        <div className="col-lg-6 col-md-5 col-12 text-center p-lg-5 mb-3 mb-md-0 ">
          <img src={imageURL} style={{width:"90%",  maxWidth: "400px", // Control size on medium screens
              height: "auto"}} />
        </div>
        <div className="col-lg-6 col-md-7 col-12 mt-lg-5 mt-md-4  mt-sm-3 mt-2 px-lg-5 px-md-4 px-sm-3 px-2">
          <h1 className="mb-3 fs-2">{productName}</h1>
          <p>{productDescription}</p>
          <div >
          <a className="text-decoration-none " style={{marginRight:"2rem"}} href={tryDemo}>Try Demo <i className='fa-solid fa-arrow-right'></i></a>
          <a className="text-decoration-none"  href={learnMore}>Learn More <i className='fa-solid fa-arrow-right'></i></a>
          </div>
          <div className="mt-3">
          <a className="text-decoration-none mr-3" style={{marginRight:"2rem"}}  href={googlePlay}><img src="/assets/googlePlayBadge.svg" /></a>
          <a className="text-decoration-none"  href={appStore}><img src="/assets/appstoreBadge.svg" /></a>

          </div>

        </div>

      </div>
    </div>
  )
};

export default LeftSection;


//using props for same things