import React from 'react'
import Services from './Pages/Services'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import Skill from './Pages/Skills'
import {BrowserRouter , Route ,Routes} from "react-router-dom"

const App = () => {
  const Router = [
    <BrowserRouter>
       <Routes>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/skills"  element={<Skill/>}/>
        <Route path="/projects"  element={<Project/>}/>
        <Route path="/Contact"  element={<Contact/>}/>
       </Routes>
    </BrowserRouter>
  ]
  return (
    <>
       {Router}
       <Home/>
       <About/>
       <Skill/>
       <Project/>
       <Services/>
       <Contact/>
       <Footer/>
    </>
  )
}

export default App