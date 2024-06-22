import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import L2 from "../Pictures/L1/2.png";
import L3 from "../Pictures/L1/3.png";
import L4 from "../Pictures/L1/4.png";
const L1 = () => {
  return (
    <div className="px-[20px] lg:px-[50px]">
      <div className="flex flex-wrap justify-center items-center">
        <img
          src={L2}
          className="object-cover w-[150px] md:w-[250px] h-[150px] md:h-[250px] shadow-xl"
        />
      </div>
      <div className="flex flex-row items-center mt-[20px]">
        <p className="text-[20px] lg:text-[25px] font-medium">Furnitures</p>
        <MdOutlineKeyboardArrowRight className="md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px]" />
      </div>
    </div>
  );
};

export default L1;
