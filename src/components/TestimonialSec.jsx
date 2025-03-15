import React from "react";
import testimonials from "../data/testimonial";

const TestimonialSec = () => {
  return (
    <section className="py-16 bg-gradient-to-b bg-[#f9f9ff] to-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-serif text-gray-800 mb-12">What our clients say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((data) => (
            <div key={data.id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center space-x-4">
                <img src={data.img} alt={data.name} className="w-16 h-16 object-cover rounded-full border-2" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{data.name}</h3>
                  <p className="text-sm text-gray-900">{data.position}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic leading-relaxed">"{data.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSec;
