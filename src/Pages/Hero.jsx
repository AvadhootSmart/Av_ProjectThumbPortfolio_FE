import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const heroText = useRef(null);
    useGSAP(() => {
        gsap.from(
            ".heroText",
            {
                y: 200,
                duration: 0.5,
                stagger: 0.2,
                ease: "power1.inOut",
            },
            { scope: heroText },
        );
        gsap.from(".backdropimgs", {
            opacity: 0,
            duration: 1,
            ease: "power1.in",
        });
    });
    return (
        <>
            <div className="h-screen -mt-[15vh] w-full ">
                <div className="backdropimgs z-0 flex w-full h-full  opacity-30 mix-blend-soft-light">
                    <img
                        className="w-[25%] object-cover"
                        src="Images/01Gaming.webp"
                        alt=""
                    />
                    <img
                        className="w-[25%] object-cover"
                        src="Images/01Montage.webp"
                        alt=""
                    />
                    <img
                        className="w-[25%] object-cover bg-center "
                        src="Images/03Gaming.webp"
                        alt=""
                    />
                    <img
                        className="w-[25%] object-cover"
                        src="Images/03Live.webp"
                        alt=""
                    />
                </div>
                <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 italic">
                    <div className="heroWrapper  overflow-hidden h-20 w-full text-center ">
                        <h1 className="heroText font-bebas font-extrabold text-8xl text-gray-300 ">
                            Need <span className="text-red-800  mx-1"> more </span>clicks on
                        </h1>
                    </div>
                    <div className="heroWrapper  overflow-hidden h-20 w-full text-center ">
                        <h1 className="heroText font-bebas font-extrabold text-8xl text-gray-300 ">
                            your videos??
                        </h1>
                    </div>
                    <div className="heroWrapper overflow-hidden h-18 w-full  text-center mt-10">
                        <button
                            className="heroText border-2 p-4 font-bebas text-2xl text-gray-300"
                            type="button"
                        >
                            Explore
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
