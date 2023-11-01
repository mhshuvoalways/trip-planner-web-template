import Image from "next/image";
import { motion } from "framer-motion";
import Location from "@/public/icons/location.svg";
import Temperature from "@/public/icons/temperature.svg";
import Cloudy from "@/public/icons/cloudy.svg";
import Sunny from "@/public/icons/sunny.svg";

const Item = ({ item }) => {
  return (
    <div className="result-card">
      <Image src={item.itemImg} alt="" className="result-card-img" />
      <div className="result-content">
        <div className="result-location">
          <Image src={Location} alt="" />
          <p className="result-location-name">{item.itemLocation}</p>
        </div>
        <div className="result-temp">
          <div className="result-temp-temp">
            <Image src={Temperature} alt="" />
            <p>Temperature</p>
          </div>
          {item.temperature === "cloudy" ? (
            <Image src={Cloudy} alt="" />
          ) : (
            <Image src={Sunny} alt="" />
          )}
        </div>
        <motion.button whileTap={{ scale: 0.9 }} className="result-card-btn">
          Go To Trainline
        </motion.button>
      </div>
    </div>
  );
};

export default Item;
