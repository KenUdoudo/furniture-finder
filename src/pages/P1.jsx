import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import P2 from "../Pictures/P1/2.png";
import P3 from "../Pictures/P1/3.png";
import P4 from "../Pictures/P1/4.png";
const L1 = () => {
  return (
    <div className="px-[20px] lg:px-[50px]">
      <div className="flex flex-wrap justify-center items-center mt-[20px] gap-[10px]">
        <img
          src={P2}
          className="object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl"
        />
        <img
          src={P3}
          className="object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl"
        />
        <img
          src={P4}
          className="object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl"
        />
      </div>
      <div className="flex flex-row items-center mt-[20px]">
        <p className="text-[20px] lg:text-[25px] font-medium">Furnitures</p>
        <MdOutlineKeyboardArrowRight className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]" />
      </div>

      <div className="flex flex-wrap justify-center items-center mt-[20px] gap-[10px]">
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <div className="w-full h-[150px] md:h-[250px] bg-[#312b2b]"></div>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Chaise Lounge Chairs</p>
        </div>
      </div>
    </div>
  );
};

export default L1;