import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import footerLogo from "../../assets/Dlogo.svg";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Footer() {
    return (
        <div className="w-full bg-[#263238] py-5 sm:py-8 md:py-[30px] px-2 sm:px-3 md:px-[40px]">
            <footer className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-[125px]">
                {/* First Column - Logo and Social */}
                <div className="flex flex-col items-center lg:items-start">
                    <a href="#">
                        <img src={footerLogo} alt="Company Logo" className="w-auto h-12 md:h-12" />
                    </a>
                    <p className="font-[400] text-xs sm:text-[14px] text-[#F5F7FA] mt-6 sm:mt-8 md:mt-[40px] text-center lg:text-left">
                        Copyright © 2025 Galamsey Detection System
                    </p>
                    <p className="font-[400] text-xs sm:text-[14px] text-[#f5f7fa] mt-1 text-center lg:text-left">
                        All rights reserved
                    </p>
                    <div className="flex gap-3 sm:gap-4 md:gap-[16px] mt-6 sm:mt-8 md:mt-[40px]">
                        <a
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition"
                            href="#"
                        >
                            <FaInstagram className="text-base sm:text-lg md:text-[20px] text-white" />
                        </a>
                        <a
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition"
                            href="#"
                        >
                            <FaTwitter className="text-base sm:text-lg md:text-[20px] text-white" />
                        </a>
                        <a
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-[38px] md:h-[38px] rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition"
                            href="#"
                        >
                            <FaYoutube className="text-base sm:text-lg md:text-[20px] text-white" />
                        </a>
                    </div>
                </div>

                {/* Second Column - Links and Form */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-[100px] mt-6 sm:mt-0">
                    {/* Company Links */}
                    <div className="flex flex-col">
                        <h4 className="font-[600] text-base sm:text-lg md:text-[20px] text-white mb-3 sm:mb-4 md:mb-6 text-center sm:text-left">
                            Company
                        </h4>
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="/about">
                                About us
                            </a>
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="/dashboard">
                                Dashboard
                            </a>
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="/analytics">
                                Analytics
                            </a>
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="/camera-panel">
                                Camera Panel
                            </a>
                            
                        </div>
                    </div>

                    {/* Support Links */}
                    <div className="flex flex-col">
                        <h4 className="font-[600] text-base sm:text-lg md:text-[20px] text-white mb-3 sm:mb-4 md:mb-6 text-center sm:text-left">
                            Support
                        </h4>
                        <div className="flex flex-col gap-2 sm:gap-3">
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="#">
                                Help center
                            </a>
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="#">
                                Terms of service
                            </a>
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="#">
                                Legal
                            </a>
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="#">
                                Privacy policy
                            </a>
                            <a className="text-white font-[400] text-xs sm:text-[14px] hover:underline text-center sm:text-left" href="#">
                                Status
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Form */}
                    <div className="col-span-2 md:col-span-1 flex flex-col">
                        <h4 className="font-[600] text-base sm:text-lg md:text-[20px] text-white mb-3 sm:mb-4 md:mb-6 text-center sm:text-left">
                            Stay up to date
                        </h4>
                        <div className="relative max-w-xs mx-auto md:mx-0 w-full">
                            <form>
                                <input
                                    className="w-full h-9 sm:h-10 md:h-[40px] rounded-lg pl-3 sm:pl-4 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-xs sm:text-[14px]"
                                    type="email"
                                    placeholder="Your email address"
                                />
                                <button type="submit" className="absolute right-2 sm:right-3 top-2">
                                    <LiaTelegramPlane className="text-xl sm:text-2xl md:text-[24px] text-white" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}