import React from "react";
import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <Contact/>

      <Footer/>
    </div>
  );
};

export default ContactPage;
