import infoImages from "../../assets/forestIcon.png";
import infoImages1 from "../../assets/micIcon.png";
import infoImages3 from "../../assets/CameraIcon.png";

export default function Info() {
    return (
        <div className="px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[72px] justify-center items-start">
                    {/* Left Section - Title */}
                    <div className="mt-12 lg:mt-[80px] w-full lg:w-auto">
                        <h1 className="font-[600] text-3xl lg:text-[36px] lg:w-[380px] text-[#4d4d4d]">
                            Helping Ghana {" "}
                            <span className="text-[#4CAF4F] block">
                                Stay green
                            </span>
                        </h1>
                        <p className="text-base lg:text-[16px] font-[400] text-[#18191f] mt-2">
                            A fight against illegal mining
                        </p>
                    </div>

                    {/* Right Section - Stats */}
                    <div className="mt-8 lg:mt-[60px] mb-12 lg:mb-[60px] w-full lg:w-auto">
                        {/* First Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[50px]">
                            <div className="flex gap-4 lg:gap-[16px]">
                                <img
                                    className="w-10 lg:w-[48px] h-10 lg:h-[48px] mt-1 lg:mt-[12px]"
                                    src={infoImages}
                                    alt="Forest icon"
                                />
                                <div>
                                    <h3 className="font-[700] text-2xl lg:text-[36px] text-[#4d4d4d]">
                                        40+
                                    </h3>
                                    <p className="text-sm lg:text-[16px] font-[400] text-[#717171] mt-1 lg:mt-0">
                                        Forests destroyed till 2024
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 lg:gap-[16px]">
                                <img
                                    className="w-10 lg:w-[48px] h-10 lg:h-[48px] mt-1 lg:mt-[12px]"
                                    src={infoImages1}
                                    alt="Microphone icon"
                                />
                                <div>
                                    <h3 className="lg:w-[200px] font-[700] text-2xl lg:text-[36px] text-[#4d4d4d]">
                                        1000+
                                    </h3>
                                    <p className="text-sm lg:text-[16px] font-[400] text-[#717171] mt-1 lg:mt-0">
                                        Sound Data Collected
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-[50px] mt-6 lg:mt-[40px]">
                            <div className="flex gap-4 lg:gap-[16px]">
                                <img
                                    className="w-10 lg:w-[48px] h-10 lg:h-[48px] mt-1 lg:mt-[12px]"
                                    src={infoImages}
                                    alt="Forest icon"
                                />
                                <div>
                                    <h3 className="font-[700] text-2xl lg:text-[36px] text-[#4d4d4d]">
                                        100+
                                    </h3>
                                    <p className="text-sm lg:text-[16px] font-[400] text-[#717171] mt-1 lg:mt-0">
                                        Forests Currently Monitored & Protected
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4 lg:gap-[16px]">
                                <img
                                    className="w-10 lg:w-[48px] h-10 lg:h-[48px] mt-1 lg:mt-[12px]"
                                    src={infoImages3}
                                    alt="Camera icon"
                                />
                                <div>
                                    <h3 className="lg:w-[200px] font-[700] text-2xl lg:text-[36px] text-[#4d4d4d]">
                                        1000+
                                    </h3>
                                    <p className="text-sm lg:text-[16px] font-[400] text-[#717171] mt-1 lg:mt-0">
                                        Image Data Collected
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}