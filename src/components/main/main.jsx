export default function CameraModule() {
    return (
        <div className="">
            <div className="">
                <div className="flex gap-[50px] mt-[100px] justify-center mb-[80px]">
                    <div className="bg-main-pattern h-[440px]  w-[441px]  bg-cover"></div>
                    <div className="">
                        <h2 className="font-[700] text-[60px] w-[550px] text-[#4d4d4d]">
                        What we do
                        </h2>
                        <p className="w-[550px] text-[14px] font-[400] text-[#717171] mt-[16px]">
                        We explore Ghana’s forests and place our eagle devices in strategic points across protected areas, 
                        thereby enabling immediate intervention by responsible agents. Using AI-powered cameras and IoT sensors, 
                        we detect illegal activities such as logging and mining in real time. 
                        Our system captures evidence, triggers alerts, and logs all activity on a secure dashboard.
                         We work closely with environmental agencies and local authorities to provide verified reports that support enforcement actions and long-term forest conservation.
                        </p>
                        <button className="py-3 px-8 bg-custom-green rounded text-white mt-8 font-[500] text-[16px]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
