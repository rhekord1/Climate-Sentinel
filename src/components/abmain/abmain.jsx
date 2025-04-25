export default function CameraModule() {
    return (
        <div className="">
            <div className="">
                <div className="flex gap-[50px] mt-[100px] justify-center mb-[80px]">
                    <div className="bg-main-pattern h-[440px]  w-[441px]  bg-cover"></div>
                    <div className="">
                        <h2 className="font-[700] text-[60px] w-[550px] text-[#4d4d4d]">
                        Who we are
                        </h2>
                        <p className="w-[550px] text-[14px] font-[400] text-[#717171] mt-[16px]">
                        Climate Sentinel was founded in 2024/2025 by the Huawei Academy of the University of Ghana. It is an AI-powered environmental monitoring system designed to combat illegal deforestation and mining activities. Using a Raspberry Pi 12MP Camera Module 3 and IoT sensors, the system continuously monitors forested areas. When triggered by sensor activity (e.g., movement or vibrations), it captures images and uses AI to detect the presence of humans or excavators. If a threat is detected, Climate Sentinel sends real-time alerts via SMS, email, and PC notifications to responsible environmental agencies. This helps authorities respond quickly, prevent environmental damage, and protect natural ecosystems more effectively
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
