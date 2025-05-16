export default function Cameramodule() {
    return (
        <div className="px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[50px] mt-12 lg:mt-[100px] justify-center items-center mb-12 lg:mb-[80px]">
                    {/* Image Section */}
                    <div className="bg-cam-pattern h-64 sm:h-80 lg:h-[440px] w-full lg:w-[441px] bg-cover rounded-lg"></div>
                    
                    {/* Content Section */}
                    <div className="w-full lg:w-auto">
                        <h2 className="font-[700] text-2xl sm:text-3xl lg:text-[45px] w-full lg:w-[550px] text-[#4d4d4d] leading-tight">
                            On Site Camera Module
                        </h2>
                        <p className="w-full lg:w-[550px] text-sm sm:text-[14px] font-[400] text-[#717171] mt-4 lg:mt-[16px]">
                            Responsible agents are allowed to request for live surveillance and manually capture images at the spots. They are also allowed to view historical images which were automatically captured by the camera.
                        </p>
                        
                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 lg:mt-8">
                            <a href="/camera-panel">
                            <button className="py-2 sm:py-3 px-6 sm:px-8 bg-custom-green rounded text-white font-[500] text-sm sm:text-[16px] hover:bg-green-600 transition-colors">
                                View Historical Images
                            </button>
                            </a>
                            <a href="/camera-panel">
                            <button className="py-2 sm:py-3 px-6 sm:px-8 bg-custom-blue rounded text-white font-[500] text-sm sm:text-[16px] hover:bg-blue-600 transition-colors">
                                View Live Images
                            </button>
                            </a>
                        </div>
                        
                        <p className="w-full lg:w-[550px] text-sm sm:text-[14px] font-[400] text-[#717171] mt-4 lg:mt-[16px]">
                            Camera status
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}