import { GoHomeFill } from "react-icons/go";
import Image from 'next/image'
import logo from "../../images/logo.png"
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (

    <>

      {/* <div className="bg-[#DEE2E2] font-sans w-full min-h-screen m-0"> */}
        <div className="bg-[#DEE2E2]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between md:justify-evenly gap-3  py-4">
              <div>
                <Image src={logo}
                  width={80}
                  height={50}
                  alt="logo" />
              </div>
{/* --------------------------------------For Large Screen------------------------------------------ */}
              <div className="hidden md:flex sm:items-center md:gap-1 lg:gap-8 xl:gap-12">
                <a href="#" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">IMAGES</a>
                <a href="#" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">3D</a>
                <a href="#" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">AI</a>
                <a href="#" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INTEGRATIONS</a>
                <a href="#" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">THE SQUAD</a>
                <a href="#" className="text-gray-800 text-xs lg:text-sm border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INDUSTRY TRENDS</a>
                <a href="#" className="text-gray-800 text-xs lg:text-sm border-2 rounded-3xl px-4 py-1 border-[#7C9C30] font-semibold mr-4">SUBSCRIBE</a>
                <a href="#" className="text-gray-800 text-[26px] lg:text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4"><GoHomeFill />
                </a>
              </div>


              <div className="md:hidden cursor-pointer ">
              <CgMenuGridO className="text-[32px]" />
              </div>
            </div>
{/* -----------------------------------For Mobile--------------------------------------- */}
            <div className="block md:hidden bg-[#DEE2E2]  py-2">
              <div className="flex flex-col items-center gap-2">
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">IMAGES</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">3D</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">AI</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INTEGRATIONS</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">THE SQUAD</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">INDUSTRY TRENDS</a>
                <a href="#" className="text-gray-800 text-base border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4">SUBSCRIBE</a>
                <a href="#" className="text-gray-800 text-[32px] border-b-2 border-[#DEE2E2] font-semibold hover:border-b-2 hover:border-[#7C9C30] mr-4"><GoHomeFill />
                </a>

              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;