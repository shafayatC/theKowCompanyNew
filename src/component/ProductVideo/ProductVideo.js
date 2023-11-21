import React from "react";
import video from "./video/production.mp4";

const ProductVideo = () => {
  return (
    <div className="flex container mx-auto justify-center">
      <video className="mt-20 mb-20" width="100%" height="450" controls autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default ProductVideo;
