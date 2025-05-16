import asidaimages7 from "../../assets/Julius.png";
import asidaimages8 from "../../assets/Wisdom.jpg";
import asidaimages9 from "../../assets/Ebrah.png";
import asidaimages10 from "../../assets/Ryan.png";
import TallFooter from "../tallfooter/tallfooter";

export default function Asida() {
    return (
        <div className="px-4 sm:px-6">
        
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
            
           
            <section className="bg-custom-silver py-6 md:py-[32px] mt-8 md:mt-[40px]">
                <TallFooter />
            </section>
        </div>
    );
}