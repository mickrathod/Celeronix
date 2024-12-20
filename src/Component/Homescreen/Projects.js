import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-center mb-12 text-blue-600"
                >
                    Our Vision at Celeronix
                </motion.h2>
                <div className="flex space-x-8 overflow-x-auto">
                    {[ 
                        { 
                            title: "Custom Web Solutions", 
                            description: "Building responsive and user-centric web applications tailored to your business.",
                            technologies: "React, Node.js, Express, MongoDB",
                            methodology: "Agile Development",
                            icon: "🖥️", 
                            link: "#" 
                        },
                        { 
                            title: "Mobile Application Development", 
                            description: "Designing intuitive mobile apps that engage and retain users.",
                            technologies: "React Native, Firebase, Expo",
                            methodology: "Iterative Prototyping",
                            icon: "📱", 
                            link: "#" 
                        },
                        { 
                            title: "UX/UI Design Excellence", 
                            description: "Creating seamless user experiences with cutting-edge design principles.",
                            technologies: "Figma, Adobe XD, Sketch",
                            methodology: "User-Centered Design",
                            icon: "🎨", 
                            link: "#" 
                        },
                        { 
                            title: "Social Media Marketing", 
                            description: "Crafting targeted strategies to enhance your brand presence on social media and drive engagement.",
                            technologies: "Facebook Ads, Instagram, LinkedIn, Google Ads",
                            methodology: "Data-Driven Approach",
                            icon: "📱📈", 
                            link: "#" 
                        }
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            className="relative group overflow-hidden bg-white rounded-xl shadow-xl hover:scale-105 transform transition duration-500 w-64"
                        >
                            <div className="p-6 text-center">
                                <div className="mb-4 text-4xl">{project.icon}</div>
                                <h3 className="text-2xl font-semibold mb-4 text-blue-700">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
