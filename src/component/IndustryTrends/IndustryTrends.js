import Image from 'next/image';
import React from 'react';
import trends1 from "../../images/trends1.png"
import trends2 from "../../images/trends2.png"
import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos  } from "react-icons/md";

const IndustryTrends = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex md:flex-row items-center justify-center gap-3 pt-40 pb-20'>
                    <div className='relative'>
                        <Image src={trends1}
                        width={500}
                        alt='trends photo'
                        />
                        <div className='flex justify-center mt-4'>
                            <button className='text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl'>See More</button>
                        </div>
                        <MdOutlineArrowBackIos className='absolute left-0 font-semibold bottom-20 text-white text-2xl'/>
                    </div>
                    <div className='relative'>
                        <Image src={trends2}
                        width={500}
                        alt='trends photo'
                        />
                         <div className='flex justify-center mt-4'>
                            <button className='text-xs font-medium text-white px-12 py-1 bg-[#7C9C30] rounded-3xl'>See More</button>
                        </div>
                        <MdOutlineArrowForwardIos className='absolute right-0 font-semibold bottom-20 text-white text-2xl' />
                    </div>
                </div>

                <div className='flex justify-center gap-10 my-6'>
                        <h1 className='w-[350px] border-b border-[#7C9C30]'></h1>
                        <h1 className='text-[40px] -mb-4 font-bold'>INDUSTRY TRENDS</h1>
                        <h1 className='w-[350px] border-b border-[#7C9C30]'></h1>
                    </div>

            </div>
        </div>
    );
};

export default IndustryTrends;