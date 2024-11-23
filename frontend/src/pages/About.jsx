import AboutSection from "../components/AboutSection";
import Breadcrumb from "../components/breadcrumb";
import CoolFacts from "../components/Coolfacts";
import Team from "../components/Team";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb title="ABOUT US" />
      <AboutSection />
      <CoolFacts />
      <Team />
    </div>
  );
}
