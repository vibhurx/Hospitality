import React from "react";
import FeaturedRooms from "../shared/components/FeaturedRooms";
import HeroSlider from "../shared/components/HeroSlider";
import HomeNav from "../shared/components/HomeNav";
import Navbar from "../shared/components/Navbar";
import SearchForm from "../shared/components/SearchForm";

const Home = () => {
  return (
    <>
      <HomeNav />
      <div className="flex flex-col items-center">
        <HeroSlider />
        <div className="w-[90vw] sm:w-[80vw] lg:w-[75%] pt-[3rem]">
          <div className="flex justify-center gap-3 py-4">
            <div className="font-tertiary text-[15px] uppercase tracking-[6px] underline decoration-solid underline-offset-8">
              Search
            </div>
            <div className="font-tertiary text-[15px] uppercase tracking-[6px] underline decoration-solid underline-offset-8">
              for
            </div>
            <div className="font-tertiary text-[15px] uppercase tracking-[6px] underline decoration-solid underline-offset-8">
              Rooms
            </div>
          </div>
          <div className="rounded-lg sm:shadow-md ">
            <SearchForm />
          </div>
        </div>
        <div className="xl:w-3/4 py-4 md:w-[90%]  xs:w-[70%] 2xs:w-[90%]">
          <FeaturedRooms />
        </div>
      </div>
    </>
  );
};

export default Home;
