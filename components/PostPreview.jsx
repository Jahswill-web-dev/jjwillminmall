function PostPreview({posts}) {

//  console.log(posts)
    return ( 
        <>
        
        <h1>{posts.attributes.title}</h1>
        <h3>{posts.attributes.description}</h3>
        
        </>
     );
}

export default PostPreview;