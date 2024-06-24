import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import L2 from "../Pictures/L2/2.png";
import L3 from "../Pictures/L2/3.png";
import L4 from "../Pictures/L2/4.png";
import one from "../Pictures/L2furniture/one.png";
import two from "../Pictures/L2furniture/two.png";
import three from "../Pictures/L2furniture/three.png";
import four from "../Pictures/L2furniture/four.png";
import five from "../Pictures/L2furniture/five.png";
const L1 = () => {
  return (
    <div className="px-[20px] lg:px-[50px]">
      <div className="flex flex-wrap justify-center items-center mt-[20px] gap-[10px]">
        <img
          src={L2}
          className="object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl"
        />
        <img
          src={L3}
          className="object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl"
        />
        <img
          src={L4}
          className="object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl"
        />
      </div>
      <div className="flex flex-row items-center mt-[20px]">
        <p className="text-[20px] lg:text-[25px] font-medium">Furnitures</p>
        <MdOutlineKeyboardArrowRight className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]" />
      </div>

      <div className="flex flex-wrap justify-center mt-[20px] gap-[10px]">
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ one } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Racer Dining Chair</p>
        </div>
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ two } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Tulip Mid Century Dining Table</p>
        </div>
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ three } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Seating Islands</p>
        </div>
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ four } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">HAY PAO Portable Lamp</p>
        </div>
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ five } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Sculptural Glassed Candlesticks</p>
        </div>
      </div>
    </div>
  );
};

export default L1;
