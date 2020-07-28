import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Gallary from "./components/Gallary/Gallary";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Gallary />
    </div>
  );
}

export default App;
