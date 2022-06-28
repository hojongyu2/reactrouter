import blogPosts from "../utils/sampleBlogs"
import { useParams } from "react-router-dom";

const BlogPost = () => {
    let params = useParams();
    console.log(params)
    const blogPost = blogPosts.find((blog)=> {
        return blog.id === parseInt(params.blogId)
    })
    return(
        <ul>
            <li>createdAt: {blogPost.createdAt}</li>
            <li>title: {blogPost.title}</li>
            <li>text: {blogPost.text}</li>
            <li>autho: {blogPost.author}</li>
            <li>id: {blogPost.id}</li>
        </ul>
    )
}

export default BlogPost