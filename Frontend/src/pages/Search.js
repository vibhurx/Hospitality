import React, { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../assets";
import { getFeatureIcon, rooms } from "../data";
import Navbar from "../shared/components/Navbar";
import RoomCard from "../shared/components/RoomCard";
import SearchForm from "../shared/components/SearchForm";
import { RoomContext } from "../shared/contexts/ContextProvider";
import { ROUTES } from "../utils/constant";
import { getSearchedRooms } from "../utils/services/searchquery";
const Search = () => {
  let navigate = useNavigate();
  const { searchPaylaod } = useContext(RoomContext);

  const { isLoading, isError, data, error, refetch } = useQuery(
    [searchPaylaod],
    getSearchedRooms
  );
  console.log(data?.data);

  return (
    <>
      {/* <Navbar /> */}
      <div className="w-full  pt-24 md:px-3 xl:px-48">
        <SearchForm />
        <div className="flex flex-col py-8 gap-y-8">
          {data?.data?.map((room) => {
            return <RoomCard room={room} key={room.room_id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Search;
