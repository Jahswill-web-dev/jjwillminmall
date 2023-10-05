import React from "react";
import PostPreview from "./PostPreview";

function AllPost({ posts }) {
   

    function renderPostPreview() {
        return posts.map((post) => {
            return <PostPreview posts={post} key={post.id} />
        });
    }   

    return (
        <>
            <div>

                <h2 className="text-4xl">All Post</h2>
                {renderPostPreview()}
                
            </div>
        </>
    );
}


export default AllPost;


export async function getStaticProps(){

 const response = await axios.get("http://localhost:1337/api/posts");

    return {
        props:{
            posts:response.data.data
        },
    };
}