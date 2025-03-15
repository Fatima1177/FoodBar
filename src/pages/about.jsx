import React from 'react'
import Navbar from '../components/navBar'
import Footer from '../components/Footer'
import AboutSec from '../components/AboutSec'
import TestimonialSec from '../components/TestimonialSec'


const AboutPage = () => {
  return (
    <div>
      <Navbar/>
      <AboutSec/>
      <TestimonialSec/>
      <Footer/>
    </div>
  )
}

export default AboutPage
