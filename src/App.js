import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AcademyInfo from "./components/AcademyInfo";
import Testimonials from "./components/Testimonials";
import CricketMoments from "./components/CricketMoments";

function App() {
  return (
    <div className="font-classical">
      <Navbar />
      <Hero />
      <AcademyInfo/>
      <CricketMoments/>
      <Services />
      <Testimonials/>
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;