import { ArrowRight, Radio } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import fxLogo from '@/assets/fx-logo.png';

export const DebitCardSection = () => {
  const { ref: frontCardRef, isVisible: frontCardVisible } = useScrollAnimation(0.2);
  const { ref: backCardRef, isVisible: backCardVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
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
          {/* Back Card (VISA side) - Behind */}
          <div 
            ref={backCardRef}
            className={`absolute w-full max-w-[480px] h-[300px] rounded-3xl bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-400 shadow-2xl shadow-lime-500/30 p-8 flex flex-col justify-between transition-all duration-1000 ease-out ${
              backCardVisible ? 'opacity-100 translate-y-12 translate-x-8 rotate-[3deg] scale-100' : 'opacity-0 translate-y-24 translate-x-16 rotate-[10deg] scale-90'
            }`}
            style={{ zIndex: 1 }}
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl" />
            
            <div className="relative flex justify-end">
              {/* NFC Symbol */}
              <div className="w-16 h-16 rounded-full bg-gray-800/10 border-2 border-gray-800/20 flex items-center justify-center">
                <Radio className="w-8 h-8 text-gray-800/80" />
              </div>
            </div>

            <div className="relative flex justify-between items-end">
              <div className="flex-1" />
              
              {/* VISA logo */}
              <div className="text-right">
                <div className="text-gray-900 font-bold text-2xl tracking-tight mb-1">DEBIT</div>
                <div className="text-gray-900 font-black text-5xl tracking-tight italic -mt-1">VISA</div>
              </div>
            </div>
          </div>

          {/* Front Card - In front */}
          <div 
            ref={frontCardRef}
            className={`relative w-full max-w-[480px] h-[300px] rounded-3xl bg-gradient-to-br from-emerald-500 via-lime-500 to-lime-400 shadow-2xl shadow-emerald-500/40 p-8 flex flex-col justify-between transition-all duration-1000 delay-150 ease-out ${
              frontCardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-[-3deg] scale-100' : 'opacity-0 -translate-y-12 -translate-x-8 rotate-[-10deg] scale-90'
            }`}
            style={{ zIndex: 2 }}
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-3xl" />
            
            {/* FinX processing text - top right */}
            <div className="relative flex justify-end">
              <div className="text-gray-900 text-sm font-semibold">
                FinX processing
              </div>
            </div>

            {/* Main content */}
            <div className="relative space-y-6 -mt-4">
              {/* Chip */}
              <div className="space-y-3 ml-8">
                {/* Metallic chip with logo pattern */}
                <div className="w-16 h-14 rounded-xl bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-lg flex items-center justify-center relative overflow-hidden border border-gray-500/50">
                  {/* Metallic texture lines */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)',
                  }} />
                  
                  {/* Logo */}
                  <img 
                    src={fxLogo} 
                    alt="FinX" 
                    className="w-10 h-10 relative z-10 opacity-60"
                  />
                </div>
              </div>

              {/* Card number */}
              <div className="flex items-center gap-1 text-gray-900 pt-4">
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
