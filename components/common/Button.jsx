import { motion } from "framer-motion";
import Image from "next/image";

const Button = ({ value, icon, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="intro-content-btn"
      style={{
        display: icon ? "flex" : "inline",
      }}
      onClick={onClick}
    >
      <p>{value}</p>
      {icon && <Image src={icon} alt="" />}
    </motion.button>
  );
};

export default Button;
