import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Head from "next/head";
import Image from "next/image";



const dimages = [
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160574/3d-8_ybhos2.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160516/3d-4_pm4tbc.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160516/3d-2_opdqdj.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160509/3d-1_hvev7d.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160516/3d-3_mqo9bn.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160517/3d-6_xfvdzb.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160517/3d-7_ofmod4.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694160516/3d-5_wxeprw.jpg"
]
const images = [
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694084085/mall/p62_jazn99.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694084085/mall/p63_fdj5zu.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694084086/mall/p61_bppnrl.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694084085/mall/p64_al8hxb.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082564/mall/p7_d8ndoh.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082559/mall/p13_h5hyca.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082552/mall/p15_siqksr.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694084085/mall/p60_kyftwq.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082649/mall/p25_ovbnmh.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082631/mall/p19_xeon0h.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082623/mall/p22_xck3gn.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082579/mall/p10_bapacj.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082574/mall/p17_pz1np6.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082582/mall/p24_qrmsnq.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082579/mall/p28_ooqpuk.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082581/mall/p26_lj0dk2.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082608/mall/p30_pqkyhh.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082569/mall/p33_ackob1.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082571/mall/p32_clahe7.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082541/mall/p52_fiv54e.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082563/mall/p42_khowhw.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082557/mall/p48_h50pve.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082550/mall/p41_ubpz1s.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082557/mall/p34_cca6kp.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082553/mall/p35_x8pdeb.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082551/mall/p49_v0ztia.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082553/mall/p39_jlqij4.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082549/mall/p47_r8k5az.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082544/mall/p54_v3undb.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082544/mall/p56_tnvtb7.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082542/mall/p55_xabzez.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082541/mall/p53_peca6e.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1694082536/mall/p58_j7cms9.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508296/mall/WhatsApp_Image_2023-10-04_at_07.10.28_wabirc.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508296/mall/WhatsApp_Image_2023-10-04_at_07.14.23_3_eblwjz.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508297/mall/WhatsApp_Image_2023-10-04_at_07.24.58_seyp91.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508296/mall/WhatsApp_Image_2023-10-04_at_07.14.23_2_ciel2k.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508295/mall/WhatsApp_Image_2023-10-04_at_07.14.23_pgal8h.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508296/mall/WhatsApp_Image_2023-10-04_at_07.14.23_4_bgbhkl.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508295/mall/WhatsApp_Image_2023-10-04_at_07.24.59_nw5wzz.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508295/mall/WhatsApp_Image_2023-10-04_at_07.14.23_1_jebffc.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508490/mall/WhatsApp_Image_2023-10-04_at_07.26.31_1_xpobzp.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508489/mall/WhatsApp_Image_2023-10-04_at_07.26.31_eglrpn.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508485/mall/WhatsApp_Image_2023-09-30_at_19.42.12_ao8mdz.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508485/mall/WhatsApp_Image_2023-10-04_at_07.26.29_lizrbo.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508486/mall/WhatsApp_Image_2023-10-04_at_07.26.30_wjba3i.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508489/mall/WhatsApp_Image_2023-10-04_at_07.26.30_1_rfvqoc.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508479/mall/WhatsApp_Image_2023-09-30_at_19.42.15_r6jvlu.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508479/mall/WhatsApp_Image_2023-09-30_at_19.42.14_1_uaacvt.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508478/mall/WhatsApp_Image_2023-10-04_at_07.26.32_e0rb7z.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508478/mall/WhatsApp_Image_2023-10-04_at_07.26.31_2_lyzb6j.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508479/mall/WhatsApp_Image_2023-09-30_at_19.42.14_x57evy.jpg",
    "https://res.cloudinary.com/drpzv54qa/image/upload/v1696508478/mall/WhatsApp_Image_2023-10-04_at_07.26.31_3_ijw9bo.jpg"

]
function Gallery() {

    return (
        <>
            <Head>
                <title>J.J.WILLMIN SHOPPING MALL Gallery</title>
                <meta name="description" content="Lucratve Real Estate Investment, own a space in the J.J.WILLMIN SHOPPING MALL complex and make profits" />
                <link rel="icon" href="/logo.png" />
            </Head>
            <div>

                <Nav />
                <h1 className="text-4xl text-secondary text-center relative z-20 top-20 mx-auto mb-20">Project Gallery</h1>
                <h3 className="text-center text-primary text-xl py-5">Proposed Building in 3D</h3>
                <div className="p-3 sm:p-5 flex flex-row flex-wrap gap-5 justify-evenly">
                    {dimages.map((project, index) =>
                        <Image
                            key={index}
                            src={project}
                            width={400}
                            height={400}
                            className="w-[100%] sm:w-[300px] lg:w-[400px]"
                            alt="JJwillmin mall images"
                        />)}
                </div>

                <h3 className="text-center text-primary text-2xl py-5">Work in progress...</h3>
                <div className="p-3 sm:p-5 flex flex-row flex-wrap gap-5 justify-evenly">
                    {images.map((project, index) =>
                        <Image
                            key={index}
                            src={project}
                            width={400}
                            height={400}
                            className="w-[100%] sm:w-[300px] lg:w-[400px]"
                            alt="JJwillmin mall images"
                        />)}
                </div>

            </div>
        </>
    );
}

export default Gallery;