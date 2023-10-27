import Image from "next/image";
import plaza from "../public/images/3d-plaza.jpg";
import supply from "../public/images/supply-demand.png";

function Content() {
    return (
        <div className="w-[95%] mx-auto" id="about">

            <div className="flex flex-col gap-10" id="about">
                <h2 className="text-center p-3 text-3xl text-secondary">The Perfect Real Estate Opportunity For You!!!
                </h2>
                {/* <h2 className="text-center p-3 text-3xl text-secondary"></h2> */}

                <div className="flex flex-col gap-3 sm:gap-10 items-center text-center sm:flex-row  sm:gap-5 sm:mx-auto">
                    <div className="text-left sm:w-[50%]">
                        <p className="text-lg sm:text-3xl text-secondary"> Experience Perfect Timing in Prime Location with Over 5000 Potential Customers. <u>Profit from Your Property: Buyers, Renters, and Leasers Awaiting Your Offer!</u>
                        </p>

                    </div>
                    <div className="sm:w-[50%]">
                        <Image
                            src={plaza}
                            className="w-[90%] sm:w-[100%] sm:mx-auto"
                            alt="3d image of plaza Complex"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
                <h2 className="text-center p-2 text-2xl text-secondary">Investing where there's guaranteed demand ensures a secure investment.</h2>
                {/* <h2 className="text-center p-3 text-3xl text-secondary"></h2> */}

                <div className="text-secondary flex flex-col gap-3 sm:gap-10 items-center text-center sm:flex-row-reverse  sm:gap-5 sm:mx-auto">
                    <div className="text-left sm:w-[50%]">
                        <p className="text-lg sm:text-3xl">Embrace the golden rule of investment, in this case where demand consistently outpaces supply, ensuring your return on investment is a certainty.</p>

                    </div>
                    <div className="sm:w-[50%]">
                        <Image
                            src={supply}
                            className="w-[100%] mx-auto sm:w-[100%] sm:mx-auto"
                            alt="3d image of plaza Complex"
                        />
                    </div>

                </div>


            </div>


        </div>
    );
}

export default Content;