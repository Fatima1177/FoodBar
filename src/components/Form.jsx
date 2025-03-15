import React, { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    alert("Reservation Submitted!");
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-[#fff]">
      <div className="bg-[#f9f9ff] rounded-xl shadow-xl p-10 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-5 ">
          <h2 className="font-serif text-3xl md:text-4xl text-[#222222] text-center">Reservation Form</h2>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none " required/>

          <input type="email" name="email" placeholder="Enter email address" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none " required/>

          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none " required/>

          <input type="datetime-local" onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none text-gray-400" required/>

          <div className="relative">
            <select name="event" value={formData.event} onChange={handleChange} className="appearance-none w-full p-3 border border-gray-300 rounded-sm focus:outline-none bg-white text-gray-400" required>
              <option value="">Select event</option>
              <option value="Dhaka">Select event Dhaka</option>
              <option value="Dilli">Select event Dilli</option>
              <option value="Newyork">Select event Newyork</option>
              <option value="Islambad">Select event Islambad</option>
            </select>

            <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none"fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative">
            <button type="submit" className="w-full py-3 text-white font-semibold bg-[#f42f2c] rounded-md shadow-md hover:bg-red-600 transition duration-300 relative z-10">Make Reservation</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
