/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Img1 from "./images/Shop/item1.jpg";
import Img2 from "./images/Shop/item2.jpg";
import Img3 from "./images/Shop/item3.jpg";
import Img4 from "./images/Shop/item4.jpg";

export default function Item(props) {
    return (
        <div className="mt-10 item">
            {/* Items Row 1 */}
            <div className="row-span-3 gap-8 product sm:flex sm:flex-wrap lg:gap-0 lg:flex lg:justify-between">
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105 "
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img3}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img4}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full  border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 1 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 space-y-2 h-auto p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img1}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Cream Set
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
                {/* <!-- Item 2 --> */}
                <div className="item1 w-full hidden lg:block border border-cyan-600 gap-2 shadow-inner duration-300 hover:shadow-cyan-500/50 h-auto space-y-2 p-3 mb-6 sm:w-[46.8%] text-white md:w-[30.2%] lg:w-[23%] xl:w-[18%]">
                    <div className="overflow-hidden item-pic ">
                        <img
                            className="object-cover w-full duration-500 transform hover:scale-105"
                            src={Img2}
                            alt=""
                        />
                    </div>
                    <div className="item-text">
                        <h1 className="text py-3 text-[21px] font-semibold">
                            Bone Soup Bowl
                        </h1>
                    </div>
                    <div>
                        <span>Set of 6 pcs in RS: 1000</span>
                    </div>
                    <div className="py-3 text-center item-btn hover:opacity-70 bg-cyan-600">
                        <a href="#" className="items-center font-semibold ">
                            Add to Cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
