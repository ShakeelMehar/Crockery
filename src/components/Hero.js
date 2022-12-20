/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

// import Swiper core and required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import HeroImg1 from "./images/hero1.jpg";
import HeroImg2 from "./images/hero2.jpg";
import HeroImgSm1 from "./images/mobile3.jpeg";
import HeroImgSm2 from "./images/mobile4.jpeg";

export default function Hero(props) {
    return (
        <div className="w-full p-0 mt-6 duration-300 rounded-md shadow-lg hover:shadow-cyan-500/50 bg-cyan-900 hero">
            {/* Main Slider */}
            <div className="hidden sm:block">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectFade, Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src={HeroImg1} className="w-full h-full" alt="#" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HeroImg2} className="w-full h-full" alt="#" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HeroImg1} className="w-full h-full" alt="#" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={HeroImg2} className="w-full h-full" alt="#" />
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Mobile Slider */}
            <div className="sm:hidden overflow-hidden h-[64vh]">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[EffectFade, Autoplay, Pagination, Navigation]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div className="flex justify-center text-center ">
                            <img className="" src={HeroImgSm1} alt="Image 1" />
                            <div className="absolute space-y-16 mt-10 p2 w-[17rem]">
                                <h1 className="text-5xl font-bold text-slate-900">
                                    Beautifully Crafted
                                </h1>
                                <p className="text-base font-medium text-slate-700">
                                    Lorem ipsum dolor sit adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center text-center">
                            <img className="" src={HeroImgSm2} alt="Image 2" />
                            <div className="absolute space-y-16 mt-10 p2 w-[17rem]">
                                <h1 className="text-5xl font-bold text-teal-800">
                                    New Year Deal
                                </h1>
                                <p className="text-base font-medium text-teal-700">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

Hero.propTypes = {
    heroText: PropTypes.string,
};
