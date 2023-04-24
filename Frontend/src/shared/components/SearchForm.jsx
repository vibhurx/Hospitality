import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constant";
import { RoomContext } from "../contexts/ContextProvider";

export default function SearchForm() {
  const { searchPaylaod, dispatchSeachPayload } = useContext( RoomContext )
  const navigate = useNavigate();

  const handleChange = ( e ) => {
    dispatchSeachPayload( {
      type: e.target.name,
      value: e.target.value
    } )
  };

  const handleSubmit = ( event ) => {
    event.preventDefault();
    let { checkin_date, checkout_date, total_persons } = searchPaylaod;
    console.log( `Check-in date: ${ checkin_date }` );
    console.log( `Check-out date: ${ checkout_date }` );
    console.log( `Number of persons: ${ total_persons }` );
    if ( checkin_date && checkout_date && total_persons ) {
      if ( checkin_date <= checkout_date ) {
        console.log( "Form is validated." );
        navigate( `${ ROUTES.SEARCH }?checkin_date=${ new Date( checkin_date ) }&checkout_date=${ new Date( checkout_date ) }&total_persons=${ total_persons }` );
      } else {
        console.log( "Invalid Form details. Form cannot be submitted." );
      }
    }
  };

  return (
    <form
      onSubmit={ handleSubmit }
      className="flex lg:flex-row flex-col w-full gap-4 p-6 bg-gray-100 item-center"
    >
      <div className="flex lg:flex-row flex-col w-full gap-4 ">
        <div className="w-full">
          <label
            htmlFor="checkinDate"
            className="block w-full mb-1 text-sm "
          >
            Check-in Date
          </label>
          <input
            type="date"
            className="w-full h-[3rem] appearance-none border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue"
            name="checkin_date"
            value={ searchPaylaod?.checkin_date }
            onChange={ handleChange }
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="checkoutDate"
            className="block w-full mb-1 text-sm "
          >
            Check-out Date
          </label>
          <input
            type="date"
            className="h-[3rem] appearance-none border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue w-full "
            name="checkout_date"
            value={ searchPaylaod?.checkout_date }
            onChange={ handleChange }
            required
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="numPersons"
            className="block w-full mb-1 text-sm "
          >
            Number of Persons
          </label>
          <input
            type="number"
            className="h-[3rem] appearance-none border rounded-md py-2 px-3 leading-tight focus:outline-none focus:border-blue w-full "
            name="total_persons"
            value={ searchPaylaod?.total_persons }
            onChange={ handleChange }
            min="1"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="h-[3.1rem] mt-[1.4rem] py-2 px-4 bg-blue hover:bg-blueHover text-white font-medium rounded-md transition-colors duration-300 lg:w-1/4"
      >
        Search
      </button>
    </form>
  );
}
