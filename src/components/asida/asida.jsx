

import asidaimages7 from "../../assets/Julius.png";
import asidaimages8 from "../../assets/Wisdom.png";
import asidaimages9 from "../../assets/Ebrah.png";
import asidaimages10 from "../../assets/Ryan.png";

import TallFooter from "../tallfooter/tallfooter";

export default function Asida() {
    return (
        <div className="">
            <h2 className="w-[542px] m-auto text-center text-[36px] text-[#4D4D4D] mt-[40px] font-[600]">
                Meet Team Eagle
            </h2>
            <p className="text-center text-[16px] mt-[8px] text-[#717171]">
                
            </p>
            <div className="flex gap-[10px] justify-center mt-[16px]">
                
                <div className="card_shadow rounded p-5 w-[240px] flex flex-col items-center">
                    <div className="w-[220px] h-[180px] mb-4 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={asidaimages7}
                            alt="Mr. Julius Ludu"
                        />
                    </div>
                    <h3 className="font-[700] text-[23px] text-center text-[#4d4d4d]">
                        Supervisor
                    </h3>
                    <p className="text-center text-[14px] font-[400] text-[#717171]">
                        Mr. Julius Ludu
                    </p>
                </div>
                
              
                <div className="card_shadow rounded p-5 w-[240px] flex flex-col items-center">
                    <div className="w-[220px] h-[180px] mb-4 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={asidaimages10}
                            alt="Ryan Brown"
                        />
                    </div>
                    <h3 className="font-[700] text-[23px] text-center text-[#4d4d4d]">
                        Software Engineer
                    </h3>
                    <p className="text-center text-[14px] font-[400] text-[#717171]">
                        Ryan Brown
                    </p>
                </div>
                
            
                <div className="card_shadow rounded p-5 w-[240px] flex flex-col items-center">
                    <div className="w-[220px] h-[180px] mb-4 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={asidaimages8}
                            alt="Wisdom Nana-Abena Ogbonna"
                        />
                    </div>
                    <h3 className="font-[700] text-[23px] text-center text-[#4d4d4d]">
                        Product Designer
                    </h3>
                    <p className="text-center text-[14px] font-[400] text-[#717171]">
                        Wisdom Nana-Abena Ogbonna
                    </p>
                </div>
                
                {/* Researcher Card */}
                <div className="card_shadow rounded p-5 w-[240px] flex flex-col items-center">
                    <div className="w-[220px] h-[180px] mb-4 overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={asidaimages9}
                            alt="Jehoadan Ebrah"
                        />
                    </div>
                    <h3 className="font-[700] text-[23px] text-center text-[#4d4d4d]">
                        Researcher
                    </h3>
                    <p className="text-center text-[14px] font-[400] text-[#717171]">
                        Jehoadan Ebrah
                    </p>
                </div>
            </div>

         
            <section className="bg-custom-silver py-[32px] mt-[40px] ">
                <TallFooter />
            </section>

           
        </div>
    );
}