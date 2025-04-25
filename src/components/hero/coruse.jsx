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
    };

    const slides = [
        {
            title: "Leveraging AI and IoT to protect Ghana's forests and combat ",
            description:
                "266 number of Forests are recognized in Ghana out of which 44 are inhabited by illegal mining companies. Climate Sentinel works with over 1000+ dataset of sound, light and image to train AI models using Huawei's MindSpore framework to formulate a device that detects the occurance of illegal activities in the forest.",
            buttonLabel: "Learn more",
        },
        {
            title: "Leveraging AI and IoT to protect Ghana's forests and combat ",
            description:
                "266 number of Forests are recognized in Ghana out of which 44 are inhabited by illegal mining companies. Climate Sentinel works with over 1000+ dataset of sound, light and image to train AI models using Huawei's MindSpore framework to formulate a device that detects the occurance of illegal activities in the forest.",
            buttonLabel: "Learn more",
        },
        {
            title: "Leveraging AI and IoT to protect Ghana's forests and combat ",
            description:
                "266 number of Forests are recognized in Ghana out of which 44 are inhabited by illegal mining companies. Climate Sentinel works with over 1000+ dataset of sound, light and image to train AI models using Huawei's MindSpore framework to formulate a device that detects the occurance of illegal activities in the forest.",
            buttonLabel: "Learn more",
        },
    ];

    return (
        <div className="mt-20 mb-16">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="flex justify-center"
                    >
                        <div className="w-full max-w-6xl flex gap-8 m-auto mb-12">
                            <div className="mb-16 w-3/5">
                                <div className="w-full">
                                    <h1 className="text-4xl font-semibold text-gray-700 leading-tight">
                                        {slide.title}
                                        <span className="text-green-500">
                                            Galamsey by 2030
                                        </span>
                                    </h1>
                                    <p className="text-base font-normal text-gray-500 mt-4 w-full">
                                        {slide.description}
                                    </p>
                                    <button className="p-4 px-12 mt-8 rounded bg-green-500 text-white font-medium text-base leading-6">
                                        {slide.buttonLabel}
                                    </button>
                                </div>
                            </div>
                            <div className="relative w-2/5">
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