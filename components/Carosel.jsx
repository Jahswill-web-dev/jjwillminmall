import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Image from "next/image";
// import Link from "next/link";
import Picture from "../public/images/affiliate.png";

export default function Carosel() {
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="relative">
            <div className="flex justify-center gap-[18rem] relative items-center z-10 top-[5rem]">
                <i className="fa-solid fa-chevron-left text-2xl text-secondary"
                    onClick={sliderRef?.slickPrev}>
                </i>
                <button onClick={sliderRef?.slickNext}>
                    <i className="fa-solid fa-chevron-right text-2xl text-secondary"></i>
                </button>

            </div>
            <Slider ref={setSliderRef} {...settings} className="mx-auto">
                <div>
                    <Image
                        src={Picture}
                        alt="gain clarity on how to use Artificial intelligence "
                        className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                    />
                </div>

                <div className="">
                    <Image
                        src={Picture}
                        alt="gain clarity on how to use Artificial intelligence "
                        className="mx-auto w-[30%] sm:max-w-[50%] mb-2"
                    />
                </div>

            </Slider>
        </div>


    )
}