import React from 'react'
import g1 from '../assets/foodbar/g1.jpg'
import g2 from '../assets/foodbar/g2.jpg'
import g3 from '../assets/foodbar/g3.jpg'
import g4 from '../assets/foodbar/g4.jpg'
import g5 from '../assets/foodbar/g5.jpg'
import g6 from '../assets/foodbar/g6.jpg'
import g7 from '../assets/foodbar/g7.jpg'

const FoodBar = () => {
  return (
    <section class="py-44 bg-white">
        <div class="container mx-auto px-20">

            <div class="text-center mb-10">
                <h2 class="font-serif text-3xl md:text-4xl text-[#222222]">Foodbar galleries</h2>
            </div>

            <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="aspect-w-18 aspect-h-9">
                    <img src={g1} class="w-full h-full object-cover"/>
                </div>

                <div class="aspect-w-16 aspect-h-9">
                    <img src={g2} class="w-full h-full object-cover"/>
                </div>
            </div>


            <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="aspect-w-16 aspect-h-9">
                    <img src={g3} class="w-full h-full object-cover"/>
                </div>

                <div class="aspect-w-16 aspect-h-9">
                    <img src={g4} class="w-full h-full object-cover"/>
                </div>

                <div class="aspect-w-16 aspect-h-9">
                    <img src={g5} class="w-full h-full object-cover"/>
                </div>
            </div>


            <div class="grid grid-cols-2 gap-4">
                <div class="aspect-w-16 aspect-h-9">
                    <img src={g6} class="w-full h-full object-cover"/>
                </div>
                <div class="aspect-w-16 aspect-h-9">
                    <img src={g7} class="w-full h-full object-cover"/>
                </div>
            </div>

        </div>
    </section>

  )
}

export default FoodBar