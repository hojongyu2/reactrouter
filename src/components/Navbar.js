import {Link} from "react-router-dom"

function Navbar () {
    return (
        <div>
            <nav>Nav</nav>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
        </div>
    )
}

export default Navbar