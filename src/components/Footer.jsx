import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    const handleMoveToTop = () => {
        window.scroll(0, 0);
    };

    return (
        <>
            <footer className="w-full bg-[#ECECFB] text-black">
                <div className="max-w-7xl mx-auto">
                    {/* FOOTER UPPER PART  */}
                    <div className="pt-16 pb-14 px-4 md:px-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-5">
                        {/* LOGO & HEADING */}
                        <div className="sm:col-span-2">
                            <h1 className="max-w-lg flex items-center text-xl font-semibold tracking-tight text-black xl:text-2xl">
                                <img className='-ml-3 w-12' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/aaa.png?v=1713875658" alt="logo" />
                                Study Stello
                            </h1>
                            <p className="max-w-md text-[1rem] mt-3">
                                Study Stello is providing help to students as academic consultants, to resolve their queries, helping them by providing sufficient help in assignments and exams. There are a vast variety of subjects offered by Study Stello through experts.
                            </p>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <p className="text-xl font-semibold text-black">Quick Link</p>
                            <div className="flex flex-col items-start mt-3 space-y-2">
                                <Link
                                    to="/"
                                    onClick={handleMoveToTop}
                                    className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/about"
                                    onClick={handleMoveToTop}
                                    className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={handleMoveToTop}
                                    className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    to="/privacy-policy"
                                    onClick={handleMoveToTop}
                                    className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>

                        {/* PRODUCT & CATEGORIES */}
                        <div>
                            <p className="text-xl font-semibold text-black tracking-wider">
                                Services
                            </p>
                            <div className="flex flex-col items-start mt-3 space-y-2">
                                <Link
                                    to="/online-classes"
                                    className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Online Class
                                </Link>
                                <Link
                                    to="/exams"
                                    className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Exams
                                </Link>
                                <Link
                                    to="/assignments"
                                    className="text-black transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500"
                                >
                                    Assignments
                                </Link>

                            </div>
                        </div>

                        {/* PRODUCT & CATEGORIES */}
                        <div>
                            <p className="text-xl font-semibold text-black tracking-wider">
                                Contact Info
                            </p>
                            <div className="flex flex-col items-start mt-3 space-y-2">
                                {/* PHONE NUMBER */}
                                <a href="tel:+1-716-374-9747" className="flex items-center gap-2">
                                    <FaPhone /> +1 (716) 374-9747
                                </a>

                                {/* SOCIAL LINKS */}
                                <div className="links pt-2 flex items-center justify-start gap-2.5">
                                    <a href="#" className=""><FaFacebookF className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaInstagram className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaLinkedinIn className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                    <a href="#" className=""><FaTiktok className="text-white bg-blue-600 h-7 w-7 p-1.5 rounded-full" /></a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>


                {/* FOOTER BOTTOM PART  */}
                <div className="text-sm py-7 px-4 md:px-10 border-t bg-[#1A73E8] text-center text-white">
                    <p>Copyrights © 2024 All Rights Reserved by Study Stello</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
