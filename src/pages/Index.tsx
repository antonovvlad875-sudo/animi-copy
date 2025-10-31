import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { BiometricHero } from "@/components/BiometricHero";
import { FinancialSection } from "@/components/FinancialSection";
import { DebitCardSection } from "@/components/DebitCardSection";

const Index = () => {
  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-0">
        <Header />
        <BiometricHero />
        <FinancialSection />
        <DebitCardSection />
      </div>
    </div>
  );
};

export default Index;