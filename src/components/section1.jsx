import { HiSearchCircle } from "react-icons/hi";
import { SiImessage } from "react-icons/si";
import { FaTiktok } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoSparkles } from "react-icons/io5";
const Top = () => {
    return (  
        <div div className='bg-[url(./assets/bg.jpg)] bg-cover bg-no-repeat px-[20px] lg:px-[50px] pt-[20px]'>
            <div className=" flex flex-row justify-between items-center">
                <div className="flex flex-row items-center">
                    <p className="text-[20px] lg:text-[30px] font-semibold text-white">Furniture Finder</p>
                    <HiSearchCircle className='text-white'/>
                </div>
                <div className="flex flex-row items-center gap-x-[7px]">
                    <div className="bg-[#25f4ee] p-[8px] rounded-full"><SiImessage className="w-[20px] h-[20px]"/></div>
                    <div className="bg-[#fe2c55] p-[8px] rounded-full"><FaTiktok className="text-white w-[20px] h-[20px]"/></div>
                    <div className="bg-[#ffeb3b] p-[8px] rounded-full"><RiInstagramFill className="w-[20px] h-[20px]"/></div>
                </div>
            </div>

            <div className="text-center text-white mt-[30px] md:mt-[70px] lg:mt-[100px] lg:py-[20px]">
                <p className="text-[28px] md:text-[32px] font-bold">Discover Your Perfect Furniture</p>
                <p className="px-[10px] md:px-[30px] md:text-[18px] leading-[1]">Find the names of best pieces of furniture from your favourite videos on my tik tok page with ease. Transform your home with furnitures you find.</p>
            </div>
            
            <div className="flex flex-row justify-center items-center text-white gap-[5px] py-[20px] md:py-[40px]">
                <p className=" text-[13px] md:text-[16px] font-semibold text-center">Start your search</p>
                <IoSparkles />
            </div>
        </div>
    );
}
 
export default Top;