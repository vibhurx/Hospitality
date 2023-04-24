import React, { useReducer, useState } from 'react'
// import Image from './your-image.jpg';
const currentState = 0;
const reducer = ( state, action ) => {
    switch ( action ) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        case 'reset':
            return 0;
        default:
            return state;
    }
}
const Blogs = () => {

    const [ count, dispatch ] = useReducer( reducer, currentState )

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='mb-8 text-3xl font-bold text-center text-gray-700'>This is Blogs Page</div>
            <div>{ count }<br /></div>
            <button onClick={ () => dispatch( 'increment' ) }>Increment</button>
            <button onClick={ () => dispatch( 'decrement' ) }>Decrement</button>
            <button onClick={ () => dispatch( 'reset' ) }>Reset</button>
        </div>
        // "https://source.unsplash.com/featured/?hotel

    )
}

export default Blogs
