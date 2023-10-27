import Head from 'next/head';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Cta from '../components/Cta';
import invest from '../public/images/invest.png';
import Details from '../components/Details';
import Jjwillmin from '../components/Company';
import Progress from '../components/Project';
import Sponsor from '../components/Sponsor';
import image3 from '../public/images/image2.png';
import image4 from '../public/images/3d-picture.jpeg';
import affiliate from '../public/images/affiliate.png';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Pixel from '../components/pixel';
// import HomeLatestPost from '../components/HomeLatestPost';
import axios from 'axios';

// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// const image3 = "https://res.cloudinary.com/drpzv54qa/image/upload/v1694084086/mall/p61_bppnrl.jpg";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>J.J.WILLMIN SHOPPING MALL</title>
        <meta name="description" content="Lucratve Real Estate Investment, own a space in the J.J.WILLMIN SHOPPING MALL complex and make profits" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className=''>

        <Nav />
        <Banner />
        <Content />
        <Cta
          content="Start Investing in Real Estate today to reap the rewards of Real state by buying your very own spaces in this complex "
          title="START INVESTING TODAY!!!"
          btn="Start Investing!!"
          st="sm:flex-row"
          btnLink="/"
          photo={invest}
        />
        <Details />

        <Sponsor />
        <Jjwillmin />
        <Progress />
        <Cta
          content="Gain insights into the project's potential, our innovative strategies, and get answers to all your questions, ensuring you make an informed decision.
          "
          content2="Book a meeting to see how you can be part of this project Now"
          title="Learn More"
          st="sm:flex-row"
          btn="Start a chat for more information"
          btnLink="/"
          photo={image4}
        />
        <Cta
          content="Enroll in the J.J.WILLMIN Affiliate Program:  earn anywhere from ₦450,000 to ₦1,000,000 or $590 to $1000+ by referring sponsors or buyers."
          btn="Become an Affiliate"
          st="sm:flex-row-reverse"
          btnLink="/"
          photo={affiliate}
        />
        <Contact />


        <Footer />
      </div>

    </>
  )
}



// export async function getStaticProps(){

//  const response = await axios.get("http://localhost:1337/api/posts");

// return {
//     props:{
//       posts:response.data.data
//     },
// };

// }