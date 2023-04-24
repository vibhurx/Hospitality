import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../utils/constant';
import { rooms as roomsData } from "../utils/data/staticData";

const RoomBooking = () => {
    const [ room, setRoom ] = useState();
    const navigate = useNavigate();
    const [ payment, setPayment ] = useState( "started" );
    const queryParams = new URLSearchParams( window.location.search )
    const roomId = queryParams.get( "room-id" )
    const getAllRooms = async () => {
        let response = await axios.get( "https://team3-function-app.azurewebsites.net/api/searchFunction?" )
        if ( response ) {
            console.log( "Response 1===> ", response );
            let rooms = roomsData.map( ( room, i ) => {
                return {
                    ...room,
                    room_id: response?.data[ i ]?.room_id,
                    price: response?.data[ i ]?.price,
                }
            } )
            console.log( "Response 2===> ", rooms );
            let rooom = rooms.filter( ( room, i ) => room.room_id == roomId )
            rooom = rooom[ 0 ]
            console.log( rooom );
            setRoom( rooom )
        }
    }
    useEffect( () => {
        getAllRooms();
    }, [] );

    const handlePay = async () => {
        let response = await axios.get( `https://team3-function-app.azurewebsites.net/api/updateStatus?id=${ room.room_id }` );
        if ( response ) {
            setPayment( "success" );
        }
    }
    return (
        // <div className='flex items-center justify-center w-full h-screen'>
        //     <div className='mb-8 text-3xl font-bold text-center text-gray-700'>Creating Booking for Room No. { roomId }</div>
        // </div>
        <div>
            {
                ( payment == "started" && room ) ? (
                    <div className='flex px-[15rem] gap-[10rem]'>
                        <div className='h-[30rem] w-[30rem]'>
                            <img className='w-full h-full' src={ room.images[ 0 ] } alt="" />
                        </div>
                        <div className=' flex gap-y-[2rem] flex-col justify-center'>
                            <h3 className='w-full text-base text-center font-500 text-[1.4rem]'>Billing Summary</h3>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Room Id </div>
                                <div> { room.room_id }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Capacity</div>
                                <div> { room.capacity }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Price</div>
                                <div> { room.price }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Size</div>
                                <div> { room.size }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] '>
                                <button className="w-full px-4 py-2 font-bold text-white rounded bg-blue hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={ handlePay }>
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                ) : ( payment == "success" ) ? (
                    <div className='flex px-[15rem] gap-[10rem]'>
                        <div className='h-[30rem] w-[30rem] flex items-center justify-center text-center'>
                            <h1 className='text-[2rem] font-bold'>
                                Payment is completed Successfully
                            </h1>
                        </div>
                        <div className=' flex gap-y-[2rem] flex-col justify-center'>
                            <h3 className='w-full text-base text-center font-500 text-[1.4rem]'>Your room details</h3>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Room Id </div>
                                <div> { room.room_id }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Capacity</div>
                                <div> { room.capacity }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Price</div>
                                <div> { room.price }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] text-[1.2rem]'>
                                <div className='w-[8rem]'> Size</div>
                                <div> { room.size }</div>
                            </div>
                            <div className='flex gap-x-20 gap-[2rem] '>
                                <button className="w-full px-4 py-2 font-bold text-white rounded bg-blue hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={ () => navigate( ROUTES.HOME ) }>
                                    Back to Home Page
                                </button>
                            </div>
                        </div>
                    </div>
                ) : ( null )
            }
        </div>
    )
}

export default RoomBooking
