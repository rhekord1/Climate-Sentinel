import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    };

    const slides = [
        {
            title: "Leveraging AI and IoT to protect Ghana's forests and combat ",
            description:
                "266 number of Forests are recognized in Ghana out of which 44 are inhabited by illegal mining companies. Climate Sentinel works with over 1000+ dataset of sound, light and image to train AI models using Huawei's MindSpore framework to formulate a device that detects the occurance of illegal activities in the forest.",
            buttonLabel: "Learn more",
        },
        {
            title: "Eagle Device Identifies Threats Through Sound in the Forest to combat ",
            description:
                "In a protected forest zone, the Eagle device picks up the distinct sound pattern of heavy machinery. Using its sound recognition algorithm, it confirms the threat through the image analysis and sends an alert to the Climate Sentinel web app.",
            buttonLabel: "Learn more",
        },
        {
            title: "When Night Turns Bright: A Warning Signal is sent  and combat ",
            description:
                "In the middle of the night, the Eagle device detects an unexpected source of light deep in the forest, possibly from flashlights, vehicle beams, or illegal mining operations. If it recognizes the anomaly and the image analysis confirms it, an instant alert is sent to respective agents.",
            buttonLabel: "Learn more",
        },
    ];

    return (
        <div className="mt-12 mb-16 px-4 sm:px-6"> {/* Reduced mt-20 to mt-12 */}
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="outline-none">
                        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mb-12">
                            {/* Text Content */}
                            <div className="w-full md:w-3/5 mb-8 md:mb-12"> 
                                <div className="w-full">
                                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 leading-tight">
                                        {slide.title}
                                        <span className="text-green-500">
                                            Galamsey by 2030
                                        </span>
                                    </h1>
                                    <p className="text-sm sm:text-base font-normal text-gray-500 mt-3 sm:mt-4 w-full"> {/* Reduced mt-4 to mt-3 */}
                                        {slide.description}
                                    </p>
                                    <a href="/about">
                                    <button className="p-3 sm:p-4 px-8 sm:px-12 mt-5 sm:mt-6 rounded bg-green-500 text-white font-medium text-sm sm:text-base leading-6"> {/* Reduced mt-8 to mt-5 */}
                                        {slide.buttonLabel}

                                    </button>
                                    </a>
                                </div>
                            </div>
                            
                            {/* Image/Pattern */}
                            <div className="w-full md:w-2/5 h-48 sm:h-64 md:h-80 relative">
                                <div className="bg-hero-pattern absolute inset-0 bg-no-repeat bg-contain bg-center"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HeroCarousel;