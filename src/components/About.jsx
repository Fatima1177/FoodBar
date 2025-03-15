import React from 'react'
import about from '../assets/about.png'

const About = () => {
return (
  <section className="bg-white min-h-screen relative flex items-center">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col items-start justify-center">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4"> Delicious Cupcakes</h1>
        <p className="text-[#6c757d] mb-6 max-w-lg leading-relaxed">Inappropriate behavior is often laughed off as "Boys will be boys," women face higher conduct standards especially in the workplace.That's why it's crucial that, as women. </p>
        <button className=" bg-[#dc3545] text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-300 border-2 border-transparent hover:bg-[#f8f9fa] hover:text-[#dc3545] hover:border-[#dc3545] hover:shadow">Check Our Menu</button>
      </div>

      <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-12">
        <img src={about} className="w-64 h-auto relative z-10"/>
      </div>
    </div>
  </section>
);
};

export default About;
