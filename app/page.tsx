import Navbar from "@/components/Navbar";
import ValkyrieScrollCanvas from "@/components/ValkyrieScrollCanvas";
import ValkyrieExperience from "@/components/ValkyrieExperience";

export default function Home() {
    return (
        <main>
            <Navbar />
            <ValkyrieScrollCanvas />
            <ValkyrieExperience />

            {/* Scroll container - 500vh for smooth scrolling */}
            <div className="relative" style={{ height: "500vh" }} />
        </main>
    );
}
