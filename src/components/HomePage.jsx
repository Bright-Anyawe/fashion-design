import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

const HomePage = () => (
  <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
    <div className="layout-container flex h-full grow flex-col">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  </div>
);

export default HomePage;
