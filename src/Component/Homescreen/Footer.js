import React from "react";

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Celeronix</h3>
                        <p className="text-sm">Driving innovation through exceptional digital solutions.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#hero" className="hover:underline">Home</a></li>
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#services" className="hover:underline">Services</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
