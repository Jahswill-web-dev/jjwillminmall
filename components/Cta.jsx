import Image from "next/image";
// import meeting from "../public/images/meeting.png";
import Link from "next/link";
import Button from "./Button";



function Cta({ content, content2, title, btn, btnLink, photo, st }) {
    return (
        <div className={`mt-10 flex flex-col-reverse items-center gap-3 text-center ${st} sm:gap-5 sm:mx-auto sm:w-[95%]`}>
            <div className="sm:w-[50%] text-left text-secondary w-[95%]">
                <h2 className="text-primary font-semibold text-3xl sm:text-2xl">{title}</h2>
                <p className="text-lg text-secondary">{content}</p>
                <br />
                <p className="text-lg text-secondary">{content2}</p>
                <Button />

            </div>

            <div className="sm:w-[50%] w-[95%]">
                <Image src={photo}
                    className="sm:w-[100%]"
                    alt="web confrence meeting with out Directors"
                />
            </div>
        </div>
    );
}

export default Cta;