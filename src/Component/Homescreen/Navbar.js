import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu state
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // Close menu and scroll to top with smooth animation
    const closeMenuAndScrollTop = () => {
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Close menu on link click
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between py-4">
                {/* Brand Logo with Scroll to Top on Click */}
                <h1
                    className="text-2xl font-bold text-blue-600 cursor-pointer"
                    onClick={closeMenuAndScrollTop}
                >
                    Celeronix
                </h1>

                {/* Mobile Menu Button (Hamburger) */}
                <motion.button
                    className="md:hidden flex flex-col items-center justify-center space-y-1.5 transition-all duration-300"
                    onClick={toggleMenu}
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                >
                    <motion.span
                        className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
                    ></motion.span>
                    <motion.span
                        className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
                    ></motion.span>
                    <motion.span
                        className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
                    ></motion.span>
                </motion.button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 font-semibold">
                    <li><a href="#hero" className="hover:text-blue-600 hover:underline transition duration-300">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-600 hover:underline transition duration-300">About</a></li>
                    <li><a href="#services" className="hover:text-blue-600 hover:underline transition duration-300">Services</a></li>
                    <li><a href="#contact" className="hover:text-blue-600 hover:underline transition duration-300">Contact</a></li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="md:hidden"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -50 }}
                transition={{ opacity: { duration: 0.5 }, y: { duration: 0.3 } }}
                style={{ overflow: "hidden" }}
            >
                {isMenuOpen && (
                    <motion.ul
                        className="space-y-4 py-4 px-6 bg-white font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.li whileHover={{ scale: 1.05 }} onClick={handleLinkClick}>
                            <a href="#hero" className="hover:text-blue-600 hover:underline transition duration-300">Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05 }} onClick={handleLinkClick}>
                            <a href="#about" className="hover:text-blue-600 hover:underline transition duration-300">About</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05 }} onClick={handleLinkClick}>
                            <a href="#services" className="hover:text-blue-600 hover:underline transition duration-300">Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.05 }} onClick={handleLinkClick}>
                            <a href="#contact" className="hover:text-blue-600 hover:underline transition duration-300">Contact</a>
                        </motion.li>
                    </motion.ul>
                )}
            </motion.div>
        </nav>
    );
};

export default Navbar;
