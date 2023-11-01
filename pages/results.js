import Image from "next/image";
import Link from "next/link";
import Search from "@/components/search";
import ResultsComponent from "@/components/results";
import Button from "@/components/common/Button";
import LogoImg from "@/public/images/logo.svg";
import FilterIcon from "@/public/icons/filter.svg";
import Item1 from "@/public/images/results/1.png";

const items = [
  {
    id: 1,
    itemImg: Item1,
    itemLocation: "Los Angeles",
    temperature: "cloudy",
  },
  {
    id: 2,
    itemImg: Item1,
    itemLocation: "Los Angeles",
    temperature: "cloudy",
  },
  {
    id: 3,
    itemImg: Item1,
    itemLocation: "Los Angeles",
    temperature: "sunny",
  },
  {
    id: 4,
    itemImg: Item1,
    itemLocation: "Los Angeles",
    temperature: "cloudy",
  },
  {
    id: 5,
    itemImg: Item1,
    itemLocation: "Los Angeles",
    temperature: "sunny",
  },
  {
    id: 6,
    itemImg: Item1,
    itemLocation: "Los Angeles",
    temperature: "sunny",
  },
];

const Results = () => {
  return (
    <>
      <div className="result-logo-div">
        <Link href="/">
          <Image src={LogoImg} alt="" className="intro-logo" />
        </Link>
      </div>
      <p className="result-narrow-bg"></p>
      <div className="result-search">
        <Search icon={FilterIcon} value="Filter" />
      </div>
      <div className="results container">
        {items.map((item) => (
          <ResultsComponent item={item} key={item.id} />
        ))}
      </div>
      <div className="container result-load-more-btn-div">
        <Button value={"Load More"} />
      </div>
    </>
  );
};

export default Results;
