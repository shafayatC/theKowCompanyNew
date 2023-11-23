import React from 'react';
import Image from 'next/image';
import integration1 from "../../images/integration1.png"
import integration2 from "../../images/integration2.png"
import integration3 from "../../images/integration3.png"

const Integration = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-2 '>
                    <div>
                        <Image src={integration1}
                        width={270}
                        alt='integration photo'
                        className='shadow-gray-500 shadow-lg'
                        />
                    </div>
                    <div>
                        <Image src={integration2}
                        width={300}
                        alt='integration photo'
                        className='shadow-gray-500 shadow-lg'
                        />
                    </div>
                    <div>
                        <Image src={integration3}
                        width={270}
                        alt='integration photo'
                        className='shadow-gray-500 shadow-lg'
                        />
                    </div>
                </div>

                <div>
                    <div className='flex justify-center gap-10 my-10'>
                        <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                        <h1 className='text-[40px] -mb-4 font-bold'>INTEGRATION</h1>
                        <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                    </div>
                    <p className='text-xs md:text-sm px-[54px]'>{`In an era where innovative collaborations are the key to unlocking unparalleled success, we're thrilled to introduce a groundbreaking partnership between Covision Media, Nureg GMBH,
and The KOW Company. This powerful trio brings together distinct realms of expertise to offer an unmatched 3D content production experience. Witness the future as Covision Media’s
AI-powered scanners, NUREG GmbH's unrivaled expertise in content production and photography studio services along with The KOW Company’s post-production magic comes together!`}</p>
                    <p className='text-xs md:text-sm text-center mt-5 mb-10 px-[52px] '>{`From inception to flawlessness, we're pushing boundaries, breaking limits, and crafting the future with each polygon.`}</p>
                    
                   <div className='flex justify-center '>
                   <button className='text-xs md:text-sm font-semibold text-white px-6 py-1 bg-[#7C9C30] rounded-3xl'>Explore the 3D Content Production Solution</button>
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Integration;