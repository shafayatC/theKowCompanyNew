import React, { useState } from 'react';
import DivSlider from './divSlider';

const DivSliderParrent = () => {
    const [currentPosition, setCurrentPosition] = useState(0);

    const sliderList = [
        {
            "after": "/img/sl.png",
            "before": "/img/sl.jpg",
            "lebel": "Photo recolor"
        },
        {
            "after": "/img/sl-2.png",
            "before": "/img/sl-2.jpg",
            "lebel": "Background removal"
        },
        {
            "after": "/img/sl-3.png",
            "before": "/img/sl-3.jpg",
            "lebel": "Background removal"
        }
    ]

    const divStyle = {
        width: 350, 
        marginLeft: 10, 
        marginRight: 10
    }


    const nextSlidFunc = ()=>{
        setCurrentPosition((pos)=> pos - divStyle.width);
    }
    const prevSlidFunc = ()=>{
        setCurrentPosition((pos)=> pos + divStyle.width);
    }
    return (
        <>
        {console.log(currentPosition)}
        {console.log(-((sliderList.length-1) * divStyle.width))}
        <div className='flex gap-4'>
            <button disabled={currentPosition === -((sliderList.length-1) * divStyle.width)}  className='bg-slate-500 text-white px-7' onClick={nextSlidFunc}>Next</button>
            <button disabled={currentPosition === 0} className='bg-slate-500 text-white px-7' onClick={prevSlidFunc}>Prev</button>
        </div>
        <div className='h-[300px]'>
            <DivSlider width={divStyle.width} currentPos={currentPosition} sliderList={sliderList}/>
        </div>
        </>
    );
};

export default DivSliderParrent;