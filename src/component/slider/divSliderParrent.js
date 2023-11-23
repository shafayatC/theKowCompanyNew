import React, { useState } from 'react';
import DivSlider from './divSlider';
import Image from 'next/image';

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

    const nextSlidFunc = () => {
        setCurrentPosition((pos) => pos - 1);
    }
    const prevSlidFunc = () => {
        setCurrentPosition((pos) => pos + 1);
    }
    return (
        <>
            <div className='flex gap-4'>
                <button disabled={currentPosition === 0} className='bg-slate-500 text-white px-7' onClick={prevSlidFunc}>Prev</button>
                <button disabled={currentPosition === -((sliderList.length - 1))} className='bg-slate-500 text-white px-7' onClick={nextSlidFunc}>Next</button>
            </div>
            <div className='h-[300px] grid grid-cols-[auto_500px_auto] gap-3'>
                <DivSlider width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length}>
                    {sliderList.map((item, index) => (
                        <div className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                            <div className='w-full h-full relative'>
                                <Image src={item.after} alt="slider" fill={true} objectFit='cover' />
                            </div>
                            <h4 className='absolute bottom-0 left-0'>{item.lebel}</h4>
                        </div>
                    ))}
                </DivSlider>

                <DivSlider width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length}>
                    {sliderList.map((item, index) => (
                        <div className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                            <div className='w-full h-full relative'>
                                <Image src={item.after} alt="slider" fill={true} objectFit='cover' />
                            </div>
                            <h4 className='absolute bottom-0 left-0'>{item.lebel}</h4>
                        </div>
                    ))}
                </DivSlider>

                <DivSlider width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length}>
                    {sliderList.map((item, index) => (
                        <div className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                            <div className='w-full h-full relative'>
                                <Image src={item.after} alt="slider" fill={true} objectFit='cover' />
                            </div>
                            <h4 className='absolute bottom-0 left-0'>{item.lebel}</h4>
                        </div>
                    ))}
                </DivSlider>
                
            </div>
        </>
    );
};

export default DivSliderParrent;