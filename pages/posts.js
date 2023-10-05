import React from 'react'; 
import Head from "next/head";
import Nav from "../components/Nav";
// import axios from 'axios';
// import HomeLatestPost from '../components/HomeLatestPost';
// import AllPost from '../components/AllPost';


function posts({ content }) {
// console.log(content.data[0].attributes.title);

const post = content;
// console.log(post);
    return (<>
        <Head>
            <title>J.J.WILLMIN SHOPPING MALL Blog</title>
            <meta name="description" content="Lucratve Real Estate Investment, own a space in the J.J.WILLMIN SHOPPING MALL complex and make profits" />
            <link rel="icon" href="/logo.png" />
        </Head>
        <div className="">
            <Nav/>
            <div className='flex items-center justify-center text-3xl h-[100vh]'>Coming Soon....</div>
            {/* <div className="">               
                <AllPost posts={post}/>
            </div> */}
        </div>

    </>);
}

export default posts;

// export async function getStaticProps(){

// const response = await axios.get("http://localhost:1337/api/posts");
    
// return {
//         props:{
//             content:response.data.data
//         }

//     }
// }