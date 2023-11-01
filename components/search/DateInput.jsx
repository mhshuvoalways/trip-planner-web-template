import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateIcon from "@/public/icons/date.svg";

const DateInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="search-inputs-main">
      <div className="search-input">
        <Image src={DateIcon} alt="" />
        <p className="search-input-title">Date</p>
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="search-input-input"
      />
    </div>
  );
};

export default DateInput;
