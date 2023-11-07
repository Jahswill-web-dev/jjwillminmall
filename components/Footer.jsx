// import Button from "./Button";
import Link from "next/link";



function Footer() {

    return (
    <div>
        <div className="flex flex-col pt-3 md:gap-10 md:flex-row text-secondary text-lg max-w-[1000px] mx-3 mb-3 sm:justify-center">
            <div className="flex flex-col gap-3 sm:w-[25%]">
                <h4 className="font-semibold">Address</h4>
                <p className="sm:w-[70%]">Details2dotsLLC,Houston, TX 77083, USA</p>
                <p>12 Ebony/orazi Road -PHC</p>                
            </div>
                <hr className="text-secondary border border-secondary"/>
            <div className="md:w-[25%]">
            <h4 className="font-semibold">Contact us</h4>
                <p><Link href="https://wa.me/+2349039886082?text=" target="_blank">Phone:+2349039886082</Link></p>
                <p><Link href="https://wa.me/+2349047364596?text=" target="_blank">Phone:+2349047364596</Link></p>
                <p><u>USA</u></p>
                <p><Link href="tel:+1(832) 427-8219" target="_blank">Phone:+1(832) 427-8219</Link></p>
                <p><u>UK</u></p>
                <p><Link href="tel:+447585451724" target="_blank">Phone:+447585451724</Link></p>
            </div>
            <hr className="text-secondary border border-secondary" />
            
            <div className="md:w-[25%]">
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold">Company</h4>
                    <Link href="/gallery">Gallery</Link>
                    {/* <p>Blog/News</p> */}
                    <p>jjwillmin@gmail.com</p>
                </div>
            </div>

            <hr className="text-secondary border border-secondary" />
            
            </div>
            <div className="sm:self-center sm:w-[25%] mx-auto p-5">
                <p>©J.J.WILLMIN</p>
            </div>
        </div>
    )

}

export default Footer;