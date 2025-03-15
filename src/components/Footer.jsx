import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#04091e] text-gray-400 py-36">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      <div>
        <h2 className="text-white text-lg font-semibold mb-5">Top Products</h2>
        <ul className="space-y-2.5 text-[#777777]">
          <li><a href="#" className="hover:text-white">Managed Website</a></li>
          <li><a href="#" className="hover:text-white">Manage Reputation</a></li>
          <li><a href="#" className="hover:text-white">Power Tools</a></li>
          <li><a href="#" className="hover:text-white">Marketing Service</a></li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-white text-lg font-semibold mb-5">Quick Links</h2>
        <ul className="space-y-2.5 text-[#777777]">
          <li><a href="#" className="hover:text-white">Jobs</a></li>
          <li><a href="#" className="hover:text-white">Brand Assets</a></li>
          <li><a href="#" className="hover:text-white">Investor Relations</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-white text-lg font-semibold mb-5">Features</h2>
        <ul className="space-y-2.5 text-[#777777]">
          <li><a href="#" className="hover:text-white">Jobs</a></li>
          <li><a href="#" className="hover:text-white">Brand Assets</a></li>
          <li><a href="#" className="hover:text-white">Investor Relations</a></li>
          <li><a href="#" className="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-white text-lg font-semibold mb-5">Resources</h2>
        <ul className="space-y-2.5 text-[#777777]">
          <li><a href="#" className="hover:text-white">Guides</a></li>
          <li><a href="#" className="hover:text-white">Research</a></li>
          <li><a href="#" className="hover:text-white">Experts</a></li>
          <li><a href="#" className="hover:text-white">Agencies</a></li>
        </ul>
      </div>
      
      <div className="md:col-span-1 col-span-2">
        <h2 className="text-white text-lg font-semibold mb-4">Newsletter</h2>
        <p className="text-gray-500 mb-4">Stay updated with our latest trends</p>
        <form className="flex">
          <input type="email" placeholder="Enter email address" className="flex-1 px-3 py-2 rounded-l-md focus:outline-none text-gray-700" required/>
          <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition">Send</button>
        </form>
      </div>
    </div>
    
    <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm mb-4 md:mb-0"> Copyright ©2023 All rights reserved | This template is made with by <span className='text-red'>Colorlib</span></p>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-white"><i className="fa fa-facebook"></i></a>
        <a href="#" className="hover:text-white"><i className="fa fa-twitter"></i></a>
        <a href="#" className="hover:text-white"><i className="fa fa-dribbble"></i></a>
        <a href="#" className="hover:text-white"><i className="fa fa-behance"></i></a>
      </div>
    </div>

  </div>
</footer>
)
}

export default Footer