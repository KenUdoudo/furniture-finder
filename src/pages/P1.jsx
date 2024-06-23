import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import P2 from "../Pictures/P1/2.png";
import P3 from "../Pictures/P1/3.png";
import P4 from "../Pictures/P1/4.png";
import one from "../Pictures/P1furniture/one.png";
import two from "../Pictures/P1furniture/two.png";
import three from "../Pictures/P1furniture/three.png";
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

      <div className="flex flex-wrap justify-center mt-[20px] gap-[10px]">
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ one } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Kalapalo Headdress Painting</p>
        </div>
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ two } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Lamp Model Nanas</p>
        </div>
        <div className="border-[2px] border-black rounded-md w-[150px] md:w-[250px]">
            <img src={ three } className="object-cover w-full h-[150px] md:h-[250px]"/>
            <p className="font-bold text-[13px] md:text-[16px] text-center py-[10px]">Kilim Rug</p>
        </div>
      </div>
    </div>
  );
};

export default L1;
