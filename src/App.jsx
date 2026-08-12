import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Timeline from './pages/Timeline.jsx'
import Work from './pages/Work.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <>
      <main>
        <nav className="navbar">
          <div className="left">
            <h1 className='left-header'><a href="/">Lawrence Tong</a></h1>
          </div>
          <div className="center">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/timeline">Timeline</Link></li>
              <li><Link to="/work">My work</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="right">

          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  )
}

export default App
