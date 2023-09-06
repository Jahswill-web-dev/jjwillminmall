import Button from "./Button";



function Footer() {

    return (
        <div className="flex flex-col gap-3 sm:flex-row text-secondary text-lg max-w-[1000px] mx-3 mb-3 sm:justify-start">
            <div className="flex flex-col gap-3 sm:w-[25%]">
                <h4 className="font-semibold">Address</h4>
                <p className="sm:w-[70%]">Details2dotsLLC,Houston, TX 77083, USA</p>
                <p>12 Ebony/orazi Road -PHC</p>                
            </div>
                <hr className="text-secondary border border-secondary"/>
            <div className="sm:w-[25%]">
            <h4 className="font-semibold">Contact</h4>
                <p>Phone:+2349047364596</p>
                <p>Phone:+2347080934619</p>
            </div>
            <hr className="text-secondary border border-secondary" />
            
            <div className="sm:w-[25%]">
                <div className="flex flex-col gap-3">
                    <h4 className="font-semibold">Company</h4>
                    <p>Gallery</p>
                    <p>Blog/News</p>
                    <p>jjwillmin@gmail.com</p>
                </div>
            </div>

            <hr className="text-secondary border border-secondary" />
            <div className="sm:self-center sm:w-[25%]">
                <p>©J.J.WILLMIN</p>
            </div>
        </div>
    )

}

export default Footer;