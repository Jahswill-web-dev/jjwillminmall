import Image from "next/image";
import banner from "../public/images/banner-image.png";
import Button from "./Button";

function Banner() {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center">
            <div className="z-10 flex flex-col gap-3 w-[90%] mx-auto text-left sm:text-center items-start sm:items-center">
                <h1 className="text-white text-3xl sm:text-4xl">
                    Invest with Confidence: Unveiling the Ultimate Real Estate Opportunity for Discerning Investors
                </h1>
                <h4 className="text-lg sm:text-2xl text-white">
                    Prime Location, Unprecedented Demand: A Game-Changing Real Estate Venture Tailored for Swift and Substantial Returns
                </h4>
                {/* <Button bcontent="Schedule A Free Consultation Call" stb="heoll"/> */}
                <Button/>
            </div>
            <Image
                src={banner}
                alt="Skyscrapers"
                fill
                style={{ objectFit: "cover" }}
            />
        </div>
    );
}

export default Banner;