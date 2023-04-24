import React from 'react'
import Images from '../shared/components/Images';
import Navbar from '../shared/components/Navbar';

const Gallery = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="w-[100vw] pt-12 pb-4 mx-auto ">
                <Images />
            </div>
        </>
    )
};

export default Gallery
