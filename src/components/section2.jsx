import p2 from '../Pictures/P2/4.png'
import p1 from '../Pictures/P1/1.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { IoMdEye } from 'react-icons/io';
import { Link } from 'react-router-dom';
const Middle = () => {
    return (  
        <div className="px-[20px] lg:px-[50px] font-monts">
            <div className="flex flex-row items-center mt-[20px]">
                <p className="text-[20px] lg:text-[25px] font-medium">Most Popular</p>
                <MdOutlineKeyboardArrowRight className='md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]'/>
            </div>

            <div className="flex flex-wrap justify-center gap-[30px] md:gap-[50px] items-center mt-[20px]">
                <div className="relative">
                    <img src={ p2 } className='object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl'/>
                    <div className=' flex flex-row justify-between items-center absolute w-full bottom-[1px] bg-white py-[5px] md:px-[6px]'>
                        <div className='text-[#fe2c55] rounded-sm p-[2px] text-[8px] md:text-[16px] flex flex-row items-center'>
                            <IoMdEye className='hidden md:block md:w-[30px] md:h-[30px]'/>
                            <p className='text-center leading-[1] font-semibold'>OVER <br />400k <span className='md:hidden'>views</span></p>
                        </div>
                        <Link to='/P2' className='bg-[#ffeb3b] text-[#756d25] rounded-sm p-[2px] text-[10px] md:text-[16px] font-medium cursor-pointer'>Furnitures</Link>
                        <a href={'https://www.tiktok.com/@ken_lofi/photo/7284578706155130118?is_from_webapp=1&sender_device=pc&web_id=7383255718315197958'}><p className='bg-[#25f4ee] text-[#368a87] rounded-sm p-[2px] text-[10px] md:text-[16px] font-medium cursor-pointer'>Video</p></a>
                    </div>
                </div>
                <div className="relative">
                    <img src={ p1 } className='object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl'/>
                    <div className=' flex flex-row justify-between items-center absolute w-full bottom-[1px] bg-white py-[5px] md:px-[6px]'>
                        <div className='text-[#fe2c55] rounded-sm p-[2px] text-[10px] md:text-[16px] flex flex-row items-center'>
                            <IoMdEye className='hidden md:block md:w-[30px] md:h-[30px]'/>
                            <p className='text-center leading-[1] font-semibold'>OVER <br />5M <span className='md:hidden'>views</span></p>
                        </div>
                        <Link to='/P1' className='bg-[#ffeb3b] text-[#756d25] rounded-sm p-[2px] text-[10px] md:text-[16px] font-medium cursor-pointer'>Furnitures</Link>
                        <a href="https://www.tiktok.com/@ken_lofi/photo/7228237718923316485?is_from_webapp=1&sender_device=pc&web_id=7383255718315197958"><p className='bg-[#25f4ee] text-[#368a87] rounded-sm p-[2px] text-[10px] md:text-[16px] font-medium cursor-pointer'>Video</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Middle;