import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { BiometricHero } from "@/components/BiometricHero";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <ConstellationCanvas />
      <Header />
      <BiometricHero />
    </div>
  );
};

export default Index;