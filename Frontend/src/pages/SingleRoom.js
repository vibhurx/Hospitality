import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FiTv, FiWifi } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import SearchForm from "../shared/components/SearchForm";
import { getFeatureIcon } from "../utils/data/data";
import { rooms } from "../data";

const SingleRoom = () => {
  // const [ room, setRoom ] = useState();
  //   const navigate = useNavigate();
  //   const [payment, setPayment] = useState("started");
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const target_room_id = queryParams.get("room-id");

  //   const getFeatureIcon = (feature) => {
  //     switch (feature) {
  //       case "Free cancellation":
  //         return <AiOutlineCheckCircle className="mr-1 text-blue" />;
  //       case "Free Wi-Fi":
  //         return <FiWifi className="mr-1 text-blue" />;
  //       case "Flat-screen TV":
  //         return <FiTv className="mr-1 text-blue" />;
  //       default:
  //         return <AiOutlineCheckCircle className="mr-1 text-blue" />;
  //     }
  //   };

  //   const handlePay = async () => {
  //     // let response = await axios.post( "https://team3-function-app.azurewebsites.net/api/updateToReserved?", {
  //     //     data: JSON.stringify( { room_id: room.room_id } )
  //     // } );
  //     // if ( !response ) {
  //     console.log(payment);
  //     setPayment("success");
  //     // }
  //   };

 

  const defaultDescription =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea placeat eos sed voluptas unde veniam eligendi a. Quaerat molestiae hic omnis temporibus quos consequuntur nam voluptatum ea accusamus, corrupti nostrum eum placeat quibusdam quis beatae quae labore earum architecto aliquid debitis.";

  const defaultFeatures = [
    "Free cancellation",
    "Free Wi-Fi",
    "Flat-screen TV",
    "Flat-screen TV",
    "Flat-screen TV",
    "Flat-screen TV",
  ];
  //   let room;
  let room = rooms[0];
  //   rooms = rooms.filter((room) => {
  //     return room.room_id == target_room_id;
  //   });
  //   room = rooms[0];
  //   console.log(room, "333333333333333333#########");

  //   const checkBookingStatus = () => {
  //     return "available";
  //   };
  //   const handleBookNow = () => {
  //     let status = checkBookingStatus();
  //     if ((status = "available")) {
  //       navigate(`${ROUTES.ROOMBOOKING}?room-id=${target_room_id}`);
  //     }
  //   };

  return (
    // <div
    //   className="group min-h-[500px] bg-white shadow-2xl"
    //   key={room?.room_id}
    // >
    //   {/* rom image */}
    //   {/* <div className="overflow-hidden">
    //     <img
    //       src={room?.Images}
    //       alt="room image"
    //       className="w-full transition-all duration-300 group-hover:scale-110"
    //     />
    //   </div> */}

    //   {/* room info */}
    //   <div className="mx-auto flex h-[60px] max-w-[300px] -translate-y-1/2 items-center justify-center bg-white font-tertiary text-base font-semibold uppercase tracking-[1px] shadow-lg">
    //     <div className="flex w-[80%] items-center justify-between">
    //       {/* room sise */}
    //       <div className="flex items-center gap-2">
    //         <div className="text-accent">
    //           <BsArrowsFullscreen className="text-[15px]" />
    //         </div>

    //         <div className="flex items-center gap-1">
    //           <div>size</div>
    //           <div>{room?.area_covered}ft² square feet</div>
    //         </div>
    //       </div>

    //       {/* room capacity */}
    //       <div className="flex items-center gap-2">
    //         <div className="text-accent">
    //           <BsPeople className="text-[18px]" />
    //         </div>

    //         <div className="flex items-center gap-1">
    //           <div>max people</div>
    //           <div>{room?.sleep_count}</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* room name & description */}
    //   <div className="text-center">
    //     <Link to={`/room/${room?.room_id}`}>
    //       <h3 className="h3">{room?.category}</h3>
    //     </Link>
    //     <p className="mx-auto mb-3 max-w-[300px] lg:mb-6">
    //       {room?.description?.slice(0, 56) || defaultDescription}
    //     </p>
    //   </div>

    //   {/* room button */}
    //   <Link
    //     to={`/room/${room?.room_id}`}
    //     className="btn btn-secondary btn-sm mx-auto max-w-[240px]"
    //   >
    //     Book now from ₹
    //     {room?.price - room?.price * (room?.discount_percentage / 100)}
    //   </Link>
    // </div>
    <section>
      {/* room banner */}
      {/* <div className="relative flex h-[560px] items-center justify-center bg-room bg-cover bg-center"> */}
      {/* room overlay */}
      {/* <div className="absolute top-0 left-0 h-full w-full bg-black/50" /> */}

      {/* room title */}
      {/* <h1 className="z-20 text-center font-primary text-6xl text-white">
          {name} Details
        </h1>
      </div> */}

      {/* room data */}
      <div className="container mx-auto" key={room?.room_id}>
        <div className="flex h-full flex-col py-24 lg:flex-row">
          {/* data left */}
          <div className="h-full w-full px-6 lg:w-[60%]">
            <h2 className="mb-4 font-primary text-[45px]">
              {room?.category + " "} Room
            </h2>
            <p className="mb-8 pr-24">
              {room?.description || defaultDescription}
            </p>
            <img src={room?.Images} alt="room details" className="mb-8 pr-24" />

            {/* room facilities */}
            <SearchForm />
          </div>

          {/* data right */}
          <div className="h-full w-full lg:w-[40%]">
            {/* data reservation */}
            <div className="mb-12 bg-accent/20 py-8 px-6">
              <div className="mb-4 flex flex-col space-y-4">
                <h3>Your Reservation</h3>

                {/* <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div> */}
                <div className="mt-12">
                  <h3 className="h3 mb-3">Room Facilities</h3>
                  <p className="mb-12 text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Vero, adipisci aspernatur, nisi dolores iste perferendis
                    similique praesentium ullam tempore porro incidunt, facere
                    commodi. Porro voluptatem voluptatibus sit, culpa saepe
                    nostrum.
                  </p>

                  <div className="mb-12 grid grid-cols-3 gap-6">
                    {room?.features?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-1 items-center gap-x-3"
                        >
                          <div className="text-2xl text-accent">
                            {item?.icon}
                          </div>
                          <div className="text-base">{item?.name}</div>
                        </div>
                      );
                    }) ||
                      defaultFeatures?.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-1 items-center gap-x-1"
                          >
                            <div className="text-xl text-accent">
                              {getFeatureIcon(item)}
                            </div>
                            <div className="text-xs whitespace-nowrap">
                              {item}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>

              <button className="btn btn-lg btn-primary w-full">
                Book now from ${room?.price}
              </button>
            </div>

            {/* data hotel rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente, aliquid modi. Sed laudantium unde distinctio quas,
                repudiandae fuga veniam tempora, quae nobis quo dicta a.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleRoom;
