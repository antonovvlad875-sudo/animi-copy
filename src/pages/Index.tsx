import { useEffect } from "react";
import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { FloatingShapes3D } from "@/components/FloatingShapes3D";
import { Header } from "@/components/Header";
import { BiometricHero } from "@/components/BiometricHero";
import { FinancialSection } from "@/components/FinancialSection";
import { ReferralSection } from "@/components/ReferralSection";
import { PartnerConditionsSection } from "@/components/PartnerConditionsSection";
import { DebitCardSection } from "@/components/DebitCardSection";
import { SecuritySection } from "@/components/SecuritySection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <FloatingShapes3D />
      <div className="relative z-0">
        <Header />
        <BiometricHero />
        <ReferralSection />
        <FinancialSection />
        <PartnerConditionsSection />
        <DebitCardSection />
        <SecuritySection />
      </div>
    </div>
  );
};

export default Index;