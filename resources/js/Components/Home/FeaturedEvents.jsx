import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react"; // Fixed: Inertia Link
import PrimaryButton from "@/Components/PrimaryButton"; // Fixed: Your Button
import { format } from "date-fns";

const categoryColors = {
    "AI & Machine Learning": "from-purple-500 to-pink-500",
    "Web Development": "from-cyan-500 to-blue-500",
    "Cloud Computing": "from-blue-500 to-indigo-500",
    Cybersecurity: "from-red-500 to-orange-500",
    "Data Science": "from-green-500 to-teal-500",
    Blockchain: "from-yellow-500 to-orange-500",
    DevOps: "from-indigo-500 to-purple-500",
    "Mobile Development": "from-pink-500 to-rose-500",
};

export default function FeaturedEvents({ events }) {
    // If no events are passed, we'll show dummy ones for now so you can see the UI
    const featuredEvents = events?.filter((e) => e.is_featured).slice(0, 3) || [
        {
            id: 1,
            title: "Future of AI: Generative Models 2025",
            category: "AI & Machine Learning",
            description:
                "Explore the next frontier of AI with industry experts.",
            date: "2025-05-15",
            location: "Dhaka, Bangladesh",
            price: 49,
            image_url:
                "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        },
        {
            id: 2,
            title: "Scalable Web Architectures",
            category: "Web Development",
            description: "Building resilient systems for millions of users.",
            date: "2025-06-20",
            location: "Online",
            price: 0,
            image_url:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        },
    ];

    if (featuredEvents.length === 0) return null;

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block mb-4 px-4 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full text-sm font-medium">
                        Featured Events
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Don't Miss These
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Our most anticipated seminars handpicked for you
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${
                                            categoryColors[event.category] ||
                                            "from-purple-500 to-cyan-500"
                                        } opacity-60 group-hover:opacity-40 transition-opacity`}
                                    />
                                    {event.image_url && (
                                        <img
                                            src={event.image_url}
                                            alt={event.title}
                                            className="w-full h-full object-cover mix-blend-overlay"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                                        {event.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                        {event.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {event.short_description ||
                                            event.description}
                                    </p>

                                    <div className="space-y-2 mb-6 mt-auto">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4 text-purple-400" />
                                            <span>
                                                {event.date
                                                    ? format(
                                                          new Date(event.date),
                                                          "MMM dd, yyyy"
                                                      )
                                                    : "TBA"}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="w-4 h-4 text-cyan-400" />
                                            <span>
                                                {event.location || "Online"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-2xl font-bold text-white">
                                            {event.price
                                                ? `$${event.price}`
                                                : "Free"}
                                        </span>
                                        <Link href="/events">
                                            <PrimaryButton className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full text-xs px-4 py-2 border-none">
                                                View Details
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/events">
                        <PrimaryButton
                            variant="outline"
                            className="border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-4 bg-transparent"
                        >
                            View All Events
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </section>
    );
}
