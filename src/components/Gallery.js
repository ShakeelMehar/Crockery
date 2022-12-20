/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Img1 from "./images/Shop/deal1.jpeg";
import Img2 from "./images/Shop/deal2.jpeg";
import Img3 from "./images/Shop/deal3.jpg";
import Img4 from "./images/Shop/deal4.jpeg";

export default function Gallery(props) {
    return (
        <div id="Gallery-Section" className="mt-10 item">
            <div className="w-full h-12 my-8 text-center">
                <h1 className="text-4xl font-bold lg:text-6xl text-cyan-500">Gallery</h1>
            </div>
            {/* Items Row 1 */}
            <div className="row-span-3 gap-4 product sm:flex sm:flex-wrap lg:gap-0 lg:flex lg:justify-between">
                {/* <!-- Item 1 --> */}
                <div className="item1 overflow-hidden w-full  border border-cyan-600  shadow-inner duration-300 hover:shadow-cyan-500/50  h-80 p-3  sm:w-[48%] text-white mb-4 lg:w-[48%] xl:w-[49%]">
                    <div className="overflow-hidden  item-pic">
                        <img
                            className="object-cover w-full h-[18.5rem] duration-300  transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 overflow-hidden w-full  border border-cyan-600  shadow-inner duration-300 hover:shadow-cyan-500/50 h-80  p-3  sm:w-[48%] text-white mb-4 lg:w-[48%] xl:w-[49%]">
                    <div className="overflow-hidden  item-pic">
                        <img
                            className="object-cover w-full h-[18.5rem] duration-300  transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 overflow-hidden w-full  border border-cyan-600  shadow-inner duration-300 hover:shadow-cyan-500/50  h-80 p-3  sm:w-[48%] text-white mb-4 lg:w-[48%] xl:w-[49%]">
                    <div className="overflow-hidden  item-pic">
                        <img
                            className="object-cover w-full h-[18.5rem] duration-300  transform hover:scale-105"
                            src={Img3}
                            alt=""
                        />
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 overflow-hidden w-full  border border-cyan-600  shadow-inner duration-300 hover:shadow-cyan-500/50 h-80  p-3  sm:w-[48%] text-white mb-4 lg:w-[48%] xl:w-[49%]">
                    <div className="overflow-hidden  item-pic">
                        <img
                            className="object-cover w-full h-[18.5rem] duration-300  transform hover:scale-105"
                            src={Img4}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
