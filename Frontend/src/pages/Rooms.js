import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RoomCard from '../shared/components/RoomCard';
import { rooms as roomsData } from "../utils/data/staticData";

import { FiWifi, FiTv } from 'react-icons/fi';
import { AiFillStar, AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { IMAGES } from '../assets';
import { ROUTES } from '../utils/constant';
import Navbar from '../shared/components/Navbar';
import { getSearchedRooms } from '../utils/services/searchquery';
import { useQuery } from 'react-query';
const Rooms = () => {
    const navigate = useNavigate();
    const [ hoomRoomId, setHoomRoomId ] = useState();
    // const [ rooms, setRooms ] = useState( [] );

    const getFeatureIcon = ( feature ) => {
        switch ( feature ) {
            case "Free cancellation": return <AiOutlineCheckCircle className="mr-1 text-blue" />
            case "Free Wi-Fi": return <FiWifi className="mr-1 text-blue" />
            case "Flat-screen TV": return <FiTv className="mr-1 text-blue" />
            default: return <AiOutlineCheckCircle className="mr-1 text-blue" />
        }
    }
    // const getAllRooms = async () => {
    //     let response = await axios.get( "https://team3-function-app.azurewebsites.net/api/searchFunction?" )
    //     if ( response ) {
    //         console.log( "Response 1===> ", response );
    //         let rooms = roomsData.map( ( room, i ) => {
    //             return {
    //                 ...room,
    //                 room_id: response?.data[ i ]?.room_id,
    //                 price: response?.data[ i ]?.price,
    //             }
    //         } )
    //         console.log( "Response 2===> ", rooms );
    //         // setRooms( rooms )
    //     }
    // }
    let rooms = [
        {
            room_id: 1101,
            category_id: "CAT1",
            category: "Noraml Room",
            title: "Emirates Palace",
            location: "Near Akshaypatra, Jagatpura, Jaipur",
            areaCovered: 245,
            avg_Rating: 2.5,
            // imagePath: ,
            features: [
                "Free cancellation",
                "Free Wi-Fi",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
            ],
            discountPercentage: 30,
            price: 1000,
            sleepCount: 2,
            ratings: [
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
            ],
        },
        {
            room_id: 2101,
            category_id: "CAT2",
            category: "Deluxe Room",
            title: "Emirates Palace",
            location: "Near Akshaypatra, Jagatpura, Jaipur",
            features: [
                "Free cancellation",
                "Free Wi-Fi",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
            ],
            areaCovered: 184,
            avg_Rating: 4.5,
            sleepCount: 3,
            ratings: [
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
            ],
            discountPercentage: 20,
            price: 2000
        },
        {
            room_id: 3101,
            category_id: "CAT3",
            category: "Super Deluxe Room",
            title: "Emirates Palace",
            location: "Near Akshaypatra, Jagatpura, Jaipur",
            features: [
                "Free cancellation",
                "Free Wi-Fi",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
                "Flat-screen TV",
            ],
            areaCovered: 234,
            avg_Rating: 3.5,
            sleepCount: 3,
            ratings: [
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
                {
                    userName: "Demo Rating",
                    rating: 3,
                },
            ],
            discountPercentage: 15,
            price: 3000
        }
    ];

    const getRoomDetails = ( roomId ) => {
        navigate( `${ ROUTES.SINGLEROOM }?room-id=${ roomId }` )
    }

    const checkBookingStatus = () => {
        return "available"
    }
    const handleBookNow = ( roomId ) => {
        let status = checkBookingStatus();
        if ( status = "available" ) {
            navigate( `${ ROUTES.ROOMBOOKING }?room-id=${ roomId }` )
        }
    }
    return (
        <>
            {/* <Navbar /> */}


            <div className="w-full pt-6">
                <div className="flex items-center justify-center w-full p-2 bg-gray-200 rounded-full">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border-2 border-blue focus:outline-none w-[30%]"
                    />
                    <button className="px-4 py-2 font-bold text-white border-2 border-blue bg-blue hover:bg-gray-600 w-[9%]">
                        <i className="fas fa-search" />
                        Search
                    </button>
                </div>
                <div className='flex flex-col items-center justify-center py-8 align-middle gap-y-8'>
                    { rooms.map( ( room, i ) => {
                        return (
                            <div id={ room?.room_id } className="flex px-6 py-4 bg-white rounded-md shadow-md">
                                <div className="flex-shrink-0">
                                    {/* IMAGES.ROOMS[ `ROOM${ i + 1 }` ] */ }
                                    <img src={ IMAGES.ROOMS[ `ROOM${ i + 1 }` ] } alt="Room" className="rounded-md w-[22rem] h-60" />
                                </div>
                                <div className="flex flex-col justify-between flex-grow ml-6 ">
                                    <div>
                                        <h3 className="text-2xl font-semibold">{ room?.title }</h3>
                                        <div className='text-md'>
                                            { room?.location }
                                        </div>
                                        <div className='flex flex-col gap-2 py-6'>
                                            <div className='flex items-center justify-start gap-4'>
                                                {
                                                    room.features.map( ( feature, fi ) => (
                                                        <>
                                                            {
                                                                fi <= 2 && (
                                                                    <div className="flex items-center">
                                                                        { getFeatureIcon( feature ) }
                                                                        <p className="text-sm text-gray-500">{ feature }</p>
                                                                    </div>
                                                                )
                                                            }
                                                        </>
                                                    )
                                                    )
                                                }
                                                { room?.features?.length > 3 && (
                                                    <div className="flex items-center align-middle">
                                                        <AiOutlinePlus className="mr-1 text-xs" />
                                                        <p className="text-xs text-gray-500">{ room?.features?.length - 3 } more</p>
                                                    </div>
                                                )
                                                }
                                            </div>
                                            <div className='flex items-center gap-4 text-sm text-gray-500'>
                                                <div className='h-5 '>
                                                    Sleeps { room?.sleepCount }
                                                </div>|
                                                <div className=''>
                                                    { room?.areaCovered }ft² square feet
                                                </div>
                                                <div className='text-sm text-gray-500'>
                                                    <span className='text-md'>|</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Category: { room?.category }
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-9'>
                                                <div className="flex items-center gap-1">
                                                    <div className="flex items-center gap-1 py-[3px] px-1 mr-1 text-xs font-bold text-white rounded-md bg-yellowish hover:bg-yellowishHover">
                                                        <p>{ room.avg_Rating }</p>
                                                        <AiFillStar className="text-yellow-500" />
                                                    </div>
                                                    <p className="text-sm text-gray-500">({ room?.ratings?.length } Ratings)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-40">
                                        <div>
                                            <div className='flex items-center gap-4'>
                                                <h4 className="text-2xl font-bold text-red">₹{ room?.price - room?.price * ( room?.discountPercentage / 100 ) }</h4>
                                                <p className="text-gray-500 line-through text-md">₹{ room?.price }</p>
                                                <p className="text-sm text-green-500">{ room?.discountPercentage }% off</p>
                                            </div>
                                            <p className="mb-1 text-sm text-gray-500">per room per night</p>
                                        </div>
                                        <div>
                                            <button className="px-4 py-2 mr-2 font-semibold text-white border-2 rounded-md cursor-pointer border-blue bg-blue hover:bg-blueHover" onClick={ () => handleBookNow( room?.room_id ) }>
                                                Book Now
                                            </button>
                                            <button className="box-border px-4 py-2 font-semibold bg-transparent border-2 rounded-md cursor-pointer border-blue text-blue hover:bg-whitish" onClick={ () => getRoomDetails( room?.room_id ) }>
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } ) }
                </div>
            </div>
        </>
        // </div>
    )
}

export default Rooms
