import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AboutMe from '../../components/AboutComponents'

function About() {
  return (
    <>
    <Helmet>
        <title>About page</title>
    </Helmet>
    <Navbar/>
    <AboutMe/>
    <Footer/>
    </>
  )
}

export default About