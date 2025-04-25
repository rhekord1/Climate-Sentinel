export default function Cameramodule() {
    return (
        <div className="">
            <div className="">
                <div className="flex gap-[50px] mt-[100px] justify-center mb-[80px]">
                    <div className="bg-cam-pattern h-[440px]  w-[441px]  bg-cover"></div>
                    <div className="">
                        <h2 className="font-[700] text-[45px] w-[550px] text-[#4d4d4d]">
                        On Site Camera Module
                        </h2>
                        <p className="w-[550px] text-[14px] font-[400] text-[#717171] mt-[16px]">
                        Responsible agents are allowed to request for live surveillance and manually capture images at the spots. They are also allowed to view historiacal images which were automatically captured by the camera
                        </p>
                        <button className="py-3 px-8 bg-custom-green rounded text-white mt-8 mr-8 font-[500] text-[16px]">
                        View Hisitorical Images
                        </button>
                        <button className="py-3 px-8 bg-custom-blue rounded text-white mt-8 font-[500] text-[16px]">
                        View Live Images
                        </button>
                        <p className="w-[550px] text-[14px] font-[400] text-[#717171] mt-[16px]">
                        Camera status
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
