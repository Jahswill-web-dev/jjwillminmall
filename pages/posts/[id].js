// import axios from 'axios';
import React from 'react';
import MarkdownIt from 'markdown-it';
import * as cheerio from 'cheerio';
import Nav from '../../components/Nav';

// export const getStaticPaths = async () => {
//     const res = await axios.get("http://localhost:1337/api/posts");
//     //  console.log(res)

//     if (res.status !== 200) {
//         console.error(`HTTP request failed with status ${res.status}`);
//         return;
//     }
//     const blob = (await res).data
//     const info = blob.data
//     console.log(info)

//     const paths = info.map(dt => {
//         return {
//             params: { id: dt.id.toString() }
//         }
//     });
//     return {
//         paths,
//         fallback: false
//     }


// }

function PostPage({ post }) {
    // console.log(post)
    const md = new MarkdownIt();
    const htmlContent = md.render(post.attributes.content);
    const $ = cheerio.load(htmlContent);
    //  console.log($.html())

    // console.log(post.attributes.thumbnail.data.attributes.url)
    // const imgUrl = `localhost:1337${post.attributes.thumbnail.data.attributes.url}`;
    return (
        <div>
            <Nav />
            <div className='flex items-center justify-center text-3xl h-[100vh]'>Coming Soon....</div>
            {/* <article className='header'>
                <div className='flex flex-col sm:flex-row'>
                    <h1>{post.attributes.title}</h1>
                     <Image 
                    src={imgUrl}
                    width={200}
                    height={200}
                    /> 
                    
                </div>
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
            </article> */}
        </div>

    );
}

export default PostPage;

// export async function getStaticProps({ params }) {
//     console.log(params)
//     const response = await axios.get(`http://localhost:1337/api/posts/${params.id}?populate=*`);


//     return {
//         props: {
//             post: response.data.data
//         }
//     }

// }


// export async function getStaticPaths(){
//     const response = await axios.get("http://localhost:1337/posts");

//     const paths = response.data.data.map(() => {
//         return {params: {id: post.id.toString()}}
//     });


//     return {
//         paths,
//         fallBack:false
//     }
// }