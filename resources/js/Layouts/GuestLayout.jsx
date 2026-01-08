import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar, Users, Home, Sparkles } from "lucide-react";

const navLinks = [
    { name: "Home", path: "/", page: "Home", icon: Home },
    { name: "Events", path: "/events", page: "Events", icon: Calendar },
    { name: "Speakers", path: "/#speakers", page: "Speakers", icon: Users },
];

export default function GuestLayout({ children, currentPageName }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [currentPageName]);

    return (
        <div className="min-h-screen bg-[#020617] flex flex-col">
            {/* Navigation */}
            <motion.header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
                    isScrolled
                        ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
                        : "bg-transparent border-b border-transparent"
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">
                                Tech
                                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    Seminar
                                </span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.page}
                                    href={link.path}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                        currentPageName === link.page
                                            ? "bg-white/10 text-white"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="hidden md:block">
                            <Link href="/events">
                                <PrimaryButton className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-full border-none shadow-lg shadow-purple-500/20">
                                    Browse Events
                                </PrimaryButton>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden p-2 text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <Menu size={24} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
                        >
                            <div className="px-4 py-6 space-y-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.page}
                                        href={link.path}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium ${
                                            currentPageName === link.page
                                                ? "bg-purple-600/20 text-white"
                                                : "text-gray-400"
                                        }`}
                                    >
                                        <link.icon className="w-5 h-5" />
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Main Content: pt-20 added to offset the fixed header */}
            <main className="flex-grow pt-20">{children}</main>

            {/* Footer */}
            <footer className="bg-[#020617] border-t border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h4 className="text-white font-bold mb-4">
                            TechSeminar
                        </h4>
                        <p className="text-slate-500 text-sm">
                            Empowering the next generation of developers.
                        </p>
                    </div>
                    <div className="flex justify-center gap-6">
                        {navLinks.map((l) => (
                            <Link
                                key={l.name}
                                href={l.path}
                                className="text-slate-400 hover:text-white text-sm"
                            >
                                {l.name}
                            </Link>
                        ))}
                    </div>
                    <p className="text-slate-600 text-sm md:text-right">
                        © 2026 TechSeminar
                    </p>
                </div>
            </footer>
        </div>
    );
}
