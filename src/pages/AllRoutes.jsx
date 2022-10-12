import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Layout from '../components/Layout'
import Contact from './Contact'
import Projects from './Projects'
import Success from './Success'

const AllRoutes = () => {
  return (
    <Layout>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/success" element={<Success/>}/>
    </Routes>
    </Layout>
  )
}

export default AllRoutes