

import asidaimages7 from "../../assets/Julius.png";
import asidaimages8 from "../../assets/Wisdom.jpg";
import asidaimages9 from "../../assets/Ebrah.png";
import asidaimages10 from "../../assets/Ryan.png";

import TallFooter from "../tallfooter/tallfooter";

export default function Asida() {
    return (
        <div className="">
             <div className="max-w-7xl mx-auto">
                            <h2 className="w-full md:w-[542px] mx-auto text-center text-2xl sm:text-3xl md:text-[36px] text-[#4D4D4D] mt-8 md:mt-[40px] font-[600]">
                                Meet Team Eagle
                            </h2>
                            <p className="text-center text-sm md:text-[16px] mt-2 md:mt-[8px] text-[#717171]">
                                {/* Empty paragraph kept for spacing consistency */}
                            </p>
                            
                            {/* Team Cards - Responsive Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[10px] justify-center mt-4 md:mt-[16px]">
                               
                                {/* Software Engineer Card */}
                                <div className="card_shadow rounded p-4 md:p-5 w-full sm:w-[240px] flex flex-col items-center mx-auto">
                                    <div className="w-full sm:w-[220px] h-[160px] sm:h-[180px] mb-3 md:mb-4 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={asidaimages10}
                                            alt="Ryan Brown"
                                        />
                                    </div>
                                    <h3 className="font-[700] text-lg md:text-[23px] text-center text-[#4d4d4d]">
                                        Software Developer
                                    </h3>
                                    <p className="text-center text-xs md:text-[14px] font-[400] text-[#717171]">
                                        Ryan Brown
                                    </p>
                                </div>
                                
                                {/* Product Designer Card */}
                                <div className="card_shadow rounded p-4 md:p-5 w-full sm:w-[240px] flex flex-col items-center mx-auto">
                                    <div className="w-full sm:w-[220px] h-[160px] sm:h-[180px] mb-3 md:mb-4 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={asidaimages8}
                                            alt="Wisdom Nana-Abena Ogbonna"
                                        />
                                    </div>
                                    <h3 className="font-[700] text-lg md:text-[23px] text-center text-[#4d4d4d]">
                                        Product Designer & Strategist
                                    </h3>
                                    <p className="text-center text-xs md:text-[14px] font-[400] text-[#717171]">
                                        Wisdom Nana-Abena Ogbonna
                                    </p>
                                </div>
                                
                                {/* Researcher Card */}
                                <div className="card_shadow rounded p-4 md:p-5 w-full sm:w-[240px] flex flex-col items-center mx-auto">
                                    <div className="w-full sm:w-[220px] h-[160px] sm:h-[180px] mb-3 md:mb-4 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={asidaimages9}
                                            alt="Jehoadan Ebrah"
                                        />
                                    </div>
                                    <h3 className="font-[700] text-lg md:text-[23px] text-center text-[#4d4d4d]">
                                        Researcher
                                    </h3>
                                    <p className="text-center text-xs md:text-[14px] font-[400] text-[#717171]">
                                        Jehoadan Ebrah
                                    </p>
                                </div>
            
                                 {/* Supervisor Card */}
                                 <div className="card_shadow rounded p-4 md:p-5 w-full sm:w-[240px] flex flex-col items-center mx-auto">
                                    <div className="w-full sm:w-[220px] h-[160px] sm:h-[180px] mb-3 md:mb-4 overflow-hidden">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={asidaimages7}
                                            alt="Mr. Julius Ludu"
                                        />
                                    </div>
                                    <h3 className="font-[700] text-lg md:text-[23px] text-center text-[#4d4d4d]">
                                        Supervisor
                                    </h3>
                                    <p className="text-center text-xs md:text-[14px] font-[400] text-[#717171]">
                                        Mr. Julius Ludu
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px] mt-12 lg:mt-[100px] justify-center mb-12 lg:mb-[80px]">
                    {/* Image Section - Fixed for all screens */}
                    <div className="w-full lg:w-[441px] flex-shrink-0">
                        <div className="bg-main-pattern h-64 sm:h-96 lg:h-[440px] w-full bg-contain bg-no-repeat bg-center rounded-lg"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="w-full lg:w-auto">
                        <h2 className="font-bold text-3xl sm:text-4xl lg:text-[60px] lg:leading-[1.2] w-full lg:w-[550px] text-[#4d4d4d]">
                        Our Goal
                        </h2>
                        <p className="w-full lg:w-[550px] text-sm sm:text-[14px] font-normal text-[#717171] mt-4 sm:mt-[16px]">
                        Climate Sentinel aims to revolutionize environmental monitoring and protection. By leveraging AI and IoT technology, we strive to provide real-time insights into deforestation and mining activities. Our goal is to empower environmental agencies with timely information, enabling them to take swift action against illegal activities. Through our innovative approach, we aim to safeguard ecosystems, promote sustainable practices, and contribute to a healthier planet for future generations.                        Climate Sentinel is dedicated to protecting Ghana’s forests from illegal mining and deforestation through smart, AI-powered monitoring systems. We are developing and preparing to deploy our Eagle Devices—a network of intelligent sensors and cameras—across key forest reserves to detect harmful activities in real time. Our goal is to equip environmental agencies with the tools to act quickly, backed by accurate data and visual evidence. By 2030, we aim to place these devices in all 266 forest reserves, significantly reducing galamsey and preserving biodiversity. Through innovation, collaboration, and unwavering commitment, we strive to build a future where Ghana’s natural ecosystems are safeguarded and restored.

                        </p>
                
                    </div>
                </div>
            </div>
        </div>
         
            <section className="bg-custom-silver py-[32px] mt-[40px] ">
                <TallFooter />
            </section>

           
        </div>
    );
}