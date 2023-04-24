import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaWifi, FaAirbnb, FaDoorOpen, FaSoap, FaBed } from "react-icons/fa";
import { ROUTES } from "../../utils/constant";
import { IMAGES } from "../../assets";
import { AiFillStar, AiOutlinePlus } from "react-icons/ai";
import { getFeatureIcon } from "../../utils/data/data";

const RoomCard = ( { room } ) => {
  const [ hover, setHover ] = useState( false );
  const navigate = useNavigate();
  const discount = [ 10, 15, 20, 25, 30, 35 ];
  let randomNum = discount[ Math.floor( Math.random() * discount.length ) ];

  const getRoomDetails = ( roomId ) => {
    navigate( `${ ROUTES.SINGLEROOM }?room-id=${ roomId }` );
  };
  const features = [
    "Free cancellation",
    "Free Wi-Fi",
    "Flat-screen TV",
    "Flat-screen TV",
    "Flat-screen TV",
    "Flat-screen TV",
  ];

  return (
    <div
      key={ room?.room_id }
      id={ room?.room_id }
      className="flex flex-col px-3 py-2 bg-white rounded-md shadow-md sm:py-4 sm:px-6 md:flex-row"
    >
      <div className="md:flex-shrink-0 md:w-2/5">
        <img
          src={ room?.Images }
          alt="Room"
          className="object-cover w-full rounded-md md:h-60"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow w-full mt-4 ml-0 md:ml-6 md:mt-0">
        <div>
          <h3 className="text-2xl font-semibold">{ "Emirates Palace" }</h3>
          <div className="text-md">{ "Near Akshaypatra, Jagatpura, Jaipur" }</div>
          <div className="flex flex-col gap-2 py-6">
            <div className="flex flex-wrap items-center justify-start gap-x-4 gap-y-1">
              { features?.map( ( feature, fi ) => (
                <>
                  { fi <= 2 && (
                    <div className="flex items-center">
                      { getFeatureIcon( feature ) }
                      <p className="text-sm text-gray-500">{ feature }</p>
                    </div>
                  ) }
                </>
              ) ) }
              { features?.length > 3 && (
                <div className="flex items-center align-middle">
                  <AiOutlinePlus className="mr-1 text-xs" />
                  <p className="text-xs text-gray-500">
                    { features?.length - 3 } more
                  </p>
                </div>
              ) }
            </div>
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-x-4 gap-y-1 md:flex-row">
              <div className="h-5 md:mb-0">Sleeps { room?.sleepCount }</div>
              <div className=" md:mb-0">
                { room?.area_covered }ft² square feet
              </div>
              <div className="text-sm text-gray-500">
                &nbsp;Category: { room?.category }
              </div>
            </div>
            <div className="flex items-center gap-9">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1 py-[3px] px-1 mr-1 text-xs font-bold text-white rounded-md bg-yellowish hover:bg-yellowishHover">
                  <p>{ room?.avg_rating }</p>
                  <AiFillStar className="text-yellow-500" />
                </div>
                <p className="text-sm text-gray-500">
                  ({ room?.ratings?.length } Ratings)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col lg:flex-row justify-between md:mr-5">
          <div>
            <div className="flex items-center gap-4">
              <h4 className="text-2xl font-bold text-[#51a977]">
                ₹
                { room?.price -
                  room?.price * ( ( room?.discount_percentage ) / 100 ) }
              </h4>
              <p className="text-gray-500 line-through text-md">
                ₹{ room?.price }
              </p>
              <p className="text-sm text-green-500">
                { room?.discount_percentage }% off
              </p>
            </div>
            <p className="mb-1 text-sm text-gray-500">per room per night</p>
          </div>
          <div>
            <button className="px-4 py-2 mr-2 font-semibold text-white border-2 rounded-md cursor-pointer border-blue bg-blue hover:bg-blueHover">
              Book Now
            </button>
            <button
              onClick={ () => getRoomDetails( room?.room_id ) }
              className="box-border px-4 py-2 font-semibold bg-transparent border-2 rounded-md cursor-pointer border-blue text-blue hover:bg-whitish"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;