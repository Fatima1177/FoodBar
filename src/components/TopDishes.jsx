import React from 'react'
import d1 from '../assets/topDishes/d1.png'
import d2 from '../assets/topDishes/d2.png'
import d3 from '../assets/topDishes/d3.png'

const TopDishes = () => {
  return (
    <section class="py-9 bg-white">
        <div class="container mx-auto">
            <h2 class="text-4xl md:text-4xl font-serif text-center mb-8">Our Top Rated Dishes</h2>

            <div class="grid gap-8 md:grid-cols-3 mb-10">
      
            <div class="group relative p-3 text-center border border-transparent transform transition-all duration-300 hover:border hover:scale-105">
                <img src={d1} alt="Dish" class="mx-auto mb-4 w-[500px] h-auto object-contain" />
                <h3 class="text-xl font-serif mb-1 group-hover:text-red-500 transition-colors p-4 duration-300">Bread Fruit Cheese Sandwich</h3>
                <p class="text-[#777777] mb-1">Bread/Potato/Cheese</p>
                <p class="text-[#222222] font-bold group-hover:text-red-500 transition-colors duration-300">$5.99</p>
            </div>


            <div class="group relative p-3 text-center border border-transparent transform transition-all duration-300 hover:border hover:scale-105">
                <img src={d2} class="mx-auto mb-4 w-[500px] h-auto object-contain"/>
                <h3 class="text-xl font-serif mb-1 group-hover:text-red-500 transition-colors p-4 duration-300">Beef Cutlet With Spring Onion</h3>
                <p class="text-[#777777] mb-1">Bread/Potato/Cheese</p>
                <p class="text-[#222222] font-bold group-hover:text-red-500 transition-colors duration-300">$5.99</p>
            </div>

            <div class="group relative p-3 text-center border border-transparent transform transition-all duration-300 hover:border hover:scale-105">
                <img src={d3} class="mx-auto mb-4 w-[500px] h-auto object-contain"/>
                <h3 class="text-xl font-serif mb-1 group-hover:text-red-500 transition-colors p-4 duration-300">Meat With Sauce & Vegetables</h3>
                <p class="text-[#777777] mb-1">Bread/Potato/Cheese</p>
                <p class="text-[#222222] font-bold group-hover:text-red-500 transition-colors duration-300">$5.99</p>
            </div>

            </div>
        </div>
    </section>

  )
}

export default TopDishes