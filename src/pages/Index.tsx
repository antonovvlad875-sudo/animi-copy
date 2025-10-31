import { ConstellationCanvas } from "@/components/ConstellationCanvas";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ConstellationCanvas />
      
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
            FinX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto px-4">
            Наблюдайте за танцем звезд и созвездий
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
