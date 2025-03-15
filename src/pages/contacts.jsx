import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Contact/>

      <Footer/>
    </div>
  );
};

export default ContactPage;
