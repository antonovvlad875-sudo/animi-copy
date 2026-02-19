import { useEffect } from "react";
import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { BiometricHero } from "@/components/BiometricHero";
import { FinancialSection } from "@/components/FinancialSection";
import { ReferralSection } from "@/components/ReferralSection";
import { PartnerConditionsSection } from "@/components/PartnerConditionsSection";
import { CardRentalSection } from "@/components/CardRentalSection";
import { DebitCardSection } from "@/components/DebitCardSection";
import { SecuritySection } from "@/components/SecuritySection";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-0">
        <Header />
        <BiometricHero />
        <ReferralSection />
        <CardRentalSection />
        <FinancialSection />
        <PartnerConditionsSection />
        <DebitCardSection />
        <SecuritySection />
      </div>
    </div>
  );
};

export default Index;