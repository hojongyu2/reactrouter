import blogPosts from "../utils/sampleBlogs"
import { useParams } from "react-router-dom";

const BlogPost = () => {
   
    let params = useParams();
    console.log(params)
    //params are URL that goes after ':' in this case
    const blogPost = blogPosts.find((blog)=> {
        return blog.id === parseInt(params.blogId)
        // s
    })
    return(
        <ul>
            <p>createdAt: {blogPost.createdAt}</p>
            <p>title: {blogPost.title}</p>
            <p>text: {blogPost.text}</p>
            <p>autho: {blogPost.author}</p>
            <p>id: {blogPost.id}</p>
        </ul>
    )
}

export default BlogPost