import React from "react";
import AboutImg from "./images/Shop/bg4.png";

export default function About(props) {
    return (
        <div
            id="About-Section"
            className="w-full p-6 my-12 duration-300 border shadow-inner hover:shadow-cyan-500/50 border-cyan-600">
            <div
                id="About-Inner"
                className="flex flex-col-reverse items-center justify-between w-full px-4 md:flex-row">
                <div
                    id="Left-Text"
                    className="w-[30rem] space-y-6 md:w-[40rem] px-6 md:px-2 ">
                    <h1 className="m-auto text-4xl font-semibold lg:text-5xl text-cyan-500">
                        About Us
                    </h1>
                    <p className="font-medium text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                        quam illo laudantium quidem vitae provident, velit debitis! Nemo
                        voluptates quia quaerat saepe expedita, tenetur qui? Dolores
                        deleniti cum saepe aperiam?
                    </p>
                </div>
                <div id="Right-Img" className="h-full w-80 md:w-[25rem]">
                    <img src={AboutImg} alt="" />
                </div>
            </div>
        </div>
    );
}
