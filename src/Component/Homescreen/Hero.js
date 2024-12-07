import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="hero" className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-900 py-20">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                        Empowering Your Business with <span className="text-blue-600">Celeronix</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8">
                        We specialize in digital solutions to help your business thrive in the modern world.
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <p className="text-md md:text-lg text-gray-500">
                            Our team is dedicated to providing high-quality services tailored to your needs. Let’s bring your ideas to life with cutting-edge technology.
                        </p>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <a href="#services" className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition duration-300">
                        Explore Our Services
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
