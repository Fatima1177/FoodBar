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
    <section className="py-44 bg-white">
        <div className="container mx-auto px-20">

            <div className="text-center mb-10">
                <h2 className="font-serif text-3xl md:text-4xl text-[#222222]">Foodbar galleries</h2>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={g1} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"/>
                </div>

                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={g2} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"/>
                </div>
            </div>


            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={g3} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"/>
                </div>

                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={g4} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"/>
                </div>

                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={g5} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"/>
                </div>
            </div>


            <div className="grid grid-cols-2 gap-4 ">
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={g6} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"/>
                </div>
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden bg-cover bg-no-repeat">
                    <img src={g7} className="w-full h-full object-cover transition duration-300 ease-in-out hover:scale-110"/>
                </div>
            </div>

        </div>
    </section>

  )
}

export default FoodBar