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
                            What we do
                        </h2>
                        <p className="w-full lg:w-[550px] text-sm sm:text-[14px] font-normal text-[#717171] mt-4 sm:mt-[16px]">
                            We explore Ghana's forests and place our eagle devices in strategic points across protected areas, 
                            thereby enabling immediate intervention by responsible agents. Using AI-powered cameras and IoT sensors, 
                            we detect illegal activities such as logging and mining in real time. 
                            Our system captures evidence, triggers alerts, and logs all activity on a secure dashboard.
                            We work closely with environmental agencies and local authorities to provide verified reports that support enforcement actions and long-term forest conservation.
                        </p>
                        <a href="/about">
                        <button className="py-2 sm:py-3 px-6 sm:px-8 bg-custom-green rounded text-white mt-6 sm:mt-8 font-medium text-sm sm:text-[16px] hover:bg-green-600 transition-colors duration-300">
                            Learn More
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}