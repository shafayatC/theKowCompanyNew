import Image from 'next/image';
import React from 'react';

const DivSlider = ({width, currentPos, sliderList}) => {

    return (
        <>
        <div className='relative overflow-hidden' style={{width: width+'px', height: '100%'}} >
            <div className='transition-all duration-300 absolute top-0 left-0 h-full' style={{width: (width*sliderList.length)+'px', left: currentPos+'px'}}>
            {sliderList.map((item, index) => (
                <div className='float-left relative h-full' style={{width: width+'px', height: '100%'}}>
                    <div className='w-full h-full'>
                        <Image src={item.after} alt="slider"
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                            width={300}
                            height={250}
                        />
                        {/* <Image src={item.after} width={300} height={300} alt="slider" /> */}
                    </div>
                    <h4 className='absolute bottom-0 left-0'>{item.lebel}</h4>
                </div>
            ))}
            </div>
        </div>
        </>

    );
};

export default DivSlider;