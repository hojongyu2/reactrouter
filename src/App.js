
import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>}>
            <Route path=':blogId' element={<BlogPost/>} />
          </Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;
