import blogPosts from "../utils/sampleBlogs"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const SubmitBlog = () => {
    const [blogTitle, setBlogTitle] = useState('')
    const [blogDescription, setBlogDescription] = useState('')
    const [blogAuthor, setBlogAuthor] = useState('')

    const navigate = useNavigate()

    return(
        <div>
            <h1>Submit Blog</h1>
            <label>Title</label>
            <input onChange={(e)=>{
                const value = e.target.value
                setBlogTitle(value)
            }}/>
            <label>Author</label>
            <input onChange={(e)=>{
                const value = e.target.value
                setBlogAuthor(value)
            }} />
            <label>Text</label>
            <textarea onChange={(e)=>{
                const value = e.target.value
                setBlogDescription(value)
            }} />

            <button onClick={()=>{

                const newBlogPost = {
                    createdAt:new Date().toISOString(),
                    title:blogTitle,
                    text:blogDescription,
                    author:blogAuthor,
                    id:blogPosts.length + 1
                }
            
                blogPosts.push(newBlogPost)
                console.log(blogPosts)

                navigate("/blogs")
                // navigate to /blogs route
            }}>Submit</button>
            
        </div>
    )
    
}

export default SubmitBlog