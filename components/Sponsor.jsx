import Image from "next/image";
import Link from "next/link";
import sponsor from "../public/images/sponsorship.png";
import Button from "./Button";

function Sponsor() {
    return (
        <div className="mt-10">
            <h2 className="text-3xl text-primary text-center mx-auto">Work in Progress</h2>
            {/* <h2 className="text-primary font-semibold text-3xl sm:text-2xl"></h2> */}

            <div className="mt-10 flex flex-col-reverse items-center gap-3 text-center sm:flex-row-reverse sm:gap-5 sm:mx-auto sm:w-[95%]">
                <div className="sm:w-[50%] text-left text-secondary w-[95%]">
                    <p className="text-lg text-secondary">The Project is in progress Invest in real estate now, Choose your unit and start reaping returns</p>
                    <Button content="Select Your Ideal Unit"/>

                </div>

                <div className="sm:w-[50%] w-[95%]">
                    <Image src={sponsor}
                        className="sm:w-[100%]"
                        alt="web confrence meeting with out Directors"
                    />
                </div>
            </div>
        </div>
    );
}

export default Sponsor;