import { useState } from 'react'
import './App.css'
import Mynav from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
// import ProjectGallery from './components/ProjectGallery'




function App() {
  return (
<>
<Mynav />
<Header />
<Skills />
<Projects />
<Contact />
<Footer />
</>
  )
}

export default App
