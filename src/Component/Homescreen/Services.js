import React from "react";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
                        title: "Digital Marketing",
                        description: "Enhance your brand’s online presence with strategic marketing solutions.",
                        icon: "📈",
                    },
                    {
                        title: "Web Development",
                        description: "Custom websites that combine functionality and aesthetics.",
                        icon: "💻",
                    },
                    {
                        title: "App Development",
                        description: "Build mobile apps that offer seamless user experiences.",
                        icon: "📱",
                    },
                    {
                        title: "Shopify Development",
                        description: "Launch and optimize your e-commerce store with Shopify.",
                        icon: "🛍️",
                    },
                    {
                        title: "UI/UX Design",
                        description: "Create visually stunning and user-friendly interfaces.",
                        icon: "🎨",
                    },
                    {
                        title: "Graphic Design",
                        description: "Engage your audience with captivating graphics and visuals.",
                        icon: "🖼️",
                    },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="p-6 border rounded-lg shadow-lg text-center bg-white hover:bg-blue-50 transform hover:-translate-y-2 transition"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
