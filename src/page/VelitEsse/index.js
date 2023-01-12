import React from 'react'
import Footer from '../../components/Footer'
import VelitMainTexts from '../../components/VelitEsse/MainTexts'
import VelitSecondSec from '../../components/VelitEsse/SecondSection'
import Navbar from '../../components/Navbar'

function VelitEssePage() {
  return (
    <>
    <Navbar/>
    <VelitMainTexts/>
    <VelitSecondSec/>
    <Footer/>
    </>
  )
}

export default VelitEssePage