import './App.css'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Topics from './components/Topics'
import Contact from './components/Contact'

function App() {
   return (
      <>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
               {/* <Link to="/">Home</Link> */}
            </li>
            <li>
               <NavLink to="/topics">Topics</NavLink>
               {/* <Link to="/topics">Topics</Link> */}
            </li>
            <li>
               <NavLink to="/contact">Contact</NavLink>
               {/* <Link to="/contact">Contact</Link> */}
            </li>
         </ul>

         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics/:topicId" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={`Not Found`} />
         </Routes>
      </>
   )
}

export default App
