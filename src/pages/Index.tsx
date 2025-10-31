import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { BiometricHero } from "@/components/BiometricHero";
import { FinancialSection } from "@/components/FinancialSection";

const Index = () => {
  return (
    <div className="w-full relative">
      <ConstellationCanvas />
      <Header />
      <BiometricHero />
      <FinancialSection />
    </div>
  );
};

export default Index;