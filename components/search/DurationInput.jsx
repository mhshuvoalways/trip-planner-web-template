import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TimeIcon from "@/public/icons/time.svg";
import ArrowDown from "@/public/icons/arrowDown.svg";

const DateInput = () => {
  const [showItems, setShowItems] = useState(false);
  const [itemName, setItemName] = useState("1");

  const items = [1, 2, 3, 4, 5, 6];

  return (
    <div
      className="search-inputs-main"
      onClick={() => setShowItems(!showItems)}
    >
      <div className="search-input-content">
        <div>
          <div className="search-input">
            <Image src={TimeIcon} alt="" />
            <p className="search-input-title">Max Duration</p>
          </div>
          <p className="search-input-input">
            {itemName} {itemName === 1 ? "hour" : "hours"}
          </p>
        </div>
        <motion.div
          animate={{
            rotate: showItems ? 180 : 0,
          }}
        >
          <Image src={ArrowDown} alt="" />
        </motion.div>
      </div>
      <AnimatePresence>
        {showItems && (
          <motion.div
            className="search-select-input"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              zIndex: 1
            }}
            exit={{ opacity: 0 }}
          >
            {items.map((item) => (
              <p
                className="search-input-select-item"
                key={item}
                onClick={() => {
                  setShowItems(!showItems);
                  setItemName(item);
                }}
              >
                {item} {item === 1 ? "hour" : "hours"}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DateInput;
