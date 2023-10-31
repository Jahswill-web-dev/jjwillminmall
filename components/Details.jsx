import Detail from "./Detail";
import shops from "../public/images/shops.jpeg";
// import ownership from "../public/images/ownership.png";
// import profit from "../public/images/profit.png";
// import time from "../public/images/time.png";


function Details() {
    return (
        <div className="my-10 w-[95%] mx-auto">
            <h2 className="text-left sm:text-center p-3 text-3xl text-secondary">THE PRICING AND PURCHASE OPTIONS </h2>
            <h3 className="text-left sm:text-center p-3 text-xl text-secondary">Explore Unit Pricing, Sizes, and Payment Methods. </h3>
            <Detail
                unit="Single Unit"
                price="Price: ₦9.5M"
                outright="Outright Purchase: ₦9.5M"
                deposit="Initial Deposit: ₦3M"
                monthly="Monthly: ₦666,650"
                photo={shops}
            />

            <Detail
                st="sm:flex-row-reverse"
                unit="Double Unit"
                price="Price:₦21M"
                outright="Outright Purchase:₦21M"
                deposit="Initial Deposit: ₦6M "
                monthly="Monthly: ₦1,450.000"
                photo={shops}
            />
            <Detail
                 unit="Ground Floor"
                 price="Price:₦10.5M"
                 outright="Outright Purchase:₦10.5M"
                 deposit="Initial Deposit: ₦3.5M"
                 monthly="Monthly: ₦700,000 "
                 photo={shops}
            />

        </div>
    );
}

export default Details;