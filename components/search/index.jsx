import { useState } from "react";
import { useRouter } from "next/router";
import DateInput from "./DateInput";
import FromInput from "./FromInput";
import DurationInput from "./DurationInput";
import Button from "../common/Button";
import FilterItems from "./FilterItems";

const Index = ({ value, icon }) => {
  const [filterItemShow, setFilterItemShow] = useState(false);
  const router = useRouter();

  const searchHandler = () => {
    if (value === "Results") {
      router.push("/results?date=12/12/2023&city=france&maxduration=1");
    }
  };

  const searchResultsHandler = () => {
    if (value === "Filter") {
      setFilterItemShow(!filterItemShow);
    }
  };

  return (
    <div className="container">
      <div className="search">
        <p className="search-title">Quick Search</p>
        <div className="search-inputs">
          <DateInput />
          <FromInput />
          <DurationInput />
          <div className="search-btn-filter">
            <Button
              value={value}
              icon={icon}
              onClick={() => {
                searchHandler();
                searchResultsHandler();
              }}
            />
            <FilterItems
              filterItemShow={filterItemShow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
