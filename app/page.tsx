import Navbar from "@/components/Navbar";
import ValkyrieScrollCanvas from "@/components/ValkyrieScrollCanvas";
import ValkyrieExperience from "@/components/ValkyrieExperience";

export default function Home() {
    return (
        <main>
            <Navbar />
            <ValkyrieScrollCanvas />
            <ValkyrieExperience />

            {/* Scroll container with section markers for navigation */}
            <div className="relative" style={{ height: "500vh" }}>
                <div id="overview" className="absolute" style={{ top: "0%" }} />
                <div id="performance" className="absolute" style={{ top: "25%" }} />
                <div id="design" className="absolute" style={{ top: "50%" }} />
                <div id="engineering" className="absolute" style={{ top: "75%" }} />
            </div>
        </main>
    );
}
