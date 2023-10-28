import Image from "next/image";
import banner from "../public/images/banner-image.jpg";
import Button from "./Button";

function Banner() {
    return (
        <div id="home" className="relative h-screen flex items-center justify-center">
            <div className="z-10 flex flex-col gap-3 w-[90%] mx-auto text-left sm:text-center items-start sm:items-center">
                <h1 className="text-white text-3xl sm:text-4xl">
                    Join The Real Estate Market with Just ₦9.5M Affordable Entry, High Returns!
                </h1>
                <h4 className="text-lg sm:text-2xl text-white">
                    Prime Location, High Demand Real Estate Opportunity, Reap
                    High Returns in 12 months
                </h4>
                {/* <Button bcontent="Schedule A Free Consultation Call" stb="heoll"/> */}
                <Button content="Start Investing Now!!"/>
            </div>
            <Image
                src={banner}
                alt="Skyscrapers"
                fill
                style={{ objectFit: "cover" }}
                className="darken-image"
            />
        </div>
    );
}

export default Banner;