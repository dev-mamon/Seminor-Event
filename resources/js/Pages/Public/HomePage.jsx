import React from "react";
import GuestLayout from "@/Layouts/GuestLayout"; // Adjust this path if your layout is in a different folder
import HeroSection from "@/Components/home/HeroSection";
import SpeakerSection from "@/Components/home/SpeakersShowcase";
import FeaturedEvents from "@/Components/home/FeaturedEvents";
import CategorySection from "@/Components/home/CategorySection";

export default function HomePage() {
    return (
        <GuestLayout currentPageName="Home">
            <main className="w-full overflow-x-hidden">
                <HeroSection />
                <CategorySection />
                <FeaturedEvents />
                <div id="speakers">
                    <SpeakerSection />
                </div>
            </main>
        </GuestLayout>
    );
}
