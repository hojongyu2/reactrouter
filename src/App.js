
import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home';
import Blogs from './pages/Blogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Router!</h1>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
