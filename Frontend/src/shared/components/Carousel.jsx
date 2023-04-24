import { useState, useRef, useEffect, useContext } from 'react';
import { resources } from "../../utils/data/data";
import { RoomContext } from '../contexts/ContextProvider';

const Carousel = () => {
    const maxScrollWidth = useRef( 0 );
    const [ currentIndex, setCurrentIndex ] = useState( 0 );
    const carousel = useRef( null );

    const movePrev = () => {
        if ( currentIndex > 0 ) {
            setCurrentIndex( ( prevState ) => prevState - 1 );
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex( ( prevState ) => prevState + 1 );
        }
    };

    const isDisabled = ( direction ) => {
        if ( direction === 'prev' ) {
            return currentIndex <= 0;
        }

        if ( direction === 'next' && carousel.current !== null ) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect( () => {
        if ( carousel !== null && carousel.current !== null ) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [ currentIndex ] );

    useEffect( () => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, [] );

    return (
        <div className="w-full mx-auto carousel">
            <div className="relative overflow-hidden ">
                <div className="absolute flex justify-between w-full h-full top left ">
                    <button
                        onClick={ movePrev }
                        className="z-10 w-10 h-full p-0 m-0 text-center transition-all duration-300 ease-in-out opacity-75 hover:bg-blue-900/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
                        disabled={ isDisabled( 'prev' ) }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-12 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={ 2 }
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={ moveNext }
                        className="z-10 w-10 h-full p-0 m-0 text-center transition-all duration-300 ease-in-out opacity-75 hover:bg-blue-900/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed"
                        disabled={ isDisabled( 'next' ) }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-20 h-12 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={ 2 }
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={ carousel }
                    className="relative z-0 flex gap-1 overflow-hidden carousel-container scroll-smooth snap-x snap-mandatory touch-pan-x h-[65vh] "
                >
                    { resources.map( ( resource, index ) => {
                        return (
                            <div
                                key={ index }
                                className="relative w-[100vw] h-full text-center carousel-item snap-start"
                            >
                                <div
                                    className="z-0 block w-[100vw] h-full bg-left-top bg-no-repeat bg-cover aspect-square bg-origin-padding"
                                >
                                    <img
                                        src={ resource.imageUrl || '' }
                                        alt={ resource.title }
                                        className="w-full h-full aspect-square "
                                    />
                                </div>
                                <div
                                    className="absolute top-0 left-0 z-10 block w-full h-full transition-opacity duration-300 opacity-0 aspect-square hover:opacity-100 bg-blue-800/75"
                                >
                                    <h3 className="absolute flex justify-center w-full px-3 py-6 text-xl bottom-4">
                                        { resource.title }
                                    </h3>
                                </div>
                            </div>
                        );
                    } ) }
                </div>
            </div>
        </div>
    );
};

export default Carousel;