import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaCode, FaProjectDiagram } from "react-icons/fa"; // Example icons from React Icons

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
                    Our Projects
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {[ 
                        { title: "React Project", description: "Innovative project using React.js to enhance user experience.", icon: <FaReact className="text-4xl text-blue-600" />, link: "#" },
                        { title: "Code Solutions", description: "Creative project focusing on clean and efficient code.", icon: <FaCode className="text-4xl text-green-600" />, link: "#" },
                        { title: "Project Management", description: "A cutting-edge project management tool to streamline workflows.", icon: <FaProjectDiagram className="text-4xl text-purple-600" />, link: "#" }
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            className="relative group overflow-hidden bg-white rounded-xl shadow-xl hover:scale-105 transform transition duration-500"
                        >
                            <div className="p-6 text-center">
                                <div className="mb-4">
                                    {project.icon}
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 text-blue-700">{project.title}</h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <motion.a
                                    href={project.link}
                                    className="text-indigo-600 hover:underline"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    View Project
                                </motion.a>
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
