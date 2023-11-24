import React from "react";
import ReactCompareImage from "react-compare-image";


const Retouched = () => {
    return (
        <div >
            <div className="container mx-auto py-20">

                <div className="flex justify-center items-center gap-40">
                    <div className=" h-[670px] relative z-50 mt-5 lg:mt-0 bg-white md:w-[450px] sm:w-[450px] lg:w-[600px] xl:w-[500px] sm:ml-20 md:ml-28  ">
                        <div className="h-full overflow-hidden ">
                            <ReactCompareImage
                                leftImage="/model.png"
                                rightImage="/model-BR.png"
                            />
                        </div>
                    </div>

                    <div className="w-2/5 ">
                        <h1 className="text-[44px]  font-bold border-b-2 leading-[50px] border-[#7C9C30]">retouch.ai</h1>
                        <div className="pr-20">
                        <p className="text-sm  text-justify pt-7"> Your go-to AI tool for seamlessly removing backgrounds from
                            images. Our cutting-edge solution combines the power of artificial
                            intelligence with simplicity, allowing you to remove background
                            from any picture with just a few clicks. Retouched.ai empowers you
                            to obtain PSD, JPG, or PNG files as output, offering the flexibility to
                            integrate your images seamlessly into various projects.</p>
                        <p className="text-sm  pt-5 text-justify">{`Say goodbye to tedious manual editing and hello to a faster, smarter
                            way to achieve professional-looking results. With Retouched.ai,
                            background removal is no longer a challenge – it's a creative
                            breeze!`}</p>
                        </div>

                      
                        <div className='flex justify-start pt-7 '>
                   <button className='text-xs  font-semibold text-white px-8 py-2 bg-[#7C9C30] rounded-3xl'> Remove Image Background with AI</button>
                   </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Retouched;