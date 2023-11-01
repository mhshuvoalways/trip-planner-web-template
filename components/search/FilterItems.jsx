import Image from "next/image";
import { motion } from "framer-motion";
import TickIcon from "@/public/icons/tick.svg";

const FilterItems = ({ filterItemShow }) => {
  return (
    <motion.div
      className="filteritems"
      initial={{ opacity: 0 }}
      animate={{
        opacity: filterItemShow ? 1 : 0,
      }}
    >
      <div className="filteritems-item">
        <p>Flight</p>
        <Image src={TickIcon} alt="" className="filteritems-item-tick" />
      </div>
      <div className="filteritems-item">
        <p>Car</p>
        <p className="filteritems-item-notick"></p>
      </div>
      <div className="filteritems-item">
        <p>Train</p>
        <p className="filteritems-item-notick"></p>
      </div>
    </motion.div>
  );
};

export default FilterItems;
