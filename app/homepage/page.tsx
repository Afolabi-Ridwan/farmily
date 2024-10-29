import Image from "next/image";
import logo from "@/public/images/Frame 429.svg";
import searchIcon from "@/public/images/iconamoon_search.png";
const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={logo} alt="logo" className="w-96 " />
      <div className="w-[400px] h-[50px] mt-8 relative">
        <input placeholder="Search Products in Farmily" className="input shadow-custom-bottom-right" />
        <Image src={searchIcon} alt="searchIcon" className="absolute top-[25%] right-4" />
      </div>
    </div>
  );
};

export default Homepage;
