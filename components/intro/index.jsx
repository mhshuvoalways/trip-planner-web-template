import Image from "next/image";
import Button from "../common/Button";
import LogoImg from "@/public/images/logo.svg";
import FlashIcon from "@/public/icons/flash.svg";
import LeftCard from "@/public/images/cardleft.png";
import RightCard from "@/public/images/cardright.png";

const index = () => {
  const gotoBottom = () => {
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight,
    });
  };

  return (
    <div className="intro">
      <div className="intro-overlay">
        <Image src={LogoImg} alt="" className="intro-logo" />
        <div className="intro-content container">
          <div>
            <p className="intro-content-title">
              Find Your Best Destination for Travel
            </p>
            <div className="intro-content-div">
              <Image src={LeftCard} alt="" className="intro-content-leftcard" />
              <div>
                <Image src={FlashIcon} alt="" />
                <p className="intro-content-des">
                  You want to travel but you don’t know where to go, just follow
                  the sun.
                </p>
                <Button value={"Get Started"} onClick={gotoBottom} />
              </div>
              <Image
                src={RightCard}
                alt=""
                className="intro-content-rightcard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
