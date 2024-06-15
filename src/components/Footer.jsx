import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-white py-6">
            <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
                <p className="text-sm">&copy; 2024,All rights reserved.</p>
                <p className="text-sm text-gray-400 italic">"Its just a sample design, the final product will differ in functionalities"</p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <a
                        href="https://facebook.com"
                        className="text-gray-400 hover:text-white transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook size={24} />
                    </a>
                    <a
                        href="https://twitter.com"
                        className="text-gray-400 hover:text-white transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter size={24} />
                    </a>
                    <a
                        href="https://instagram.com"
                        className="text-gray-400 hover:text-white transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram size={24} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="text-gray-400 hover:text-white transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
