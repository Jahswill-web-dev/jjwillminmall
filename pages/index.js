import Head from 'next/head';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Cta from '../components/Cta';
import meeting from '../public/images/meeting.png';
import Details from '../components/Details';
import Jjwillmin from '../components/Company';
import Progress from '../components/Project';
import Sponsor from '../components/Sponsor';
import image3 from '../public/images/image3.png';
import image4 from '../public/images/3d-picture.jpeg';
import affiliate from '../public/images/affiliate.png';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
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
          content="Start a chat to discover how you can benefit and profit from this project, and explore how this visionary real estate opportunity aligns with your investment goals."
          title="Discover more"
          btn="Get in Touch Now!!"
          st="sm:flex-row"
          btnLink="/"
          photo={meeting}
        />
        <Details />

        <Cta
          content="The duration of the project Is 12 months and it  began on the 1st of august 2023 book a meeting with on of our directors to secure your spot in this project and gain more information."
          title="Project Duration"
          btn="Chat us on whatsapp for more information"
          st="sm:flex-row"
          btnLink="/"
          photo={image3}
        />
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
        <Contact/>
        <Footer/>
      </div>

    </>
  )
}
