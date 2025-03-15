import React from 'react'
import d1 from '../assets/topDishes/d1.png'
import d2 from '../assets/topDishes/d2.png'
import d3 from '../assets/topDishes/d3.png'

const TopDishes = () => {
  return (
    <section className="py-9 bg-white">
        <div className="container mx-auto">
            <h2 className="text-4xl md:text-4xl font-serif text-center mb-8">Our Top Rated Dishes</h2>

            <div className="grid gap-8 md:grid-cols-3 mb-10">
      
            <div className="group relative p-3 text-center border border-transparent transform transition-all duration-300 hover:border hover:scale-105">
                <img src={d1} alt="" className="mx-auto mb-4 w-[500px] h-auto object-contain" />
                <h3 className="text-xl font-serif mb-1 group-hover:text-red-500 transition-colors p-4 duration-300">Bread Fruit Cheese Sandwich</h3>
                <p className="text-[#777777] mb-1">Bread/Potato/Cheese</p>
                <p className="text-[#222222] font-bold group-hover:text-red-500 transition-colors duration-300">$5.99</p>
            </div>


            <div className="group relative p-3 text-center border border-transparent transform transition-all duration-300 hover:border hover:scale-105">
                <img src={d2} alt="" className="mx-auto mb-4 w-[500px] h-auto object-contain"/>
                <h3 className="text-xl font-serif mb-1 group-hover:text-red-500 transition-colors p-4 duration-300">Beef Cutlet With Spring Onion</h3>
                <p className="text-[#777777] mb-1">Bread/Potato/Cheese</p>
                <p className="text-[#222222] font-bold group-hover:text-red-500 transition-colors duration-300">$5.99</p>
            </div>

            <div className="group relative p-3 text-center border border-transparent transform transition-all duration-300 hover:border hover:scale-105">
                <img src={d3} alt="" className="mx-auto mb-4 w-[500px] h-auto object-contain"/>
                <h3 className="text-xl font-serif mb-1 group-hover:text-red-500 transition-colors p-4 duration-300">Meat With Sauce & Vegetables</h3>
                <p className="text-[#777777] mb-1">Bread/Potato/Cheese</p>
                <p className="text-[#222222] font-bold group-hover:text-red-500 transition-colors duration-300">$5.99</p>
            </div>

            </div>
        </div>
    </section>

  )
}

export default TopDishes