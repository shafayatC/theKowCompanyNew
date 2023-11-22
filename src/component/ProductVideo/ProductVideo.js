import Image from "next/image";
import React, { useState } from "react";
// import video from "./video/production.mp4";
// import video from './video/production.mp4';

const ProductVideo = () => {

  const [playBool, setPlayBool] = useState(false);

  return (
    <div className="bg-[#DEE2E2] pt-3 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          {
            playBool ?
              <div className="flex justify-center w-[770px]">
                <video width="100%" height="auto" controls autoPlay muted loop>
                  <source src='/video/production.mp4' type="video/mp4" />
                </video>
              </div>
              :
              <div onClick={() => setPlayBool(true)} className="cursor-pointer flex flex-col items-center justify-center relative w-[450px]" >
                <Image src="/img/play.png" alt="play"
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                  width={500}
                  height={300}
                   />
                <h4 className="text-5xl font-bold text-kow-text-black uppercase absolute -right-[220px] top-[184px]">RETOUCH</h4>
              </div>
          }
          <h2 className="text-5xl font-bold uppercase text-kow-text-black pt-7">HERE IS YOUR TAGLINE</h2>
        </div>
      </div>
    </div>

  );
};

export default ProductVideo;


