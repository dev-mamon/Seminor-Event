import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";

// Mock Data
const DUMMY_SPEAKERS = [
    {
        id: 1,
        name: "Dr. Sarah Chen",
        title: "Principal AI Researcher",
        company: "Neural Dynamics",
        photo_url:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        expertise: ["Machine Learning", "Neural Networks"],
        linkedin_url: "#",
        twitter_url: "#",
    },
    {
        id: 2,
        name: "Marcus Thorne",
        title: "Head of Infrastructure",
        company: "Skyline Systems",
        photo_url:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        expertise: ["Kubernetes", "DevOps"],
        linkedin_url: "#",
        twitter_url: "#",
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        title: "Director of Product",
        company: "Studio Pixel",
        photo_url:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
        expertise: ["UI/UX Strategy", "Figma"],
        linkedin_url: "#",
        twitter_url: "#",
    },
    {
        id: 4,
        name: "James Wilson",
        title: "Blockchain Architect",
        company: "CryptoLedger",
        photo_url:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
        expertise: ["Solidity", "Web3"],
        linkedin_url: "#",
        twitter_url: "#",
    },
];

export default function SpeakersShowcase({ speakers = DUMMY_SPEAKERS }) {
    // Fallback data in case the backend hasn't sent the speakers prop yet
    const featuredSpeakers = speakers?.slice(0, 4) || [];

    if (featuredSpeakers.length === 0) return null;

    return (
        <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                        Expert Speakers
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Learn From The Best
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Industry leaders and innovators sharing their knowledge
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredSpeakers.map((speaker, index) => (
                        <motion.div
                            key={speaker.id || index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative">
                                {/* Card background with gradient border */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                                <div className="relative h-full bg-slate-900 rounded-2xl p-6 border border-white/5 group-hover:border-transparent transition-all flex flex-col">
                                    {/* Photo */}
                                    <div className="relative w-32 h-32 mx-auto mb-6">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full animate-pulse opacity-20" />
                                        <img
                                            src={
                                                speaker.photo_url ||
                                                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                                                    speaker.name
                                                )}&background=6366f1&color=fff&size=256`
                                            }
                                            alt={speaker.name}
                                            className="relative w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-xl"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="text-center flex-grow">
                                        <h3 className="text-lg font-bold text-white mb-1">
                                            {speaker.name}
                                        </h3>
                                        <p className="text-purple-400 text-sm mb-1">
                                            {speaker.title}
                                        </p>
                                        <p className="text-gray-500 text-sm mb-4">
                                            {speaker.company}
                                        </p>

                                        {/* Expertise tags */}
                                        {speaker.expertise &&
                                            speaker.expertise.length > 0 && (
                                                <div className="flex flex-wrap justify-center gap-2 mb-6">
                                                    {speaker.expertise
                                                        .slice(0, 2)
                                                        .map((skill, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-2 py-1 text-[10px] uppercase font-bold tracking-tight border border-white/10 text-gray-400 rounded-md bg-white/5"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                </div>
                                            )}
                                    </div>

                                    {/* Social links */}
                                    <div className="flex justify-center gap-3 mt-auto pt-4 border-t border-white/5">
                                        {speaker.linkedin_url && (
                                            <a
                                                href={speaker.linkedin_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/5 hover:bg-blue-600/20 text-gray-400 hover:text-blue-400 transition-colors"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {speaker.twitter_url && (
                                            <a
                                                href={speaker.twitter_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full bg-white/5 hover:bg-cyan-600/20 text-gray-400 hover:text-cyan-400 transition-colors"
                                            >
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link href="/speakers">
                        <PrimaryButton className="border border-white/20 bg-transparent text-white hover:bg-white/10 rounded-full px-8 py-4 group">
                            View All Speakers
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </PrimaryButton>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
