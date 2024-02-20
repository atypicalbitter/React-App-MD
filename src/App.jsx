import { useState } from 'react'
import './App.css'
import Mynav from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import MyProjects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectGallery from './components/ProjectGallery'
import { Router } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
<Mynav />
<Header />
<Skills />
<MyProjects />
<Contact />
<Footer />
    </Router>
  )
}

export default App
