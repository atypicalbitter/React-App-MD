import { useState } from 'react'
import './App.css'
import Mynav from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Mynav />
<Header />
<Skills />
<Projects />
    </>
  )
}

export default App
