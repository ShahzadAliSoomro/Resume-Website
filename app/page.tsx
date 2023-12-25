import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import SpecializingGovt from "./components/SpecializingGovt";
import Webflow from "./components/Webflow";
import ProvidingSection from "./components/ProvidingSection";
import FaqSection from "./components/FaqSection";
import TeamSection from "./components/TeamSection";
import GovtContract from "./components/GovtContract";

interface IProps {
  id: string;
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="mt-24">
        <div id="system-modernization">
          <FeatureSection />
        </div>

        <SpecializingGovt />
        <Webflow />
        <div id="cybersecurity-solutions">
          <ProvidingSection />
        </div>
        <div id="contact-us">
          <GovtContract />
        </div>
        <FaqSection />
        <div id="cloud-computing-services">
          <TeamSection />
        </div>
      </div>
    </div>
  );
}
