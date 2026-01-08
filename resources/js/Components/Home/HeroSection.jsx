import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "@/Components/PrimaryButton";
import { ArrowRight, Sparkles, Calendar, Users, Globe } from "lucide-react";
import { Link } from "@inertiajs/react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 px-4 sm:px-6 lg:px-8">
            {/* Animated gradient background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-950 to-cyan-900/30" />
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, 20, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-500/30 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-pink-500/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Grid pattern overlay - adjusted opacity for better readability */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

            <div className="relative z-10 w-full max-w-7xl mx-auto text-center py-10 md:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                        <span className="text-xs sm:text-sm text-gray-300">
                            2025 Tech Conference Series
                        </span>
                    </motion.div>
                </motion.div>

                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6 px-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <span className="text-white">Where </span>
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent block sm:inline">
                        Innovation
                    </span>
                    <br />
                    <span className="text-white">Meets </span>
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent block sm:inline">
                        Inspiration
                    </span>
                </motion.h1>

                <motion.p
                    className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl sm:max-w-3xl mx-auto mb-8 sm:mb-10 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    Join the world's leading tech seminars and workshops.
                    Connect with industry experts, learn cutting-edge
                    technologies, and transform your career.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <Link href="/events" className="w-full sm:w-auto">
                        <PrimaryButton className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full group border-none">
                            Explore Events
                            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </PrimaryButton>
                    </Link>

                    <Link href="/speakers" className="w-full sm:w-auto">
                        <PrimaryButton className="w-full sm:w-auto border border-white/20 bg-transparent text-white hover:bg-white/10 px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg rounded-full backdrop-blur-sm">
                            Meet Speakers
                        </PrimaryButton>
                    </Link>
                </motion.div>

                {/* Stats - Improved for mobile */}
                <motion.div
                    className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    {[
                        { value: "50+", label: "Events", icon: Calendar },
                        { value: "100+", label: "Speakers", icon: Users },
                        { value: "10K+", label: "Attendees", icon: Globe },
                        { value: "8", label: "Tech Tracks", icon: Sparkles },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 mb-2 sm:mb-3 mx-auto">
                                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-xs sm:text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
