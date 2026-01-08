import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import {
    Share2,
    Heart,
    CheckCircle2,
    Calendar,
    Clock,
    MapPin,
    Users,
    ChevronDown,
    HelpCircle,
    Code2,
    Terminal,
    Briefcase,
    Star,
    Info,
    Mail,
    Phone,
    Building2,
} from "lucide-react";

// --- Dummy Data ---
const EVENT_DETAILS = {
    category: "Web3 Workshop",
    title: "Blockchain & Web3 Development Workshop",
    bannerImage:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    about: "Explore blockchain technology and Web3 development. Learn to build decentralized applications, smart contracts, and understand cryptocurrency fundamentals in this comprehensive workshop.",
    price: 249,
    stats: [
        {
            label: "Date",
            val: "May 03, 2025",
            icon: Calendar,
            bg: "bg-purple-500/10",
            text: "text-purple-400",
        },
        {
            label: "Time",
            val: "9:00 AM - 4:00 PM",
            icon: Clock,
            bg: "bg-cyan-500/10",
            text: "text-cyan-400",
        },
        {
            label: "Location",
            val: "Innovation Hub, SF",
            icon: MapPin,
            bg: "bg-rose-500/10",
            text: "text-rose-400",
        },
        {
            label: "Capacity",
            val: "60 seats",
            icon: Users,
            bg: "bg-emerald-500/10",
            text: "text-emerald-400",
        },
    ],
    technologies: [
        "Solidity",
        "Ether.js",
        "React",
        "Node.js",
        "Docker",
        "Rust",
        "Web3.js",
        "Hardhat",
    ],
};

const WHY_JOIN = [
    "Understand the core principles of Blockchain",
    "Hands-on Smart Contract development",
    "Network with industry experts",
    "Build decentralized applications (dApps)",
    "Comprehensive course materials",
    "Career guidance in the Web3 space",
];

const WHO_ATTEND = [
    "Software Developers & Engineers",
    "Blockchain Enthusiasts",
    "Tech Students & Graduates",
    "Product Managers",
    "Tech Entrepreneurs",
];

const AGENDA_DATA = [
    {
        time: "9:00 AM - 10:00 AM",
        title: "Registration & Welcome",
        description: "Meet fellow participants and grab refreshments.",
    },
    {
        time: "10:00 AM - 12:00 PM",
        title: "Session 1: Fundamentals",
        description: "Deep dive into blockchain architecture.",
        speaker: "Lead Instructor",
    },
    {
        time: "12:00 PM - 1:00 PM",
        title: "Networking Lunch",
        description: "Lunch provided at the venue.",
    },
    {
        time: "1:00 PM - 4:00 PM",
        title: "Session 2: Hands-on Workshop",
        description: "Deploying your first smart contract.",
        speaker: "Web3 Expert",
    },
];

const FAQ_DATA = [
    {
        q: "What is the refund policy?",
        a: "Refunds are available up to 7 days before the event starts.",
    },
    {
        q: "Will I receive a certificate?",
        a: "Yes, a digital certificate of completion will be issued.",
    },
    {
        q: "What should I bring?",
        a: "Just your laptop and an open mind for learning!",
    },
];

// --- Sub-Components ---

const Section = ({
    title,
    icon: Icon,
    children,
    colorClass = "text-purple-400",
    bgClass = "bg-purple-500/10",
}) => (
    <section className="bg-[#0f172a]/30 border border-slate-800/50 p-8 rounded-2xl mb-8">
        <div className="flex items-center gap-4 mb-8">
            <div
                className={`w-10 h-10 rounded-xl ${bgClass} flex items-center justify-center ${colorClass}`}
            >
                <Icon size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
                {title}
            </h2>
        </div>
        {children}
    </section>
);

