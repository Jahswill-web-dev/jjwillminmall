import Image from "next/image";
import Link from "next/link";
import image1 from "../public/images/image1.png";
import image2 from "../public/images/image2.png";
import image3 from "../public/images/image3.png";
import image4 from "../public/images/image4.png";


const imgs = [image1, image2, image3, image4];
function Project() {
    return (
        <div className="w-[95%] mx-auto">
            <h1 className="text-center text-primary text-3xl">{"On the Path to Success: Tracking the Project's Current Progress"}</h1>
            <h3 className=" mb-5 text-center sm:text-xl text-secondary">The journey to realizing our groundbreaking plaza complex has already begun. Witness the tangible transformation as our vision takes shape!!</h3>
            <div className="flex flex-wrap gap-10 justify-center">
                {imgs.map((img, index) => (
                    <Image
                    className="w-[70%] sm:w-[25%]"
                        key={index}
                        alt="picture of project site"
                        src={img}
                    />
                ))}
            </div>
            <Link href="/api">
                    <div className="text-white text-2xl font-semibold text-center mx-auto
                    bg-secondary rounded-lg px-1 my-2 py-2.5 flex items-center justify-center w-[13rem] my-5">
                        Visit gallery
                    </div>
                </Link>

        </div>
    )

}


export default Project;