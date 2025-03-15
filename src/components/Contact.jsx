import React from 'react';

function Contact() {
  return (
    <div>
      <section className="relative h-64 bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-[#f9f9ff]"></div>
        <div className="relative text-center">
          <h1 className="text-4xl text-black font-bold">Contact Us</h1>
          <p className="text-[#777777] mt-2">Home / Contact</p>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="bg-white p-6 rounded shadow flex-1">
            <h2 className="text-xl font-bold mb-2">California, United States</h2>
            <p>Santa monica bullevard</p>
          </div>
          <div className="bg-white p-6 rounded shadow flex-1">
            <h2 className="text-xl font-bold mb-2">00 (440) 9865 562</h2>
            <p><a className="hover:underline">Mon to Fri 9am to 6 pm</a></p>
          </div>
          <div className="bg-white p-6 rounded shadow flex-1">
            <h2 className="text-xl font-bold mb-2">support@colorlib.com</h2>
            <p><a href="mailto:info@yoursite.com" className="hover:underline">Send us your query anytime!</a>
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-10 flex flex-col md:flex-row gap-4">
        <div className="bg-white p-6 rounded shadow flex-1">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required/>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required/>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required/>
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required ></textarea>
            <button type="submit" className="w-full bg-red-500 text-white p-3 rounded hover:bg-red-600 transition duration-300">Send Message</button>
          </form>
        </div>

        <div className="flex-1">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8253428324463!2d-73.9965055845933!3d40.71277597933127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a15d2a13ad3%3A0x33a1454c10e0f0d4!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1616924015643!5m2!1sen!2sus"
            className="w-full h-64 md:h-[450px]"
            frameBorder="0"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
