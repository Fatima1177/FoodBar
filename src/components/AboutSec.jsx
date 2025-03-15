import React from 'react';
import aboutsec from '../assets/aboutsec.png';

function AboutSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="mb-4 font-serif text-3xl md:text-4xl">About Our Story</h2>
          <p className="text-gray-700 mb-5 w-full md:max-w-md">
            Who are an extremely love new eco friendly system. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 mb-6 w-full md:max-w-md">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip
            consequat.
          </p>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors duration-200">View Full Menu</button>
        </div>
        <div className="flex justify-center">
          <img src={aboutsec} alt="" className="rounded shadow w-full md:max-w-md h-auto"/>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
