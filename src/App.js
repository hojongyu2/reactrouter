
import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogPost from './components/BlogPost';
import AllBlogs from './components/AllBlogs';
import SubmitBlog from './pages/SubmitBlog';

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>}>
            <Route index element={<AllBlogs/>} />
            <Route path='single-blog/:blogId' element={<BlogPost/>} />
            <Route path='submit-blog' element={<SubmitBlog/>} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
