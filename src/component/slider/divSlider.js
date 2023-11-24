import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const DivSlider = ({startPos, currentPos, childLength, children}) => {

    const [getSliderWith, setSliderWidth] = useState(0); 
    const [getPossition, setPossition] = useState(startPos);
    const [sliderId] = useState(`slider_${Math.random().toString(36).substr(2, 9)}`);

    const sliderParrentWidth = ()=>{
        const sliderParrent = document.getElementById(`${sliderId}`);
        console.log(sliderParrent)
        sliderParrent && setSliderWidth(sliderParrent.offsetWidth); 
    }
    const sliderRef = useRef(null);

    useEffect(() => {
       if (sliderRef.current) {
            console.log(sliderRef.current.children[0].children); 
            setSliderWidth((slwidth)=>sliderRef.current.offsetWidth);
           
          for (let index = 0; index < childLength; index++) {
            sliderRef.current.children[0].children[index].style.width = sliderRef.current.offsetWidth+'px';
            
          }
       }
    }, [sliderId]);

    useEffect(()=>{
        setPossition((pos) => startPos + currentPos);
    }, [currentPos]);

    return (
        <>
        <div ref={sliderRef} id={sliderId} className='relative overflow-hidden' style={{height: '100%'}} >
            <div className='transition-all duration-300 absolute top-0 left-0 h-full' style={{width: (getSliderWith*childLength)+'px', left: (getSliderWith * (-getPossition))+'px'}}>
            {children}
            </div>
        </div>
        </>

    );
};

export default DivSlider;