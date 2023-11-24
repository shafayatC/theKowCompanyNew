import Image from 'next/image';
import React from 'react';
import avatar1 from "../../images/Avatar1.png"
import avatar2 from "../../images/Avatar2.png"
import avatar3 from "../../images/Avatar3.png"
import { MdOutlineArrowForwardIos,MdOutlineArrowBackIos  } from "react-icons/md";
const TheSquad = () => {
    return (
        <div>
             <div className='container mx-auto '>
                <div className='flex flex-col md:flex-row  items-center justify-center gap-12 pt-40 pb-7 relative'>
                    <div className='relative'>
                        <Image src={avatar1}
                        width={300}
                        alt='trends photo'
                        />
                        
                        <div className='absolute left-24 font-semibold bottom-0  text-black'>
                            <h1 className='text-xl leading-5'>NAME IS HERE</h1>
                            <h1 className='text-xs'>DESIGNATION</h1>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image src={avatar2}
                        width={300}
                        alt='trends photo'
                        />
                      
                      <div className='absolute left-24 font-semibold bottom-0  text-black'>
                            <h1 className='text-xl leading-5'>NAME IS HERE</h1>
                            <h1 className='text-xs'>DESIGNATION</h1>
                        </div>
                    </div>
                    <div className='relative'>
                        <Image src={avatar3}
                        width={300}
                        alt='trends photo'
                        />
                         
                         <div className='absolute left-24 font-semibold bottom-0  text-black'>
                            <h1 className='text-xl leading-5'>NAME IS HERE</h1>
                            <h1 className='text-xs'>DESIGNATION</h1>
                        </div>
                    </div>
                    <MdOutlineArrowForwardIos className='absolute right-10 bottom-24 text-3xl'/>
                </div>
                
                <div className='flex justify-center gap-10 my-6'>
                        <h1 className='w-[350px] border-b border-[#7C9C30]'></h1>
                        <h1 className='text-[40px] -mb-4 font-bold'>THE SQUAD</h1>
                        <h1 className='w-[350px] border-b border-[#7C9C30]'></h1>
                    </div>

                    

            </div>
        </div>
    );
};

export default TheSquad;