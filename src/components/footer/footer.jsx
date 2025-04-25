import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import footerLogo from "../../assets/Dlogo.svg";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Footer() {
    return (
        <div className="w-full bg-[#263238] py-[60px] px-[80px]">
            <footer className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-[125px]">
                {/* First Column - Logo and Social */}
                <div className="flex flex-col">
                    <a href="#">
                        <img src={footerLogo} alt="Company Logo" />
                    </a>
                    <p className="font-[400] text-[14px] text-[#F5F7FA] mt-[40px]">
                    Copyright © 2025 Galamsey Detection System
                    </p>
                    <p className="font-[400] text-[14px] text-[#f5f7fa] mt-1">
                        All rights reserved
                    </p>
                    <div className="flex gap-[16px] mt-[40px]">
                        <a
                            className="w-[38px] h-[38px] rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition"
                            href="#"
                        >
                            <FaInstagram className="text-[20px] text-white" />
                        </a>
                        <a
                            className="w-[38px] h-[38px] rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition"
                            href="#"
                        >
                            <FaTwitter className="text-[20px] text-white" />
                        </a>
                        <a
                            className="w-[38px] h-[38px] rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition"
                            href="#"
                        >
                            <FaYoutube className="text-[20px] text-white" />
                        </a>
                    </div>
                </div>

                {/* Second Column - Links and Form */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-[100px]">
                    {/* Company Links */}
                    <div className="flex flex-col">
                        <h4 className="font-[600] text-[20px] text-white mb-6">
                            Company
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                About us
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Dashboard
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Analytics
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Camera Panel
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Testimonials
                            </a>
                        </div>
                    </div>

                    {/* Support Links */}
                    <div className="flex flex-col">
                        <h4 className="font-[600] text-[20px] text-white mb-6">
                            Support
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Help center
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Terms of service
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Legal
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Privacy policy
                            </a>
                            <a className="text-white font-[400] text-[14px] hover:underline" href="#">
                                Status
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Form */}
                    <div className="flex flex-col">
                        <h4 className="font-[600] text-[20px] text-white mb-6">
                            Stay up to date
                        </h4>
                        <div className="relative">
                            <form>
                                <input
                                    className="w-full md:w-[255px] h-[40px] rounded-lg pl-4 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                                    type="email"
                                    placeholder="Your email address"
                                />
                                <button type="submit" className="absolute right-3 top-2">
                                    <LiaTelegramPlane className="text-[24px] text-white" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}