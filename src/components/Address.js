/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

export default function Address(props) {
    return (
        <div
            id="Address"
            className="p-5 my-10 duration-300 border shadow-inner lg:px-12 hover:shadow-cyan-500/50 border-cyan-600">
            <div
                id="Address-Inner"
                className="flex flex-col md:flex-row justify-center gap-2 lg:gap-8 lg:h-[26rem] h-auto  w-full  items-center">
                <div id="Left-map" className="h-80 w-full md:h-[25rem] md:w-[50%]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4046.7862202775154!2d74.35689790343332!3d31.471166009268064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1671329883189!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div
                    id="Right-Info"
                    className="h-full ml-10 md:ml-6 text-white w-full md:w-[45%]">
                    <div id="Location" className="flex my-8 space-x-4">
                        <div>
                            <svg
                                className="w-10 h-10 mt-0.5"
                                fill="#00B4D2"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-semibold md:text-2xl">
                                Our Office Address
                            </h1>
                            <p>Walton Road, Lahore Cantt, 54000</p>
                        </div>
                    </div>
                    <div id="Site" className="flex my-8 space-x-4">
                        <div>
                            <svg
                                className="w-10 h-10 mt-0.5"
                                fill="#00B4D2"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-semibold md:text-2xl">
                                General Enquiries
                            </h1>
                            <p>contact@shakeelcoder.com.pk (Demo)</p>
                        </div>
                    </div>
                    <div id="Phone" className="flex my-8 space-x-4">
                        <div>
                            <svg
                                className="w-10 h-10 mt-0.5"
                                fill="#00B4D2"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-semibold md:text-2xl">Call Us</h1>
                            <p>PK : +92-3080022258</p>
                        </div>
                    </div>
                    <div id="Timing" className="flex my-8 space-x-4">
                        <div>
                            <svg
                                className="w-10 h-10 mt-0.5"
                                fill="#00B4D2"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-xl font-semibold md:text-2xl">
                                Our Timing
                            </h1>
                            <p>Mon - Sun : 10:00 AM - 09:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
