import React from "react";
import { motion } from "framer-motion";
import { FaUserAlt, FaCode, FaPaintBrush } from "react-icons/fa";

const Team = () => {
    return (
        <section id="team" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {[
                        { name: "Manav Rathod", role: "CEO", bio: "Visionary leader, driving innovation and growth.", img: "manav.jpg", icon: <FaUserAlt /> },
                        { name: "Jane Smith", role: "Lead Developer", bio: "Expert in modern web technologies, bringing ideas to life.", img: "jane.jpg", icon: <FaCode /> },
                        { name: "Sara Lee", role: "UX/UI Designer", bio: "Designing user-centric experiences with a keen eye for aesthetics.", img: "sara.jpg", icon: <FaPaintBrush /> }
                    ].map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.3 }}
                            className="p-8 bg-white rounded-xl shadow-xl group relative hover:scale-105 transform transition duration-500"
                        >
                            <motion.div
                                className="w-40 h-40 mx-auto mb-6 overflow-hidden rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition duration-300"
                                whileHover={{ scale: 1.1 }}
                            >
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-blue-600 font-semibold mb-4 flex justify-center items-center gap-2">
                                    {member.icon}
                                    {member.role}
                                </p>
                                <p className="text-gray-600">{member.bio}</p>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
