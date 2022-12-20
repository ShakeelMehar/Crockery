/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Footer(props) {
    return (
        <div
            id="Footer"
            className="p-4 mt-10 mb-3 duration-300 border shadow-inner lg:px-12 hover:shadow-cyan-500/50 border-cyan-600">
            <div
                id="Footer-Inner"
                className="flex items-center justify-center w-full h-auto gap-2">
                <div className="flex flex-col justify-between w-full h-auto gap-8 text-white md:flex-row md:mx-2 md:items-center">
                    <div className="flex justify-between gap-16 ">
                        <div className="w-[8rem] sm:w-[9rem] md:w-[9rem] lg:w-[15rem]">
                            <ul className="space-y-1">
                                <li>
                                    <h1 className="text-xl font-semibold md:text-2xl">
                                        Useful Links
                                    </h1>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Categories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul className="mr-10 space-y-1 sm:mr-20 md:mr-0 mt-9">
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Gallery
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Testimonials
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4 w-[20rem] md:pl-4 text-left">
                        <div className="">
                            <ul>
                                <h1 className="text-xl font-semibold md:text-2xl">
                                    Contact
                                </h1>
                                <li>
                                    <a
                                        className="text-[0.8rem] md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        Walton Road, Lahore Cantt, 54000
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-[0.8rem] md:text-sm hover:border-b-2 hover:border-cyan-500"
                                        href="#">
                                        contact@shakeelcoder.com.pk (Demo)
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="text-xl font-semibold md:text-2xl">
                                Social Links
                            </h1>
                            <ul className="flex gap-4 py-2">
                                <li>
                                    <a href="#">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <ion-icon name="logo-github"></ion-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 md:ml-2">
                <p className="text-sm text-white">
                    © Copyrights 2023. Shakeel Crockery. All Rights Reserved
                </p>
            </div>
        </div>
    );
}
