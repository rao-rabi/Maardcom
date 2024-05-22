import { useState } from "react";
import { CarPic } from "./Images";
const HeroSection = () => {
  const [search, setSearch] = useState({
    showroom: "",
    location: "",
  });

  const handleSearch = () => {
    console.log("search submit function");
  };

  return (
    <div className="text-white md:flex justify-between relative items-top max-w-7xl lg:mx-auto mx-5 min-h-full py-20">
      {/* headings and about us button */}
      <div className="md:mx-0 mx-5">
        <p className="text-[80px] font-[600] leading-[90px]">
          Find your <br /> dream car
        </p>
        <p className="text-base mt-14 leading-7">
          We are the largest luxury car company
          <br /> in Saudi Arabia
        </p>
        <button
          type="button"
          className="bg-transparent border-2 mt-14 p-2 px-4 text-base border-[#880ED3] rounded-lg"
        >
          About US
        </button>
      </div>
      {/* search */}
      <div className="bg-white h-fit rounded-md lg:mr-72 md:mt-0 mt-20">
        <form action="">
          <div className="">
            <div className="bg-[#F2F2F2] rounded-t-md py-2 text-black px-2">
              <p className="font-base font-semibold px-10 text-center">
                Find Your Desired Car Here
              </p>
            </div>
            <div className="p-4 flex flex-col text-black">
              <input
                type="search"
                placeholder="Search By Showroom"
                value={search.showroom}
                onChange={(e) => {
                  setSearch((prevState) => ({
                    ...prevState,
                    showroom: e.target.value,
                  }));
                }}
                className="rounded-md p-3 border outline-0 w-full placeholder:text-[#878787] placeholder:text-xs border-[#878787]"
              />
              <input
                type="search"
                placeholder="Search By Location"
                value={search.location}
                onChange={(e) => {
                  setSearch((prevState) => ({
                    ...prevState,
                    location: e.target.value,
                  }));
                }}
                className="rounded-md p-3 border outline-0 w-full placeholder:text-[#878787] mt-5 placeholder:text-xs border-[#878787]"
              />
            </div>
            <div className="flex items-center justify-around py-2">
              <a href="#" className="text-[#878787] text-xs underline">
                Advanced Search
              </a>
              <button
                type="submit"
                onClick={() => handleSearch()}
                className="bg-[#880ED3] rounded-lg text-xs font-medium px-5 py-2 text-white"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* car image */}
      <img
        src={CarPic}
        alt="Car"
        className="absolute object-contain lg:top-[55%] md:top-[70%] top-[90%] lg:left-[25%] md:left-[10%] left-0"
      />
    </div>
  );
};

export default HeroSection;
