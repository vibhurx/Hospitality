import React, { createContext, useState, useReducer } from "react";

export const RoomContext = createContext();

let initialSearchPayload = {
  checkin_date: "",
  checkout_date: "",
  total_persons: 1,
}

const searchPayloadReducer = ( state, action ) => {
  switch ( action.type ) {
    case 'checkin_date':
      return {
        ...state,
        [ action.type ]: action.value
      }
    case 'checkout_date':
      return {
        ...state,
        [ action.type ]: action.value
      }
    case 'total_persons':
      return {
        ...state,
        [ action.type ]: action.value
      }
    default:
      return state;
  }
}

const ContextProvider = ( { children } ) => {
  const [ searchPaylaod, dispatchSeachPayload ] = useReducer( searchPayloadReducer, initialSearchPayload );
  let values = { searchPaylaod, dispatchSeachPayload }
  return (
    <RoomContext.Provider value={ values }>
      { children }
    </RoomContext.Provider>
  );
};

export default ContextProvider;
