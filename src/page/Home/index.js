import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../components/Footer'
import CleanBlog from '../../components/HomeComponents/CleanBlogSection'
import Hometexts from '../../components/HomeComponents/MagnaNostrudSection'
import Navbar from '../../components/Navbar'

function Home() {
  return (
    <>
    <Helmet>
        <title>Clean Blog Angular - Theme Preview - Start Bootstrap</title>
    </Helmet>
    <Navbar/>
    <CleanBlog/>
    <Hometexts/>
    <Footer/>
    </>
  )
}

export default Home