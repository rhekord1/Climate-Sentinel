export default function CameraModule() {
    return (
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
                        Who we are
                        </h2>
                        <p className="w-full lg:w-[550px] text-sm sm:text-[14px] font-normal text-[#717171] mt-4 sm:mt-[16px]">
                        Climate Sentinel was founded in 2024/2025 by the Huawei Academy of the University of Ghana. It is an AI-powered environmental monitoring system designed to combat illegal deforestation and mining activities. Using a Raspberry Pi 12MP Camera Module 3 and IoT sensors, the system continuously monitors forested areas. When triggered by sensor activity (e.g., movement or vibrations), it captures images and uses AI to detect the presence of humans or excavators. If a threat is detected, Climate Sentinel sends real-time alerts via SMS, email, and PC notifications to responsible environmental agencies. This helps authorities respond quickly, prevent environmental damage, and protect natural ecosystems more effectively

                        </p>
                
                    </div>
                </div>
            </div>
        </div>
    );
}