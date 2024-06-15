import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const SubscriptionPlans = () => {
    useEffect(() => {
        gsap.fromTo(
            ".heading",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".main",
                    start: "-20% center",
                    end: "-10% center",
                    scrub: 1,
                },
            },
        );
        gsap.fromTo(
            ".card",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: ".main",
                    start: "top center",
                    end: "10% center",
                    scrub: 1,
                },
            },
        );
    });
    const plans = [
        {
            name: "Starter",
            price: "$50",
            features: ["5 Thumbnails", "2 Revisions", "Email Support"],
        },
        {
            name: "Professional",
            price: "$150",
            features: [
                "20 Thumbnails",
                "5 Revisions",
                "Priority Email Support",
                "1 Custom Design",
            ],
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$300",
            features: [
                "Unlimited Thumbnails",
                "Unlimited Revisions",
                "24/7 Support",
                "3 Custom Designs",
                "Source Files Included",
            ],
        },
    ];

    return (
        <div className="main bg-zinc-900 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="heading text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10">
                        My Services
                    </h2>
                    <p className="heading mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-400 sm:mt-4">
                        Choose the plan that best fits your needs.
                    </p>
                </div>
                <div className="mt-10 sm:mt-0 sm:grid sm:grid-cols-3 sm:gap-8">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`card relative bg-gray-800 border border-gray-700 rounded-lg shadow-sm p-6 ${plan.popular ? "border-indigo-600" : ""}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-600 text-white rounded-bl-lg rounded-tr-lg">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-xl leading-7 font-semibold text-white">
                                {plan.name}
                            </h3>
                            <div className="mt-4 flex items-center justify-center text-6xl leading-none font-extrabold text-white">
                                {plan.price}
                            </div>
                            <ul className="mt-6 space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center">
                                        <svg
                                            className="flex-shrink-0 h-6 w-6 text-green-500"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="ml-3 text-lg leading-6 text-gray-300">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <a
                                    href="#"
                                    className={`block w-full text-center rounded-lg px-6 py-3 text-lg leading-6 font-medium text-white ${plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-700 hover:bg-gray-600"}`}
                                >
                                    Choose Plan
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlans;
