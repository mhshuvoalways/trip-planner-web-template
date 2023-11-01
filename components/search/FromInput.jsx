import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import UserIcon from "@/public/icons/user.svg";
import ArrowDown from "@/public/icons/arrowDown.svg";

const DateInput = () => {
  const [showItems, setShowItems] = useState(false);
  const [itemName, setItemName] = useState("France");

  const items = [
    "France",
    "Russia",
    "India",
    "England",
    "Australia",
    "Natherland",
  ];

  return (
    <div
      className="search-inputs-main"
      onClick={() => setShowItems(!showItems)}
    >
      <div className="search-input-content">
        <div>
          <div className="search-input">
            <Image src={UserIcon} alt="" />
            <p className="search-input-title">From (City)</p>
          </div>
          <p className="search-input-input">{itemName}</p>
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
              zIndex: 2
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
                {item}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DateInput;
