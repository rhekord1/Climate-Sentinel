import { FaArrowRight } from "react-icons/fa6";
import asidaimages1 from "../../assets/p1.jpg";
import asidaimages2 from "../../assets/p2.jpg";

export default function Wrapper() {
    return (
        <div className="px-4 sm:px-6 lg:px-8">
            {/* Recent Reports Section */}
            <div className="mt-8 md:mt-[48px]">
                <h2 className="text-[#4d4d4d] text-2xl sm:text-3xl lg:text-[36px] text-center font-[600]">
                    Recent Galamsey report
                </h2>
                <p className="w-full md:w-[600px] text-[#717171] mx-auto text-center mt-2 text-sm sm:text-base">
                    Illegal mining(galamsey), in Ghana has caused widespread environmental and health issues, including deforestation, water pollution, and chronic illnesses, while also harming key industries like cocoa farming.​
                </p>
                
                {/* Report Cards - Responsive Grid */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-[16px] mb-16 sm:mb-[140px]">
                    {/* First Report Card */}
                    <div className="rounded w-full sm:w-[360px] h-[280px] bg-wrapper-pattern bg-cover bg-no-repeat bg-center">
                        <div className="w-[90%] sm:w-[300px] mx-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-full sm:w-[285px] font-[600] text-base sm:text-[20px] text-[#717171] mx-auto">
                            Ghana Gold Mining Disaster
                            </h4>
                            <a href = "/analytics"> 
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-1 sm:mt-[7px] text-base sm:text-[20px] justify-center items-center mb-1 sm:mb-3">
                                Readmore <FaArrowRight className="mt-1 sm:mt-2" />
                            </h4>
                            </a>
                        </div>
                    </div>
                    
                    {/* Second Report Card */}
                    <div className="rounded w-full sm:w-[360px] h-[280px] bg-wrapper1-pattern bg-cover bg-no-repeat bg-center">
                        <div className="w-[90%] sm:w-[300px] mx-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-full sm:w-[285px] font-[600] text-base sm:text-[20px] text-[#717171] mx-auto">
                            Human Rights and Illegal Mining Concerns Across Africa
                            </h4>
                            <a href = "/analytics">
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-1 sm:mt-[7px] text-base sm:text-[20px] justify-center items-center mb-1 sm:mb-3">
                                Readmore <FaArrowRight className="mt-1 sm:mt-2" />
                            </h4>
                            </a>
                        </div>
                    </div>
                    
                    {/* Third Report Card */}
                    <div className="rounded w-full sm:w-[360px] h-[280px] bg-wrapper2-pattern bg-cover bg-no-repeat bg-center">
                        <div className="w-[90%] sm:w-[300px] mx-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-full sm:w-[270px] font-[600] text-base sm:text-[20px] text-[#717171] mx-auto">
                            Dangerous Effects of Illegal Mining
                            </h4>
                            <a href = "/analytics">
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-1 sm:mt-[7px] text-base sm:text-[20px] justify-center items-center mb-1 sm:mb-3">
                                Readmore <FaArrowRight className="mt-1 sm:mt-2" />
                            </h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners Section */}
            <div className="flex flex-col items-center px-4">
                <h2 className="font-[600] text-2xl sm:text-3xl lg:text-[36px] text-center text-[#4D4D4D]">
                    Our Partners
                </h2>
                <p className="text-center text-[#717171] text-sm sm:text-[16px] font-[400] max-w-full sm:max-w-[600px]">
                    We collaborate with industry-leading organizations to drive innovation and deliver impactful solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-[150px] mt-6 sm:mt-[41px] w-full">
                    <img 
                        src={asidaimages1} 
                        alt="Partner logo 1" 
                        className="h-16 sm:h-24 lg:h-[120px] w-auto sm:mt-0 lg:mt-[-30px]" 
                    />
                    <img 
                        src={asidaimages2} 
                        alt="Partner logo 2" 
                        className="h-12 sm:h-16 lg:h-[120px] w-auto mt-4 sm:mt-0" 
                    />
                </div>
            </div>
        </div>
    );
}