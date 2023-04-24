import React from 'react'
import Navbar from '../shared/components/Navbar'

const AboutUs = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="flex flex-col items-center pt-[4rem]">
                {/* <h1 className="mb-5 text-2xl font-bold">About Us</h1> */ }
                <div className="w-full p-10 bg-white rounded-lg lg:w-3/4">
                    <section className="mb-10">
                        <h2 className="mb-5 text-xl font-bold">Our Story</h2>
                        <p className="text-base leading-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
                            commodo tempor. Curabitur commodo aliquet dolor, eget tincidunt magna
                            pharetra a. Maecenas vestibulum quam vel augue placerat, eget pellentesque
                            nisi malesuada. Nulla facilisi.
                        </p>
                    </section>
                    <section className="mb-10">
                        <h2 className="mb-5 text-xl font-bold">Our Mission</h2>
                        <p className="text-base leading-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
                            commodo tempor. Curabitur commodo aliquet dolor, eget tincidunt magna
                            pharetra a. Maecenas vestibulum quam vel augue placerat, eget pellentesque
                            nisi malesuada. Nulla facilisi.
                        </p>
                    </section>
                    <section className="mb-10">
                        <h2 className="mb-5 text-xl font-bold">Our Values</h2>
                        <ul className="pl-5 text-base leading-normal list-disc">
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Sed do eiusmod tempor incididunt</li>
                            <li>Ut labore et dolore magna aliqua</li>
                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default AboutUs
