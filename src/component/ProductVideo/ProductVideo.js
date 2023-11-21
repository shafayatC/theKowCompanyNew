import React from "react";
// import video from "./video/production.mp4";
// import video from './video/production.mp4';

const ProductVideo = () => {
  return (
    <div className="bg-[#DEE2E2]">
      <div className="container mx-auto">
      <div className="flex container mx-auto justify-center">
      <video width="100%" height="250" controls autoPlay muted loop>
        <source src='/video/production.mp4' type="video/mp4" />
      </video>
    </div>
      </div>
    </div>

  );
};

export default ProductVideo;
