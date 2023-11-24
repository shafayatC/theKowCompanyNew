import React from 'react';
import Image from 'next/image';
import tree from "../../images/tree.png"

const BluePrint = () => {
    return (
        <div>
              <div className='container mx-auto pt-32 pb-20'>
                <div className='flex  justify-center items-center  '>
                    <div>
                        <Image src={tree}
                        width={950}
                        alt='integration photo'
                      
                        />
                    </div>
                  
                </div>

                <div>
                    <div className='flex justify-center gap-10 mb-5 '>
                        <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                        <h1 className='text-[40px] -mb-4 font-bold'>BLUE PRINT</h1>
                        <h1 className='w-[400px] border-b border-[#7C9C30]'></h1>
                    </div>
                    <p className='text-xs md:text-sm text-justify px-[80px]'>{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim
veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait
nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo`}</p>
                   
                    
                  
                </div>

            </div>
        </div>
    );
};

export default BluePrint;