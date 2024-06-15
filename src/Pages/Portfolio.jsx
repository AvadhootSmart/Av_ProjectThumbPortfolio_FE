import React from "react";

export default function Portfolio() {
    return (
        <>
            <div className="mainWrapper h-auto w-full bg-zinc-900 p-10">
                <div className="mb-7">
                    <h1 className="text-4xl font-bebas uppercase text-white">
                        Gaming Thumbnails
                    </h1>
                    <ul className="flex gap-10 mt-6">
                        <li className="thumbs drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl hover:scale-110 transition "
                                src="Images/01Gaming.jpg"
                                alt=""
                            />
                        </li>
                        <li className="thumbs drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl hover:scale-110 transition"
                                src="Images/02Gaming.jpg"
                                alt=""
                            />
                        </li>
                        <li className="thumbs drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl hover:scale-110 transition"
                                src="Images/03Gaming.jpg"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
                <div className="mb-7">
                    <h1 className="text-4xl font-bebas uppercase text-white">
                        Live stream thumbnails
                    </h1>
                    <ul className="flex gap-10 mt-6">
                        <li className="drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl  hover:scale-110 transition"
                                src="Images/01Live.jpg"
                                alt=""
                            />
                        </li>
                        <li className="drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl hover:scale-110 transition"
                                src="Images/02Live.jpg"
                                alt=""
                            />
                        </li>
                        <li className="drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl hover:scale-110 transition"
                                src="Images/03Live.jpg"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-4xl font-bebas uppercase text-white">
                        Montage Thumbnails
                    </h1>
                    <ul className="flex gap-10 mt-6">
                        <li className="drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl  hover:scale-110 transition"
                                src="Images/01Montage.jpg"
                                alt=""
                            />
                        </li>
                        <li className="drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl hover:scale-110 transition"
                                src="Images/02Montage.jpg"
                                alt=""
                            />
                        </li>
                        <li className="drop-shadow-2xl">
                            <img
                                className="rounded-lg shadow-2xl hover:scale-110 transition"
                                src="Images/03Montage.jpg"
                                alt=""
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
