import React from "react";
import feedImg from "./images/Shop/FeedB.jpg";

// import Swiper core and required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function FeedBack() {
    return (
        <div
            id="Feed"
            className="p-6 my-12 duration-300 border shadow-inner hover:shadow-cyan-500/50 border-cyan-600">
            <div
                id="Feed-Inner"
                className="flex flex-col items-center justify-between w-full px-4 md:flex-row">
                <div
                    id="Feed-Img"
                    className="h-auto  overflow-hidden w-full sm:w-[30rem]">
                    <img src={feedImg} alt="" className="w-auto h-full" />
                </div>
                <div
                    id="Feed-Slider"
                    className="h-auto w-[28rem] md:px-6 sm:w-[40rem] overflow-hidden  lg:w-[60rem]">
                    <div className="hidden lg:block">
                        {/* Large Screen Slider */}
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            slidesPerView={2}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[EffectFade, Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="h-[15rem] items-center justify-center space-x-4 p-4 flex w-[30rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Ahmad
                                        </h1>
                                        <p className="font-normal text-white">
                                            Designer and customised range of products
                                            available. Loved the overall purchase.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[15rem] items-center justify-center space-x-4 p-4 flex w-[30rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Ahmad
                                        </h1>
                                        <p className="font-normal text-white">
                                            Designer and customised range of products
                                            available. Loved the overall purchase.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[15rem] items-center justify-center space-x-4 p-4 flex w-[30rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Ahmad
                                        </h1>
                                        <p className="font-normal text-white">
                                            Designer and customised range of products
                                            available. Loved the overall purchase.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[15rem] items-center justify-center space-x-4 p-4 flex w-[30rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Ahmad
                                        </h1>
                                        <p className="font-normal text-white">
                                            Designer and customised range of products
                                            available. Loved the overall purchase.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* Mobile Slider */}
                    <div className="items-center justify-center block lg:hidden">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            slidesPerView={1}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[EffectFade, Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="h-[15rem] items-center space-x-4 justify-center  m-auto p-4 flex w-[24rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Shakeel
                                        </h1>
                                        <p className="font-normal text-white">
                                            They have the best kitchen ware crockery
                                            material.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[15rem] items-center space-x-4 justify-center m-auto p-4 flex w-[24rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Ahmad
                                        </h1>
                                        <p className="font-normal text-white">
                                            Designer and customised range of products
                                            available. Loved the overall purchase.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[15rem] items-center space-x-4 justify-center  m-auto p-4 flex w-[24rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Shakeel
                                        </h1>
                                        <p className="font-normal text-white">
                                            They have the best kitchen ware crockery
                                            material.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-[15rem] items-center space-x-4 justify-center m-auto p-4 flex w-[24rem]  ">
                                    <div className="w-16 py-3 mb-8 h-28">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-quote"
                                            width={70}
                                            height={70}
                                            viewBox="0 0 24 24"
                                            stroke-width={2}
                                            stroke="#00B4D2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round">
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                                fill="none"></path>
                                            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                                        </svg>
                                    </div>
                                    <div className="mt-2 space-y-4 w-80 h-28">
                                        <h1 className="text-3xl font-bold text-white ">
                                            Ahmad
                                        </h1>
                                        <p className="font-normal text-white">
                                            Designer and customised range of products
                                            available. Loved the overall purchase.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
