import Image from "next/image";
import Link from "next/link";
import sponsor from "../public/images/sponsorship.png";
import Button from "./Button";

function Sponsor() {
    return (
        <div className="mt-10">
            <h2 className="text-3xl text-primary text-center mx-auto">Sponsorship Proposal</h2>
            {/* <h2 className="text-primary font-semibold text-3xl sm:text-2xl"></h2> */}

            <div className="mt-10 flex flex-col-reverse items-center gap-3 text-center sm:flex-row-reverse sm:gap-5 sm:mx-auto sm:w-[95%]">
                <div className="sm:w-[50%] text-left text-secondary w-[95%]">
                    <p className="text-lg text-secondary">Partial Project Sponsorship with Lucrative Returns. Invest 10 Million Naira and above (approximately $13,000 USD) to secure a 20% commission upon contract completion, spanning 12 months.</p>
                   <br/>
                    <p className="text-lg text-secondary">Book a meeting to get more information on the sponsorship proposal, the cashflow and Timeline of ROI etc.  </p>
                    <Button/>

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