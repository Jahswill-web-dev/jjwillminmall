import React, { useState } from 'react';
// import Image from "next/image";
import Link from "next/link";
import Image from 'next/image';
import logo from "../public/images/logo.png";

function Nav() {
    const [navHeight, setNavHeigth] = useState("h-0");

    const handleNav = () => {
        setNavHeigth(navHeight === "h-0" ? "h-60" : "h-0");
    }
    return (
        <div className="sticky top-0 left-0 right-0 w-full z-30">
            {/* mobile */}
            <nav className="flex justify-between px-4 py-2 items-center md:hidden bg-white">
                <Link href="/#home" className="text-3xl text-primary">
                    <Image
                        src={logo}
                        alt='jjwillmin logo'
                        width={50}
                        height={50}
                    />
                </Link>
                <i className="fa fa-bars text-primary text-3xl" onClick={handleNav}></i>
            </nav>
            <ul className={`flex flex-col items-center gap-4 transition-all ease-in-out ${navHeight} md:h-0
                 duration-400 delay-150 overflow-hidden text-primary text-2xl bg-white absolute top-[3.5rem] bottom-0 left-0 right-0`}
                style={{ transition: 'height 0.3s' }} >
                <Link href="/#about">About</Link>
                <Link href="/#contact">Contact</Link>
                <Link href="/posts">Blog/News</Link>
                <Link href="/gallery">Gallery</Link>
                {/* <Link href="https://calendly.com/golddustai/business-consultaion-call">
                    <div className="text-white text-2xl mx-auto sm:mx-0 font-semibold text-center bg-primary rounded-lg px-1 my-2 py-2.5  w-[13rem]">
                        Book a free call
                    </div>
                </Link> */}
            </ul>


            {/* desktop */}
            <nav className="flex justify-between px-4 py-2 items-center hidden md:flex bg-white">
                <Link href="/#home" className="text-3xl text-primary"><Image
                    src={logo}
                    alt='jjwillmin logo'
                    width={50}
                    height={50}
                /></Link>
                <ul className="hidden md:flex gap-5 text-primary pr-4 text-xl">
                    <Link href="/#about">About</Link>
                    <Link href="/#contact">Contact </Link>
                    <Link href="/posts">Blog/News</Link>
                    <Link href="/gallery">Gallery</Link>
                </ul>
            </nav>






        </div>
    );
}

export default Nav;