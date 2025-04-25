import infoImages from "../../assets/forestIcon.png";
import infoImages1 from "../../assets/micIcon.png";
import infoImages3 from "../../assets/CameraIcon.png";


export default function Info() {
    return (
        <div className="">
            <div className="flex gap-[72px] justify-center">
                <div className="mt-[80px]">
                    <h1 className="font-[600] w-[380px] text-[36px] text-[#4d4d4d]">
                    Helping Ghana {" "}
                        <span className="text-[#4CAF4F] block">
                        Stay green
                        </span>
                    </h1>
                    <p className="text-[16px] font-[400] text-[#18191f]">
                    A fight against illegal mining
                    </p>
                </div>
                <div className="mt-[60px] mb-[60px]">
                    <div className="flex gap-[50px]">
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages}
                                alt=""
                            />
                            <div className="">
                                <h3 className="font-[700] text-[36px] text-[#4d4d4d]">
                                40+
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                Forests destroyed till 2024
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages1}
                                alt=""
                            />
                            <div className="">
                                <h3 className="w-[200px] font-[700] text-[36px] text-[#4d4d4d]">
                                1000+
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                Sound Data Collected
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[50px] mt-[40px]">
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages}
                                alt=""
                            />
                            <div className="">
                                <h3 className="font-[700] text-[36px] text-[#4d4d4d]">
                                100+
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                Forests Currently Monitored & Protected
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages3}
                                alt=""
                            />
                            <div className="">
                                <h3 className="w-[200px] font-[700] text-[36px] text-[#4d4d4d]">
                                1000+
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                Image Data Collected
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
