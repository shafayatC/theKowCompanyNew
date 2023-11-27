import React from 'react';

const CircleStyle = () => {
    return (
        <div className='flex flex-col items-center'>
            <div>
                <div className='p-6 bg-kow-green rounded-full z-20 relative'>
                    <div className='rounded-full'>
                        <div className='shadow-2xl w-[130px] h-[130px] flex bg-[#f9f9f9] rounded-full items-center justify-center'>
                            <h5 className='bg-white rounded-full text-4xl font-semibold'>12M</h5>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center relative top-[42px] z-10 gap-3'>
                    <div className='absolute -top-[70px] bg-[#666666] w-[1px] h-[70px]'></div>
                    <div className='p-[7px] border-[1px] border-solid border-[#666666] rounded-full'>
                        <div className='bg-kow-green p-2 rounded-full'></div>
                    </div>
                    <div>
                    <h5 className='uppercase text-lg font-medium'>2d Assets</h5>
            </div>
                </div>
            </div>

        </div>
    );
};

export default CircleStyle;