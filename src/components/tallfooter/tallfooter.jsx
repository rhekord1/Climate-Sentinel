import { FaArrowRight } from "react-icons/fa6";

export default function TallFooter() {
    return (
        <div className="px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="w-full md:w-[90%] lg:w-[800px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mx-auto text-center font-[600] text-[#263238] leading-tight">
                    Real-time Alerts Display
                </h1>
                <a href="/dashboard">
                <button className="flex gap-2 sm:gap-[8px] items-center bg-[#4CAF4F] hover:bg-green-600 px-4 sm:px-6 py-2 sm:py-[14px] rounded font-[500] text-sm sm:text-[16px] text-white mx-auto mt-6 sm:mt-8 md:mt-[40px] transition-colors duration-300">
                    Go to Dashboard <FaArrowRight className="mt-0.5 sm:mt-[6px]" />
                </button>
                </a>
            </div>
        </div>
    );
}