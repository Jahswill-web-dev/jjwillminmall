import Detail from "./Detail";
import shops from "../public/images/shops.jpeg";
import ownership from "../public/images/ownership.png";
import profit from "../public/images/profit.png";
import time from "../public/images/time.png";


function Details() {
    return (
        <div className="my-10 w-[95%] mx-auto">
            <h2 className="text-left sm:text-center p-3 text-3xl text-secondary">The Project Details and the Lucrative Business Model</h2>
            <h3 className="text-left sm:text-center p-3 text-xl text-secondary">This section unveils the intricate details that define our plaza complex, shaping the landscape of prosperous possibilities.</h3>
            <Detail
                title="200 Shops/Office Spaces"
                content="A grand complex comprising 200 meticulously designed shops and office spaces. This isn't just a development; it's a thriving hub poised to accommodate the aspirations of enterprising individuals and businesses alike."
                photo={shops}
            />

            <Detail
                st="sm:flex-row-reverse"
                title="Flexible Pathways to Ownership"
                content="Customize Your Investment: Tailor your space to your vision whether it's a single unit, a double unit, or a warehouse space, each option caters to a unique vision. "
                content2="What sets this venture apart is that    As an owner, you have the autonomy to mold your investment destiny."
                highlight="these spaces are yours, forever—no leases, no rentals."
                content3="As an owner, you have the autonomy to mold your investment destiny."
                photo={ownership}
            />
            <Detail
                title="Diverse Avenues of Profit: How you can make your profit"
                content="It's all about the freedom to strategize. Will you opt to rent it out and reap recurring returns? Or perhaps leasing aligns more closely with your vision? And let's not forget the potential to sell, with buyers vying for a piece of this prosperous plaza and make instant profits."
                photo={profit}
            />
            <Detail
                st="sm:flex-row-reverse"
                title="Timing is Key: Seizing the moment"
                content2="Those who acquire spaces in the initial stages of this project secure an advantageous position. With prices set to surge upon completion due to escalating demand,"
                highlight="early investors /buyers stand to profit significantly—up to 10.5 million naira or $12,000+ —should they choose to sell."
                content3="The imminent influx of traders and buyers creates an opportunity you won't want to miss."
                photo={time}
            />



        </div>
    );
}

export default Details;