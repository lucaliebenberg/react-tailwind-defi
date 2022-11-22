import React from "react";
import About from "./components/About";
import Developers from "./components/Developers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Developers />
      <Subscribe />
    </div>
  );
}

export default App;
