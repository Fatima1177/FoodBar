import React from 'react'
import About from '../components/About'
import FoodBar from '../components/FoodBar'
import MenuSec from '../components/MenuSec'
import NavBar from '../components/NavBar'
import TestimonialSec from '../components/TestimonialSec'
import TopDishes from '../components/TopDishes'
import Form from '../components/Form'
import Footer from '../components/Footer'
const HomePage = () => {
  return (
    <div>
      <NavBar />
      <About/>
      <TopDishes/>
      <MenuSec/>
      <FoodBar/>
      <TestimonialSec/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default HomePage
