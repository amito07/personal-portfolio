import React, { useState } from "react";
import Nav from "@/Components/Nav";
import MobileNav from "@/Components/MobileNav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Service from "@/Components/Service";
import Skills from "@/Components/Skills";
import Contacts from "@/Components/Contacts";
import Portfolio from "@/Components/Portfolio";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar Section */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />

        {/* Hero Section */}
        <Hero />
        <div>
          {/* About Section */}
          <About />
          {/* Services */}
          <Service/>
          {/* Skills */}
          {/* <Skills/> */}
          <Contacts/>

          <Skills/>

          <Portfolio/>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;
