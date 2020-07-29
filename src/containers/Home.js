import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Gallary from "../components/Gallary/Gallary";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallary />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
