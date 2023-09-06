import Image from "next/image";
import plaza from "../public/images/3d-plaza.jpg";
import supply from "../public/images/supply-demand.png";

function Content() {
    return (
        <div className="w-[95%] mx-auto" id="about">

            <div className="flex flex-col gap-10" id="about">
                <h2 className="text-center p-3 text-3xl text-secondary">Prime Address, Prized Returns: Your Investment at the Heart of <i className="not-italic text-primary">Demand</i></h2>
                {/* <h2 className="text-center p-3 text-3xl text-secondary"></h2> */}

                <div className="flex flex-col gap-3 sm:gap-10 items-center text-center sm:flex-row  sm:gap-5 sm:mx-auto">
                    <div className="text-left sm:w-[50%]">
                        <h2 className="text-primary font-semibold text-2xl sm:text-2xl mb-2">
                            Discover the Ultimate Investment Opportunity: A Plaza Complex at the Epicenter of Prosperous Trade
                        </h2>
                        <p className="text-lg text-secondary">Presenting a remarkable venture poised at the nexus of thriving commerce, this construction project unveils a plaza complex that transcends conventional investment. </p>
                        <br />
                        <p className="text-lg hidden sm:block text-secondary">Situated within the heart of a bustling trade epicenter in Port Harcourt, Nigeria, this location pulsates with incessant trade activity, anchoring a marketplace with over 5000+ enterprising traders spanning diverse sectors. </p>
                    </div>
                    <div className="sm:w-[50%]">
                        <Image
                            src={plaza}
                            className="w-[90%] sm:w-[100%] sm:mx-auto"
                            alt="3d image of plaza Complex"
                        />
                    </div>
                    <div className="sm:w-[50%] sm:hidden text-left sm:text-start text-secondary ">
                        <p className="text-lg text-secondary">Situated within the heart of a bustling trade epicenter in Port Harcourt, Nigeria, this location pulsates with incessant trade activity, anchoring a marketplace with over 5000+ enterprising traders spanning diverse sectors. </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-10">
                <h2 className="text-center p-3 text-3xl text-secondary">Assured Investment Excellence: Securing Prosperity Amidst Overwhelming Demand</h2>
                {/* <h2 className="text-center p-3 text-3xl text-secondary"></h2> */}

                <div className="flex flex-col gap-3 sm:gap-10 items-center text-center sm:flex-row-reverse  sm:gap-5 sm:mx-auto">
                    <div className="text-left sm:w-[50%]">
                        
                        <p className="text-lg text-secondary">{"In the realm of investments, the golden rule is demand. And within this innovative project lies a virtually unparalleled guarantee,  What sets this venture apart, you ask? The answer is simple: the project's customer base."}</p>
                        <br />
                        <p className="text-lg hidden sm:block text-secondary">Imagine an audience not in the thousands, but in the thousands upon thousands. With over 5000+ traders already poised to secure their space within this project, </p>
                       <br/>
                        <p className="text-lg hidden sm:block text-secondary"><i className="not-italic text-primary">The critical distinction:</i> the customers or traders, each ready to invest in their own shop space, significantly outnumber the spaces available. This overflow of demand ensures that occupancy is guaranteed, creating an atmosphere of sustained prosperity. </p>
                    </div>
                    <div className="sm:w-[50%]">
                        <Image
                            src={supply}
                            className="w-[90%] sm:w-[100%] sm:mx-auto"
                            alt="3d image of plaza Complex"
                        />
                    </div>
                    <div className="sm:w-[50%] sm:hidden text-left sm:text-start text-secondary ">
                        <p className="text-lg text-secondary">Imagine an audience not in the thousands, but in the thousands upon thousands. With over 5000+ traders already poised to secure their space within this project,</p>
                        <br/>
                        <p className="text-lg text-secondary"><i className="not-italic text-primary">The critical distinction:</i> the customers or traders, each ready to invest in their own shop space, significantly outnumber the spaces available. This overflow of demand ensures that occupancy is guaranteed, creating an atmosphere of sustained prosperity.</p>
                    </div>
                </div>


            </div>


        </div>
    );
}

export default Content;