import Image from "next/image";

function Detail(props) {
    return (
        <div className={`mt-10 flex flex-col-reverse items-center justify-center gap-0 text-center sm:flex-row sm:gap-5 sm:mx-auto outline outline-offset-2 outline-primary`}>
            <div className="w-[95%] sm:w-[50%] text-left text-secondary leading-6">
                <div>
                    <p className="text-3xl">{props.unit}</p>
                    <p>{props.price}</p>
                </div>

                <p>Choose Your Purchase Option:</p>

                <div className="text-xl leading-10">
                    <p>{props.outright}</p>
                    <p>Monthly Payments for 12 Months:</p>
                    <p>{props.deposit}</p>
                    <p>{props.monthly}</p>
                </div>
            </div>

            <div className="sm:w-[50%] w-[95%]">
                <Image src={props.photo}
                    className=""
                    alt="web confrence meeting with out Directors"
                />
            </div>
        </div>
    );
}

export default Detail;