const AccordionItem = ({ title, children, number, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen);
    return (
        <div className="mb-4 bg-[#0f172a]/50 border border-white/5 rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left"
            >
                <div className="flex items-center gap-4">
                    {number && (
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">
                            {number}
                        </div>
                    )}
                    <h3 className="font-bold text-white">{title}</h3>
                </div>
                <ChevronDown
                    className={`text-slate-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-0 text-slate-400 text-sm border-t border-white/5">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AgendaItem = ({ time, title, description, speaker, isLast }) => (
    <div className="relative pl-8 pb-8">
        {!isLast && (
            <div className="absolute left-[11px] top-6 bottom-0 w-[1px] bg-slate-800" />
        )}
        <div className="absolute left-0 top-1.5 w-[24px] h-[24px] rounded-full bg-[#020617] border-2 border-cyan-500 flex items-center justify-center z-10">
            <div className="w-2 h-2 rounded-full bg-cyan-500" />
        </div>
        <div className="bg-[#0f172a]/40 border border-white/5 p-6 rounded-2xl">
            <div className="text-cyan-400 text-xs font-bold uppercase mb-2">
                {time}
            </div>
            <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
            <p className="text-sm text-slate-400 mb-3">{description}</p>
            {speaker && (
                <div className="text-purple-400 text-xs font-semibold">
                    Speaker: {speaker}
                </div>
            )}
        </div>
    </div>
);

export default function EventPage() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const formRef = useRef(null);

    return (
        <GuestLayout currentPageName="Events">
            <main className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30 pb-20">
                {/* Hero Section */}
                <div className="relative w-full h-[400px] flex items-end pb-12 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-30"
                            style={{
                                backgroundImage: `url(${EVENT_DETAILS.bannerImage})`,
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
                    </div>
                    <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-cyan-500/30">
                                Workshop
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black mt-4 max-w-4xl tracking-tighter leading-tight">
                                {EVENT_DETAILS.title}
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Side Content */}
                    <div className="lg:col-span-2">
                        {/* About */}
                        <Section title="About the Seminar" icon={Info}>
                            <p className="text-slate-400 leading-relaxed text-lg">
                                {EVENT_DETAILS.about}
                            </p>
                        </Section>

                        {/* Why Join */}
                        <Section
                            title="Why Join?"
                            icon={Star}
                            colorClass="text-cyan-400"
                            bgClass="bg-cyan-500/10"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {WHY_JOIN.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5 group hover:border-cyan-500/30 transition-all"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2
                                                size={14}
                                                className="text-cyan-500"
                                            />
                                        </div>
                                        <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Who Should Attend */}
                        <Section
                            title="Who Should Attend"
                            icon={Users}
                            colorClass="text-rose-400"
                            bgClass="bg-rose-500/10"
                        >
                            <div className="space-y-3">
                                {WHO_ATTEND.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)]" />
                                        <span className="text-sm font-medium text-slate-200">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        {/* Technologies */}
                        <Section
                            title="Technologies You Will Learn"
                            icon={Code2}
                            colorClass="text-blue-400"
                            bgClass="bg-blue-500/10"
                        >
                            <div className="flex flex-wrap gap-3">
                                {EVENT_DETAILS.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-5 py-2.5 bg-[#0f172a] border border-white/5 rounded-full text-xs font-bold text-slate-300 flex items-center gap-2 hover:border-cyan-500/50 transition-all"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />{" "}
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </Section>

                        {/* Curriculum */}
                        <Section
                            title="Curriculum"
                            icon={Terminal}
                            colorClass="text-amber-400"
                            bgClass="bg-amber-500/10"
                        >
                            <AccordionItem
                                title="1. Introduction & Fundamentals"
                                number="01"
                                defaultOpen={true}
                            >
                                <ul className="space-y-3 mt-4">
                                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                                        <CheckCircle2
                                            size={14}
                                            className="text-emerald-500"
                                        />{" "}
                                        Web3 ecosystem overview
                                    </li>
                                    <li className="flex items-center gap-2 text-slate-300 text-sm">
                                        <CheckCircle2
                                            size={14}
                                            className="text-emerald-500"
                                        />{" "}
                                        Blockchain basics and consensus
                                    </li>
                                </ul>
                            </AccordionItem>
                            <AccordionItem
                                title="2. Hands-on Development"
                                number="02"
                            />
                            <AccordionItem
                                title="3. Advanced Topics"
                                number="03"
                            />
                        </Section>

                        {/* Agenda */}
                        <Section
                            title="Seminar Agenda"
                            icon={Clock}
                            colorClass="text-emerald-400"
                            bgClass="bg-emerald-500/10"
                        >
                            <div className="mt-6">
                                {AGENDA_DATA.map((item, index) => (
                                    <AgendaItem
                                        key={index}
                                        {...item}
                                        isLast={
                                            index === AGENDA_DATA.length - 1
                                        }
                                    />
                                ))}
                            </div>
                        </Section>

                        {/* FAQ */}
                        <Section
                            title="FAQ"
                            icon={HelpCircle}
                            colorClass="text-indigo-400"
                            bgClass="bg-indigo-500/10"
                        >
                            <div className="space-y-2">
                                {FAQ_DATA.map((item, i) => (
                                    <AccordionItem key={i} title={item.q}>
                                        {item.a}
                                    </AccordionItem>
                                ))}
                            </div>
                        </Section>

                        {/* Bottom Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                            {EVENT_DETAILS.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-[#0f172a]/60 border border-white/5 p-6 rounded-2xl"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.text} flex items-center justify-center mb-4`}
                                    >
                                        <stat.icon size={20} />
                                    </div>
                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                        {stat.label}
                                    </div>
                                    <div className="text-sm font-bold text-white mt-1">
                                        {stat.val}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-1" ref={formRef}>
                        <div className="bg-[#0f172a]/80 border border-slate-800 p-8 rounded-[2rem] backdrop-blur-xl sticky top-28 shadow-2xl">
                            {/* Registration Fee Header */}
                            <div className="text-center mb-8">
                                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                                    Registration Fee
                                </span>
                                <div className="text-6xl font-black text-white mt-2">
                                    ${EVENT_DETAILS.price}
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {!isFormOpen ? (
                                    <motion.div
                                        key="btn"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <button
                                            onClick={() => setIsFormOpen(true)}
                                            className="w-full py-5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-black text-xl shadow-xl shadow-cyan-500/20 hover:scale-[1.02] transition-all"
                                        >
                                            Register Now
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="space-y-4"
                                    >
                                        {/* 1. Full Name */}
                                        <div className="space-y-1.5">
                                            <label className="text-slate-300 text-sm font-semibold ml-1">
                                                Full Name *
                                            </label>
                                            <div className="relative">
                                                <Users
                                                    size={18}
                                                    className="absolute left-4 top-3.5 text-slate-500"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl py-3 pl-12 text-white placeholder:text-slate-600 focus:border-cyan-500 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* 2. Email */}
                                        <div className="space-y-1.5">
                                            <label className="text-slate-300 text-sm font-semibold ml-1">
                                                Email *
                                            </label>
                                            <div className="relative">
                                                <Mail
                                                    size={18}
                                                    className="absolute left-4 top-3.5 text-slate-500"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl py-3 pl-12 text-white placeholder:text-slate-600 focus:border-cyan-500 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* 3. Phone */}
                                        <div className="space-y-1.5">
                                            <label className="text-slate-300 text-sm font-semibold ml-1">
                                                Phone
                                            </label>
                                            <div className="relative">
                                                <Phone
                                                    size={18}
                                                    className="absolute left-4 top-3.5 text-slate-500"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="+1 234 567 890"
                                                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl py-3 pl-12 text-white placeholder:text-slate-600 focus:border-cyan-500 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* 4. Company */}
                                        <div className="space-y-1.5">
                                            <label className="text-slate-300 text-sm font-semibold ml-1">
                                                Company
                                            </label>
                                            <div className="relative">
                                                <Building2
                                                    size={18}
                                                    className="absolute left-4 top-3.5 text-slate-500"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Acme Inc."
                                                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl py-3 pl-12 text-white placeholder:text-slate-600 focus:border-cyan-500 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* 5. Job Title */}
                                        <div className="space-y-1.5">
                                            <label className="text-slate-300 text-sm font-semibold ml-1">
                                                Job Title
                                            </label>
                                            <div className="relative">
                                                <Briefcase
                                                    size={18}
                                                    className="absolute left-4 top-3.5 text-slate-500"
                                                />
                                                <input
                                                    type="text"
                                                    placeholder="Software Engineer"
                                                    className="w-full bg-[#0f172a] border border-slate-700 rounded-xl py-3 pl-12 text-white placeholder:text-slate-600 focus:border-cyan-500 outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="pt-2 space-y-3">
                                            <button className="w-full py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-all">
                                                Complete Registration
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setIsFormOpen(false)
                                                }
                                                className="w-full py-4 rounded-full bg-slate-800/40 border border-slate-700 text-slate-300 font-bold text-sm hover:bg-slate-800 hover:text-white transition-all"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Share & Save Footer */}
                            <div className="grid grid-cols-2 gap-4 mt-8 border-t border-slate-800 pt-8">
                                <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-full text-sm font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                                    <Share2 size={16} /> Share
                                </button>
                                <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 py-3 rounded-full text-sm font-bold text-slate-300 hover:bg-white/10 hover:text-white transition-all">
                                    <Heart size={16} /> Save
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </GuestLayout>
    );
}
