import React from "react";

export default function Contact(props) {
    return (
        <div
            id="Contact-Section"
            className="w-full p-6 my-12 duration-300 border shadow-inner hover:shadow-cyan-500/50 border-cyan-600">
            <div
                id="Contact-Inner"
                className="flex flex-col items-center justify-center w-full px-4 space-y-6">
                <div className="w-full h-12 my-8 text-center">
                    <h1 className="text-3xl font-semibold lg:text-4xl text-cyan-500">
                        Contact Us
                    </h1>
                </div>
                <div id="Form" className="flex flex-col gap-4 md:flex-row">
                    <div
                        id="Left-Side"
                        className="gap-[1.13rem] w-[26rem] justify-center items-center flex flex-col">
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-cyan-600 focus:ring-2 rounded-md text-slate-900 text-sm focus:ring-cyan-500  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                            placeholder="Full Name"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            required
                            className="bg-gray-50 border border-cyan-600 focus:ring-2 rounded-md text-slate-900 text-sm focus:ring-cyan-500  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        />
                        <input
                            type="email"
                            placeholder="Email ID"
                            required
                            className="bg-gray-50 border border-cyan-600 focus:ring-2 rounded-md text-slate-900 text-sm focus:ring-cyan-500  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"
                        />
                    </div>
                    <div id="Right-Side">
                        <textarea
                            name="Bio Description"
                            id="textarea"
                            cols="50"
                            rows="7"
                            placeholder="Message"
                            required
                            className="bg-gray-50 border border-cyan-600 focus:ring-2 rounded-md text-slate-900 text-sm focus:ring-cyan-500  block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500"></textarea>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full h-12">
                    <button
                        type="submit"
                        className="h-auto w-[8rem] p-3 bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-cyan-900 rounded-md font-semibold text-lg">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
