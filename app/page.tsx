import SapropelLanding from "@/components/SapropelLanding";
import BenefitsSection from "@/sections/benifits-section";
import MacroElementsSection from "@/sections/macroelements-section";
import StartSection from "@/sections/start-section";

export default function Home() {
  return (
    <>
      <StartSection />
      <BenefitsSection />
      <MacroElementsSection />
      <SapropelLanding />
    </>
  );
}
