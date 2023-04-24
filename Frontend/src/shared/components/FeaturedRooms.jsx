import React from "react";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { useQuery } from "react-query";
import { IMAGES } from "../../assets";
import { getFeatureIcon } from "../../data";
// import { rooms } from "../../data";
import { getSearchedRooms } from "../../utils/services/searchquery";
import RoomCard from "./RoomCard";
import { rooms } from "../../data";
import { CircularProgress } from "@mui/material";

const FeaturedRooms = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    [],
    getSearchedRooms
  );
  console.log(data?.data);
  // if(isError){
  //   data=rooms;
  // }
  return (
    <div className="flex flex-col gap-y-8">
      <div className="pt-16 text-center">
        <div className="font-tertiary text-[15px] uppercase tracking-[6px]">
          Hotel & Spa
        </div>
        <h2 className="mb-4 font-primary text-[32px] lg:text-[45px]">
          Featured Rooms
        </h2>
      </div>
      {data ? (
        <div>
          {data?.data?.map((room) => {
            return <RoomCard room={room} key={room.room_id} />;
          })}
        </div>
      ) : isLoading ? (
        <div className="dona-loader">
          {/* <CircularProgress color="blue" /> */}
          <p>Loading...</p>
        </div>
      ) : (
        <div className="dona-loader">
          <p>No data.</p>
        </div>
      )}
    </div>
  );
};

export default FeaturedRooms;
