import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the mailto link with the form data
        const mailtoLink = `mailto:info@celeronix.com?subject=Contact Us: ${encodeURIComponent(name)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        )}`;

        // Open the mailto link to trigger the email client
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h2>
                <p className="text-lg text-center mb-12">We'd love to hear from you. Send us a message or reach out through our email and phone number.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6 text-center md:text-left">
                        <h3 className="text-2xl font-semibold">Get in Touch</h3>
                        <p className="text-lg">Email: <a href="mailto:info@celeronix.com" className="text-blue-600 hover:underline">info@celeronix.com</a></p>
                        <p className="text-lg">Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a></p>
                    </div>
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                type="submit"
                                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 flex items-center justify-center space-x-2"
                            >
                                <span>Send Message</span>
                                <i className="fa fa-paper-plane"></i>
                            </motion.button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
