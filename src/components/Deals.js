/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import deal1 from "./images/Shop/deal1.jpeg";
import deal2 from "./images/Shop/deal2.jpeg";
import deal3 from "./images/Shop/deal3.jpg";
import deal4 from "./images/Shop/deal4.jpeg";
import deal5 from "./images/Shop/deal5.jpg";

export default function Deals(props) {
    return (
        <div className="w-full mt-6   shadow-inner duration-300 hover:shadow-cyan-500/50 bg-cyan-900">
            <div className="h-auto hidden md:block">
                <Swiper
                    className=""
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}>
                    <SwiperSlide className="p-4">
                        <div className="flex justify-between  overflow-hidden pl-2  h-auto bg-cyan-800 w-[25rem] md:w-[28rem] lg:w-[30rem]  items-center">
                            <div>
                                <h1 className="text-cyan-400 py-1 text-4xl">Hot Deal</h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div>
                                <img
                                    className="rounded-r-lg h-auto w-60"
                                    src={deal1}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                        <div className="flex justify-between overflow-hidden pl-2 h-auto bg-cyan-800 w-[25rem] md:w-[28rem] lg:w-[30rem]  items-center">
                            <div>
                                <h1 className="text-cyan-400 py-1 text-4xl">Hot Deal</h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div>
                                <img
                                    className="rounded-r-lg h-auto w-60"
                                    src={deal2}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                        <div className="flex justify-between  overflow-hidden pl-2  h-auto bg-cyan-800 w-[25rem] md:w-[28rem] lg:w-[30rem]  items-center">
                            <div>
                                <h1 className="text-cyan-400 py-1 text-4xl">Hot Deal</h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div>
                                <img
                                    className="rounded-r-lg h-auto w-60"
                                    src={deal1}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                        <div className="flex justify-between overflow-hidden pl-2 h-auto bg-cyan-800 w-[25rem] md:w-[28rem] lg:w-[30rem]  items-center">
                            <div>
                                <h1 className="text-cyan-400 py-1 text-4xl">Hot Deal</h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div>
                                <img
                                    className="rounded-r-lg h-auto w-60"
                                    src={deal2}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                        <div className="flex justify-between  overflow-hidden pl-2  h-auto bg-cyan-800 w-[25rem] md:w-[28rem] lg:w-[30rem]  items-center">
                            <div>
                                <h1 className="text-cyan-400 py-1 text-4xl">Hot Deal</h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div>
                                <img
                                    className="rounded-r-lg h-auto w-60"
                                    src={deal1}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="p-4">
                        <div className="flex justify-between overflow-hidden pl-2 h-auto bg-cyan-800 w-[25rem] md:w-[28rem] lg:w-[30rem]  items-center">
                            <div>
                                <h1 className="text-cyan-400 py-1 text-4xl">Hot Deal</h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div>
                                <img
                                    className="rounded-r-lg h-auto w-60"
                                    src={deal2}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            {/* Mobile Width  Deals Section*/}
            <div className="h-auto md:hidden block">
                <Swiper
                    className=""
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={0}
                    slidesPerView={2}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}>
                    <SwiperSlide>
                        <div className="flex justify-between pl-2 h-auto bg-cyan-800 w-full  items-center">
                            <div className="w-[40%] sm:space-y-4 sm:pl-8">
                                <h1 className="text-slate-900 font-bold py-1 text-4xl">
                                    Hot Deal
                                </h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div className="w-[60%]">
                                <img
                                    className="rounded-r-lg h-auto w-auto"
                                    src={deal3}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-between pl-2 h-max bg-cyan-800 w-full  items-center">
                            <div className="w-[40%] sm:space-y-4 sm:pl-8">
                                <h1 className="text-slate-900 font-bold py-1 text-4xl">
                                    Hot Deal
                                </h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div className="w-[60%]">
                                <img
                                    className="rounded-r-lg h-auto w-auto"
                                    src={deal4}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-between pl-2 h-auto bg-cyan-800 w-full  items-center">
                            <div className="w-[40%] sm:space-y-4 sm:pl-8">
                                <h1 className="text-slate-900 font-bold py-1 text-4xl">
                                    Hot Deal
                                </h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div className="w-[60%]">
                                <img
                                    className="rounded-r-lg h-auto w-auto"
                                    src={deal5}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-between pl-2 h-max bg-cyan-800 w-full  items-center">
                            <div className="w-[40%] sm:space-y-4 sm:pl-8">
                                <h1 className="text-slate-900 font-bold py-1 text-4xl">
                                    Hot Deal
                                </h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div className="w-[60%]">
                                <img
                                    className="rounded-r-lg h-auto w-auto"
                                    src={deal1}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-between pl-2 h-auto bg-cyan-800 w-full  items-center">
                            <div className="w-[40%] sm:space-y-4 sm:pl-8">
                                <h1 className="text-slate-900 font-bold py-1 text-4xl">
                                    Hot Deal
                                </h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div className="w-[60%]">
                                <img
                                    className="rounded-r-lg h-auto w-auto"
                                    src={deal1}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-between pl-2 h-max bg-cyan-800 w-full  items-center">
                            <div className="w-[40%] sm:space-y-4 sm:pl-8">
                                <h1 className="text-slate-900 font-bold py-1 text-4xl">
                                    Hot Deal
                                </h1>
                                <h1 className="text-cyan-400 pb-4 text-xl">30% OFF</h1>
                                <a
                                    className="text-white text-xl duration-75 hover:border-b-2 hover:border-cyan-500"
                                    href="#">
                                    Shop Now
                                </a>
                            </div>
                            <div className="w-[60%]">
                                <img
                                    className="rounded-r-lg h-auto w-auto"
                                    src={deal1}
                                    alt="Image 1"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
