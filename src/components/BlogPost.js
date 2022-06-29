import blogPosts from "../utils/sampleBlogs"
import { useParams } from "react-router-dom";

const BlogPost = () => {
   
    let params = useParams();
    console.log(params)
    //params are URL that goes after ':' in this case
    const foundBlog = blogPosts.find((blog)=> {
        return blog.id === parseInt(params.blogId)
        // s
    })
    return(
        <ul>
            <p>Id: {foundBlog.id}</p>
            <p>Title: {foundBlog.title}</p>
            <p>Text: {foundBlog.text}</p>
            <p>Autho: {foundBlog.author}</p>
            <p>CreatedAt: {foundBlog.createdAt}</p>
        </ul>
    )
}

export default BlogPost