import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom";

function Blogs() {
    return (
        <div>
            <Navbar />
            <h1>Blogs Page</h1>
            {/* Since <Blogs /> is the parent component, in App.
            //js if neither of the child paths are input in the URL, 
            //is commented out, none of the paths will render. 
            //With <Outlet /> implemented, /blogs will render nothing but 'blogs' to the page, 
            // /blogs will render nothing, BUT this allows for child elements to be used. => if <Outlet /> 
            //but allows for the childrens paths to be rendered. => '/blogs/all' , '/blogs/1' , '/blogs/2 ...etc*/}
            <Outlet />
        </div>

    )
}

export default Blogs

