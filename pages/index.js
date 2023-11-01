import Intro from "@/components/intro";
import Search from "@/components/search";
import SunIcon from "@/public/icons/sun.svg";

const index = () => {
  return (
    <div>
      <Intro />
      <Search icon={SunIcon} value={"Results"} />
    </div>
  );
};

export default index;
