import React, { useState } from 'react';
import DivSlider from './divSlider';
import Image from 'next/image';
import ReactCompareImage from 'react-compare-image';

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
        setCurrentPosition((pos) => pos + 1);
    }
    const prevSlidFunc = () => {
        setCurrentPosition((pos) => pos - 1);
    }
    return (
        <div className='relative pt-10 pb-7'>
            <div className='flex gap-4 absolute w-full top-1/2 left-0 z-40 justify-between -translate-y-1/2'>
                <button 
                //  disabled={currentPosition === -((sliderList.length - 1))}
                  className='px-2' onClick={nextSlidFunc}>
                   <Image src={"/img/arrow.png"} width={25} height={25} alt=""/>
                </button>
                <button 
                // disabled={currentPosition === 0}  
                className='px-2' onClick={prevSlidFunc}>
                    <Image className='rotate-180' src={"/img/arrow.png"} width={25} height={25} alt=""/>
                </button>
            </div>
            <div className='h-[350px] grid grid-cols-[auto_600px_auto] gap-3'>
                <DivSlider startPos={0} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length}>
                    {sliderList.map((item, index) => (
                        <div className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                            <div className='w-full h-full relative'>
                                <Image src={item.after} alt="slider" fill={true} objectFit='cover' />
                            </div>
                            <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'>{item.lebel}<span className='w-10 h-[1px] bg-black'></span></h4>
                        </div>
                    ))}
                </DivSlider>
                <DivSlider startPos={1} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length}>
                    {sliderList.map((item, index) => (
                        <div className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                            <div className='w-full h-full relative'>
                                <ReactCompareImage
                                    leftImage={item.after}
                                    rightImage={item.before}
                                />
                            </div>
                            <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'>{item.lebel}<span className='w-10 h-[1px] bg-black'></span></h4>
                        </div>
                    ))}
                </DivSlider>
                <DivSlider startPos={2} width={divStyle.width} currentPos={currentPosition} childLength={sliderList.length}>
                    {sliderList.map((item, index) => (
                        <div className='float-left relative h-full' style={{ width: divStyle.width + 'px', height: '100%' }}>
                            <div className='w-full h-full relative'>
                                <Image src={item.after} alt="slider" fill={true} objectFit='cover' />
                            </div>
                            <h4 className='absolute bottom-[1px] left-[1px] text-[22px] font-medium leading-[16px] uppercase flex items-end'>{item.lebel}<span className='w-10 h-[1px] bg-black'></span></h4>
                        </div>
                    ))}
                </DivSlider>
            </div>
        </div>
    );
};

export default DivSliderParrent;