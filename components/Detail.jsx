import Image from "next/image";

function Detail({title, content, photo,  content2, highlight, content3, st}) {
    return ( 
        <div className={`${st} mt-10 flex flex-col-reverse items-center gap-3 text-center sm:flex-row sm:gap-5 sm:mx-auto`}>
        <div className="w-[95%] sm:w-[50%] text-left text-secondary">
            <h2 className="text-primary font-semibold text-3xl sm:text-2xl">{title}</h2>
            <p className="text-lg text-secondary">{content}</p>
            <br/>
            <p>{content2} <i className="not-italic text-primary">{highlight}</i> {content3}</p>
        </div>

        <div className="sm:w-[50%] w-[95%]">
            <Image src={photo}
                className="sm:w-[100%] md:w-[80%]"
                alt="web confrence meeting with out Directors"
            />
        </div>
    </div>
     );
}

export default Detail;