import blogPosts from "../utils/sampleBlogs";
import { useSearchParams } from "react-router-dom";

const AllBlogs = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const sortOrder = searchParams.get("sortOrder") || "asc" // set default value as "asc"
    const sortField = searchParams.get("sortField") || "createdAt"
    const limit =Number(searchParams.get("limit"))|| 10
    const page =Number(searchParams.get("page"))|| 0
    console.log(limit)
    console.log(page)
    console.log(searchParams.get("sortOrder"))

   const compare = (a,b) => {
        const aField = a[sortField]
        const bField = b[sortField]

        if(sortOrder.toLowerCase() === "asc"){
            if(aField < bField) {
                return -1
            }
            if (aField > bField) {
                return 1
            }
        }
        if(sortOrder.toLowerCase() === "desc"){
            if(aField < bField) {
                return 1
            }
            if (aField > bField) {
                return -1
            }
        }
        return 0
    }
    const sortedBlogs = blogPosts.sort(compare).slice(page * limit, (page * limit) + limit)
    console.log(sortedBlogs)
    return (
        <>
            <h1>All Blogs</h1>
            {sortedBlogs.map((post, index)=>{
             return <ul key={index}>
                 <p>Id : {post.id}</p>
                 <p>CreatedAt : {post.createdAt}</p>
                 <p>Title : {post.title}</p>
                 <p>Text : {post.text}</p>
                 <p>Author : {post.author}</p>
                 <br></br>
                 </ul>
         })}
        </>
    )
}

export default AllBlogs