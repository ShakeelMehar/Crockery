/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    let [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col justify-center mb-4 ">
            <div className="flex items-center justify-between w-full h-12 px-3 mt-3 border navbar border-cyan-600 lg:px-8 xl:px-10 ">
                {/* <div className="absolute z-50 flex justify-center m-auto">
                    <input
                        type="search"
                        id="search-btn"
                        placeholder="Search Any Crockery "
                        className={`w-72 md:w-96  h-8 text-sm p-1 border focus:border-cyan-700 rounded-md px-3 ${
                            open ? "block " : ""
                        }`}
                    />
                </div> */}

                <div>
                    <a className="text-2xl font-semibold text-cyan-400" href="App.js">
                        {props.title}
                    </a>
                </div>
                <div className="hidden h-6 space-x-6 lg:flex lg:space-x-10 xl:space-x-12">
                    <a
                        className="text-white duration-75 hover:border-b-2 hover:border-cyan-500"
                        href="https://shakeelmehar.github.io/Crockery">
                        Home
                    </a>{" "}
                    <a
                        className="text-white duration-75 hover:border-b-2 hover:border-cyan-500"
                        href="#Gallery-Section">
                        Gallery
                    </a>{" "}
                    <a
                        className="text-white duration-75 hover:border-b-2 hover:border-cyan-500"
                        href="#About-Section">
                        About
                    </a>{" "}
                    <a
                        className="text-white duration-75 hover:border-b-2 hover:border-cyan-500"
                        href="#Contact-Section">
                        Contact
                    </a>{" "}
                </div>
                <div className="flex justify-center h-6 space-x-6 menu lg:space-x-8 xl:space-x-12">
                    <a href="#" className="mt-0.5 ">
                        <ion-icon name="search-outline"></ion-icon>
                    </a>
                    <a href="#" className="mt-0.5 ">
                        <ion-icon name="person-outline"></ion-icon>
                    </a>
                    <a href="#" className="lg:hidden mt-0.5 block">
                        <ion-icon
                            onClick={() => setOpen(!open)}
                            name={open ? "close" : "menu"}></ion-icon>
                    </a>
                    <a className="text-white duration-75 cursor-pointer hover:border-b-2 hover:border-cyan-500">
                        Log In
                    </a>
                </div>
            </div>
            <div
                className={`lg:hidden block absolute mt-[46.5rem] right-3 z-50 duration-200 ease-in border border-cyan-600
                          ${open ? "md:right-6 right-3 opacity-100" : "-right-56"}`}
                id="mobile-menu">
                <div className="flex flex-col w-56 h-auto gap-1 px-2 py-3 bg-cyan-800">
                    <h1 className="block px-3 py-2 text-lg text-white rounded-md bg-slate-800 ">
                        Menu
                    </h1>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Home
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Gallery
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        About
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Contact
                    </a>
                    <h1 className="block px-3 py-2 text-lg text-white rounded-md bg-slate-800 ">
                        Categories
                    </h1>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Cook Ware
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Stainless Steel
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Dinning & Serving
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Kitchen & Baking Tools
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Bone China
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Stoves & Hobs
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Storage/Containers
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Melamine Ware
                    </a>
                    <a
                        href="#"
                        className="block px-3 py-2 text-sm text-white rounded-md hover:bg-white/10">
                        Melamine Ware
                    </a>
                </div>
            </div>
            {/* Menu Bar */}
            <div className="flex-row items-center justify-center hidden w-full h-12 px-2 mt-3 space-x-10 border menubar lg:flex border-cyan-600 lg:space-x-6">
                {/* <h1 className="py-1 text-white bg-cyan-800 ">Categories</h1> */}
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Dinner Set
                </a>
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Containers
                </a>
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Stainless Steel
                </a>
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Wooden Items
                </a>
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Disposable
                </a>
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Bone China
                </a>
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Mugs
                </a>
                <a
                    href="#"
                    className="hidden h-6 text-white duration-100 xl:block hover:border-b-2 hover:border-cyan-500">
                    Tea Set
                </a>
                <a
                    href="#"
                    className="h-6 text-white duration-100 hover:border-b-2 hover:border-cyan-500">
                    Melamine Ware{" "}
                </a>
            </div>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
};
