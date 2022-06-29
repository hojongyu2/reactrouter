import blogPosts from "../utils/sampleBlogs";
import { useSearchParams } from "react-router-dom";

const AllBlogs = () => {

    const blogPost = blogPosts
    console.log(blogPost)
   
    const [searchParams, setSearchParams] = useSearchParams()
    const sortOrder = searchParams.get("sortOrder")
    console.log(searchParams.get("sortOrder"))

    function compare (a,b) {
        if(sortOrder.toLowerCase() === "asc"){
            if(a < b) {
                return -1
            }
            if (a > b) {
                return 1
            }
        }
        if(sortOrder.toLowerCase() === "desc"){
            if(a < b) {
                return -1
            }
            if (a > b) {
                return 1
            }
        }
        return 0
    }

    return (
        <>
            <h1>All Blogs</h1>
            {blogPost.map((post, index)=>{
             return <ul key={index}>
                 <p>CreatedAt : {post.createdAt}</p>
                 <p>Title : {post.title}</p>
                 <p>Text : {post.text}</p>
                 <p>Author : {post.author}</p>
                 <p>Id : {post.id}</p>
                 <br></br>
                 </ul>
         })}
        </>
    )
}

export default AllBlogs