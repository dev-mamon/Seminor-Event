import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

const categories = [
    {
        name: "AI & Machine Learning",
        iconUrl: "https://api.iconify.design/lucide:brain.svg",
        color: "from-purple-500 to-pink-500",
        bgColor: "bg-purple-500/10",
    },
    {
        name: "Web Development",
        iconUrl: "https://api.iconify.design/lucide:code.svg",
        color: "from-cyan-500 to-blue-500",
        bgColor: "bg-cyan-500/10",
    },
    {
        name: "Cloud Computing",
        iconUrl: "https://api.iconify.design/lucide:cloud.svg",
        color: "from-blue-500 to-indigo-500",
        bgColor: "bg-blue-500/10",
    },
    {
        name: "Cybersecurity",
        iconUrl: "https://api.iconify.design/lucide:shield.svg",
        color: "from-red-500 to-orange-500",
        bgColor: "bg-red-500/10",
    },
    {
        name: "Data Science",
        iconUrl: "https://api.iconify.design/lucide:bar-chart-3.svg",
        color: "from-green-500 to-teal-500",
        bgColor: "bg-green-500/10",
    },
    {
        name: "Blockchain",
        iconUrl: "https://api.iconify.design/lucide:blocks.svg",
        color: "from-yellow-500 to-orange-500",
        bgColor: "bg-yellow-500/10",
    },
    {
        name: "DevOps",
        iconUrl: "https://api.iconify.design/lucide:git-branch.svg",
        color: "from-indigo-500 to-purple-500",
        bgColor: "bg-indigo-500/10",
    },
    {
        name: "Mobile Development",
        iconUrl: "https://api.iconify.design/lucide:smartphone.svg",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-500/10",
    },
];

export default function CategorySection() {
    return (
        <section className="py-24 bg-slate-950 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Explore Tech Tracks
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Deep dive into specialized domains with expert-led
                        sessions
                    </p>
                </motion.div>

                {/* Grid Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={`/events?category=${encodeURIComponent(
                                    category.name
                                )}`}
                                className="block group"
                            >
                                <div className="relative p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden">
                                    {/* Hover Gradient Overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                                    />

                                    {/* Icon Wrapper */}
                                    <div
                                        className={`w-14 h-14 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        {/* The "Mask" technique:
                                            We apply the online SVG as a mask, then fill the background with your gradient.
                                        */}
                                        <div
                                            className={`w-7 h-7 bg-gradient-to-br ${category.color}`}
                                            style={{
                                                maskImage: `url(${category.iconUrl})`,
                                                WebkitMaskImage: `url(${category.iconUrl})`,
                                                maskRepeat: "no-repeat",
                                                WebkitMaskRepeat: "no-repeat",
                                                maskPosition: "center",
                                                WebkitMaskPosition: "center",
                                                maskSize: "contain",
                                                WebkitMaskSize: "contain",
                                            }}
                                        />
                                    </div>

                                    <h3 className="text-white font-semibold group-hover:text-white transition-colors relative z-10">
                                        {category.name}
                                    </h3>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
