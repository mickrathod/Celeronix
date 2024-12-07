import React from "react";
import Navbar from "./Homescreen/Navbar";
import Hero from "./Homescreen/Hero";
import Services from "./Homescreen/Services";
import Contact from "./Homescreen/Contact";
import Footer from "./Homescreen/Footer";
import Projects from "./Homescreen/Projects";
import Team from "./Homescreen/Team";

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <Hero />
            <Services />
            <Projects />

            {/* Our Team Section */}
            {/* <Team /> */}
            <Contact />

            <Footer />
        </div>
    );
};

export default Home;
