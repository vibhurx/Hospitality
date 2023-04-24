import React from 'react'
import { AiFillPhone } from 'react-icons/ai';
import { GrMail } from 'react-icons/gr';
const Footer = () => {
    return (
        <div className='flex flex-col items-center w-full gap-6 p-8 text-white bg-blue'>
            <div>XYZ Hotels - India's Leading Hotel Chain</div>
            <div className='flex gap-10 '>
                <p className='flex items-center gap-1 vertical-align'>
                    <GrMail />
                    <a href=""> reservations@xyzhotel.com</a>
                </p>
                <p className='flex items-center gap-1'>
                    <AiFillPhone />
                    +91 9338 000 049 | Toll Free</p>
            </div>
        </div>
    )
}

export default Footer
