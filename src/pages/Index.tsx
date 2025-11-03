import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { BiometricHero } from "@/components/BiometricHero";
import { FinancialSection } from "@/components/FinancialSection";
import { PartnerConditionsSection } from "@/components/PartnerConditionsSection";
import { DebitCardSection } from "@/components/DebitCardSection";
import { SecuritySection } from "@/components/SecuritySection";

const Index = () => {
  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-0">
        <Header />
        <BiometricHero />
        <FinancialSection />
        <PartnerConditionsSection />
        <DebitCardSection />
        <SecuritySection />
      </div>
    </div>
  );
};

export default Index;