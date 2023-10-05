import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function HomeLatestPost({ posts }) {
    const [latestPost, setLatestPost] = useState([]);

    useEffect(() => {
        setLatestPost(posts.slice(0, 3));

    }, [posts]);

    function renderPostPreview() {
        return latestPost.map((post) => {
            return <PostPreview posts={post} key={post.id} />
        });
    }   

    return (
        <>
            <div>

                <h2 className="text-4xl">Latest Post</h2>
                {renderPostPreview()}
                
            </div>
        </>
    );
}


export default HomeLatestPost;


export async function getStaticProps(){

 const response = await axios.get("http://localhost:1337/api/posts");

    return {
        props:{
            posts:response.data.data
        },
    };
}