import React, { useContext } from "react";

// import swiper components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { IMAGES } from "../../assets";
import { RoomContext } from "../contexts/ContextProvider";

const slides = [
  {
    title: "Your Luxury Hotel For Vacation",
    background: IMAGES.CAROUSEL.CAROUSEL4,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  const { name } = useContext( RoomContext );


  return (
    <section className="hero w-[100vw]">
      <Swiper
        modules={ [ EffectFade, Autoplay ] }
        effect={ "fade" }
        loop={ true }
        autoplay={ {
          delay: 3000,
          disableOnInteraction: false,
        } }
        className="heroSlider h-[350px] md:h-[600px] lg:h-[860px]"
      >
        { slides.map( ( slide, index ) => {
          return (
            <SwiperSlide
              className="relative flex items-center justify-center h-full bg-pink-200"
              key={ index }
            >
              {/* hero data */ }
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] container z-20 mx-auto text-center text-white">
                {/* <div className="mb-5 font-tertiary uppercase tracking-[6px] drop-shadow-md	">
                  Just Enjoy & Relax
                </div> */}
                <h1 className="drop-shadow-md mb-6 m-auto max-w-[920px] font-primary uppercase tracking-[2px] lg:text-6xl md:text-4xl text-xl">
                  { slide?.title }
                </h1>
                <button className="mx-auto drop-shadow-md btn btn-primary btn-lg">
                  { slide?.btnText }
                </button>
              </div>

              {/* hero background */ }
              <div className="absolute top-0 left-0 w-full h-full">
                <img
                  src={ slide?.background }
                  alt="hero slide"
                  className="object-cover object-center w-full h-full"
                />
              </div>

              {/* hero overlay */ }
              <div className="absolute top-0 left-0 w-full h-full bg-black/50" />
            </SwiperSlide>
          );
        } ) }
      </Swiper>
    </section>
  );
};

export default HeroSlider;
