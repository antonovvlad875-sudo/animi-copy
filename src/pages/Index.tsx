import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Menu } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <ConstellationCanvas />
      
      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-emerald-400">
            FinX
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#research" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm tracking-wide">
              Research & Technology
            </a>
            <a href="#development" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm tracking-wide">
              Development
            </a>
            <a href="#partnering" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm tracking-wide">
              Partnering
            </a>
            <a href="#leadership" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm tracking-wide">
              Leadership
            </a>
            <a href="#careers" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm tracking-wide">
              Careers
            </a>
          </div>
          <button className="md:hidden text-emerald-400">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Центральный контент */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-serif font-light text-white leading-tight tracking-tight">
            FinX - одна из величайших<br />твоих возможностей
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Exploring innovative solutions in financial technology
          </p>
        </div>
      </div>

      {/* Индикаторы прокрутки */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              i === 0 ? 'bg-emerald-400 w-8' : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;