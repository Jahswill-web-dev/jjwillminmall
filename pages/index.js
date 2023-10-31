import Head from 'next/head';
import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Content from '../components/Content';
import Cta from '../components/Cta';
import invest from '../public/images/invest.png';
import Details from '../components/Details';
import Jjwillmin from '../components/Company';
import Sponsor from '../components/Sponsor';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
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

        {/*         
        <Cta
          content="Enroll in the J.J.WILLMIN Affiliate Program:  earn anywhere from ₦450,000 to ₦1,000,000 or $590 to $1000+ by referring sponsors or buyers."
          btn="Become an Affiliate"
          st="sm:flex-row-reverse"
          btnLink="/"
          photo={affiliate}
        /> */}
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