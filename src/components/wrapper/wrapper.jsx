import { FaArrowRight } from "react-icons/fa6";
import asidaimages1 from "../../assets/part1.png";
import asidaimages2 from "../../assets/part2.png";

export default function Wrapper() {
    return (
        <div >
            <div className="mt-[48px]">
                <h2 className="text-[#4d4d4d] text-[36px] text-center font-[600]">
                    Recent Galamsey report
                </h2>
                <p className="w-[600px] text-[#717171] m-auto text-center mt-2">
                    Illegal mining(galamsey), in Ghana has caused widespread environmental and health issues, including deforestation, water pollution, and chronic illnesses, while also harming key industries like cocoa farming.​
                </p>
                <div className="flex gap-6 justify-center mt-[16px] mb-[140px]">
                    {/* First Report Card */}
                    <div className="rounded w-[360px] h-[280px] bg-wrapper-pattern bg-cover bg-no-repeat bg-center">
                        <div className="w-[300px] m-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-[285px] font-[600] text-[20px] text-[#717171]">
                            Galamsey, the highest cause of Ghana's vegetation loss.
                            </h4>
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-[7px] text-[20px] mb-3 ml-[90px]">
                                Readmore <FaArrowRight className="mt-2" />
                            </h4>
                        </div>
                    </div>
                    
                    {/* Second Report Card */}
                    <div className="rounded w-[360px] h-[280px] bg-wrapper1-pattern bg-cover bg-no-repeat bg-center">
                        <div className="w-[300px] m-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-[285px] font-[600] text-[20px] text-[#717171]">
                            Miners arrested and 23 excavators seized at Tarkwa. 
                            </h4>
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-[7px] text-[20px] mb-3 ml-[90px]">
                                Readmore <FaArrowRight className="mt-2" />
                            </h4>
                        </div>
                    </div>
                    
                    {/* Third Report Card */}
                    <div className="rounded w-[360px] h-[280px] bg-wrapper2-pattern bg-cover bg-no-repeat bg-center">
                        <div className="w-[300px] m-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-[270px] font-[600] text-[20px] text-[#717171]">
                            Rivers at mining sites contain toxic chemicals like mercury.
                            </h4>
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-[7px] text-[20px] mb-3 ml-[90px]">
                                Readmore <FaArrowRight className="mt-2" />
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="font-[600] text-[36px] text-center text-[#4D4D4D]">
                    Our Partners
                </h2>
                <p className="text-center text-[#717171] text-[16px] font-[400] max-w-[600px]">
                    We collaborate with industry-leading organizations to drive innovation and deliver impactful solutions.
                </p>
                <div className="flex justify-center gap-[150px] mt-[41px]">
                    <img src={asidaimages1} alt="Partner logo 1" className="h-[120px] w-auto mt-[-30px]" />
                    <img src={asidaimages2} alt="Partner logo 2" className="h-[70px] w-auto" />
                </div>
            </div>
        </div>
    );
}