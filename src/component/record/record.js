import React from 'react';
import CircleStyle from './circleStyle';

const Record = () => {
    return (
        <div className='bg-white pb-6'>
            <div className='bg-kow-green h-[200px]'></div>
            <div>
                <div className='container mx-auto'>
                    <div className='flex flex-col gap-11'>
                        <div className='grid grid-cols-4 justify-items-center -mt-24'>
                            <CircleStyle />
                            <CircleStyle />
                            <CircleStyle />
                            <CircleStyle />
                        </div>
                        <div className='flex justify-center gap-10 my-10'>
                            <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                            <h1 className='text-[40px] -mb-4 font-bold'>SUCCESS RECORD</h1>
                            <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Record;