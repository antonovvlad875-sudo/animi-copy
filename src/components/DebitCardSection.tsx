import { Sparkles, ArrowRight, Radio } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import fxLogo from '@/assets/fx-logo.png';

export const DebitCardSection = () => {
  const { ref: frontCardRef, isVisible: frontCardVisible } = useScrollAnimation(0.2);
  const { ref: backCardRef, isVisible: backCardVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden bg-gradient-to-b from-cosmic-dark via-cosmic-bg to-cosmic-dark">
      {/* Darker gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-600/15 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div 
          ref={contentRef}
          className={`space-y-8 transition-all duration-1000 ease-out ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="inline-block">
            <div className="text-sm font-bold tracking-wider text-lime-400/80 mb-2">
              FINX DEBIT CARD
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Обновите вашу дебетовую карту с помощью{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">
              FinX Card
            </span>
            —она работает везде, где принимают Visa
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl">
            Биометрическая защита, мгновенные транзакции и полный контроль над вашими финансами. Будущее платежей уже здесь.
          </p>

          <Button 
            size="lg" 
            className="group bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-6 text-base"
          >
            Получить FinX Card
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Dual cards (front & back) */}
        <div className="relative flex items-center justify-center lg:justify-end min-h-[400px]">
          <div 
            ref={backCardRef}
            className={`absolute w-full max-w-[480px] h-[300px] rounded-3xl bg-gradient-to-br from-emerald-900/90 via-emerald-800/90 to-emerald-700/90 shadow-2xl shadow-emerald-900/50 p-8 flex flex-col justify-between border border-emerald-700/30 transition-all duration-1000 ease-out ${
              backCardVisible ? 'opacity-100 translate-y-12 translate-x-8 rotate-[3deg] scale-100' : 'opacity-0 translate-y-24 translate-x-16 rotate-[10deg] scale-90'
            }`}
            style={{ zIndex: 1 }}
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 via-transparent to-transparent rounded-3xl" />
            
            <div className="relative flex justify-end">
              {/* NFC Symbol */}
              <div className="w-16 h-16 rounded-full bg-lime-500/20 border-2 border-lime-500/40 flex items-center justify-center backdrop-blur-sm">
                <Radio className="w-8 h-8 text-lime-400" />
              </div>
            </div>

            <div className="relative flex justify-between items-end">
              <div className="flex-1" />
              
              {/* VISA logo */}
              <div className="text-right">
                <div className="text-lime-400 font-bold text-2xl tracking-tight mb-1">DEBIT</div>
                <div className="text-lime-300 font-black text-5xl tracking-tight italic -mt-1">VISA</div>
              </div>
            </div>
          </div>

          <div 
            ref={frontCardRef}
            className={`relative w-full max-w-[480px] h-[300px] rounded-3xl bg-gradient-to-br from-emerald-800/95 via-emerald-700/95 to-lime-700/95 shadow-2xl shadow-emerald-900/50 p-8 flex flex-col justify-center border border-emerald-600/30 transition-all duration-1000 delay-150 ease-out ${
              frontCardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-[-3deg] scale-100' : 'opacity-0 -translate-y-12 -translate-x-8 rotate-[-10deg] scale-90'
            }`}
            style={{ zIndex: 2 }}
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 via-transparent to-transparent rounded-3xl" />
            
            {/* Contactless icon - top right */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-lime-500/20 backdrop-blur-sm border border-lime-500/30 flex items-center justify-center">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-lime-400" />
              </div>
            </div>

            {/* Main content - centered vertically */}
            <div className="relative space-y-6">
              {/* Chip and processing text */}
              <div className="space-y-3">
                {/* Metallic chip with logo pattern */}
                <div className="w-16 h-14 rounded-xl bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 shadow-lg flex items-center justify-center relative overflow-hidden border border-gray-600/70">
                  {/* Metallic texture lines */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 3px)',
                  }} />
                  
                  {/* Logo */}
                  <img 
                    src={fxLogo} 
                    alt="FinX" 
                    className="w-10 h-10 relative z-10 opacity-70"
                  />
                </div>
                
                {/* Processing text */}
                <div className="text-lime-400 text-sm">
                  <div className="font-semibold">FinX processing</div>
                </div>
              </div>

              {/* Card number */}
              <div className="flex items-center gap-1 text-lime-300 pt-4">
                <span className="text-xl">••••</span>
                <span className="mx-1">•</span>
                <span className="text-xl">••••</span>
                <span className="mx-1">•</span>
                <span className="text-xl">••••</span>
                <span className="mx-1">•</span>
                <span className="text-xl font-bold tracking-wider">8849</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
