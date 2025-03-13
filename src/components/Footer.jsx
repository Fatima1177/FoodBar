import React from 'react'

const Footer = () => {
  return (
<footer class="bg-[#04091e] text-gray-400 py-36">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8">
      <div>
        <h2 class="text-white text-lg font-semibold mb-5">Top Products</h2>
        <ul class="space-y-2.5 text-[#777777]">
          <li><a href="#" class="hover:text-white">Managed Website</a></li>
          <li><a href="#" class="hover:text-white">Manage Reputation</a></li>
          <li><a href="#" class="hover:text-white">Power Tools</a></li>
          <li><a href="#" class="hover:text-white">Marketing Service</a></li>
        </ul>
      </div>
      
      <div>
        <h2 class="text-white text-lg font-semibold mb-5">Quick Links</h2>
        <ul class="space-y-2.5 text-[#777777]">
          <li><a href="#" class="hover:text-white">Jobs</a></li>
          <li><a href="#" class="hover:text-white">Brand Assets</a></li>
          <li><a href="#" class="hover:text-white">Investor Relations</a></li>
          <li><a href="#" class="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
      
      <div>
        <h2 class="text-white text-lg font-semibold mb-5">Features</h2>
        <ul class="space-y-2.5 text-[#777777]">
          <li><a href="#" class="hover:text-white">Jobs</a></li>
          <li><a href="#" class="hover:text-white">Brand Assets</a></li>
          <li><a href="#" class="hover:text-white">Investor Relations</a></li>
          <li><a href="#" class="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
      
      <div>
        <h2 class="text-white text-lg font-semibold mb-5">Resources</h2>
        <ul class="space-y-2.5 text-[#777777]">
          <li><a href="#" class="hover:text-white">Guides</a></li>
          <li><a href="#" class="hover:text-white">Research</a></li>
          <li><a href="#" class="hover:text-white">Experts</a></li>
          <li><a href="#" class="hover:text-white">Agencies</a></li>
        </ul>
      </div>
      
      <div class="md:col-span-1 col-span-2">
        <h2 class="text-white text-lg font-semibold mb-4">Newsletter</h2>
        <p class="text-gray-500 mb-4">Stay updated with our latest trends</p>
        <form action="#" method="GET" class="flex">
          <input 
            type="email" 
            placeholder="Enter email address" 
            class="flex-1 px-3 py-2 rounded-l-md focus:outline-none text-gray-700" 
            required
          />
          <button 
            type="submit" 
            class="px-4 py-2 bg-red-600 text-white rounded-r-md hover:bg-red-700 transition"
          >
            <i class="fa fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </div>
    
    <div class="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
      <p class="text-gray-500 text-sm mb-4 md:mb-0">
        ©2023 All rights reserved | This template is made with 
        <i class="fa fa-heart-o" aria-hidden="true"></i> by 
        <a target="_blank" class="hover:text-white">
          Colorlib
        </a>
      </p>
      <div class="flex space-x-4">
        <a href="#" class="hover:text-white"><i class="fa fa-facebook"></i></a>
        <a href="#" class="hover:text-white"><i class="fa fa-twitter"></i></a>
        <a href="#" class="hover:text-white"><i class="fa fa-dribbble"></i></a>
        <a href="#" class="hover:text-white"><i class="fa fa-behance"></i></a>
      </div>
    </div>
  </div>
</footer>
)
}

export default Footer