import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.png";


function Jjwillmin() {
    return (
        <div className="my-20">
            <h2 className="text-center text-primary mx-auto text-4xl sm:text-2xl">Experienced Oversight</h2>
            <div className="flex flex-col-reverse items-center gap-3 text-center sm:flex-row sm:gap-5 sm:mx-auto sm:w-[95%]">

                <div className="sm:w-[50%] text-left text-secondary w-[95%]">
                    <p className="text-lg text-secondary">This private project is in excellent hands with J.J.WILLMIN, a construction company with decades of experience in the industry.  They have an impressive track record of successfully executing high-value projects, similar to the present project.</p>
                    <br/>
                    <p> J.J.WILLMIN has worked with top-notch real estate companies like Lekki Gardens and has also delivered outstanding results on various government contracts. </p>
                    <br />
                    <p>With their wealth of experience and expertise, <Link href="https://jjwillmin.com" className="text-primary"> J.J.WILLMIN</Link> is the ideal fit to oversee this project and ensure its successful completion.</p>
                </div>

                <div className="sm:w-[50%] w-[95%]">
                    <Image src={logo}
                        className="sm:w-[100%]"
                        alt="web confrence meeting with out Directors"
                    />
                </div>
            </div>
        </div>
    );
}

export default Jjwillmin;