import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
    useGSAP(() => {
        gsap.from(".List", {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power1",
            stagger: 0.2,
        });
        gsap.from(".Logo", {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power1",
            stagger: 0.2,
        });
    });
    return (
        <>
            <div className=" flex justify-between px-8 uppercase h-[15vh] text-gray-600 z-10 font-lg w-full font-[Montserrat] items-center overflow-hidden">
                <div className="Logo">Logo</div>
                <div>
                    <ul className="flex gap-10 cursor-pointer ">
                        <a href="" className="List cursor-pointer hover:text-gray-400">Services</a>
                        <li className="List">Portfolio</li>
                        <li className="List">FAQs</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
