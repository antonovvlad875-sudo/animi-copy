import { ArrowRight, Radio } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import fxLogo from '@/assets/fx-logo.png';

export const DebitCardSection = () => {
  const { ref: frontCardRef, isVisible: frontCardVisible } = useScrollAnimation(0.2);
  const { ref: backCardRef, isVisible: backCardVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 md:px-8 py-12 sm:py-20 md:py-24 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
        {/* Left content */}
        <div 
          ref={contentRef}
          className={`space-y-3 sm:space-y-6 md:space-y-8 transition-all duration-1000 ease-out ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="inline-block">
            <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-bold tracking-wider text-lime-400/80 mb-1 sm:mb-2">
              FINX DEBIT CARD
            </div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
            <span className="text-lime-400">Подключи свои карты</span> и начни <span className="text-lime-400">зарабатывать</span> принимая платежи
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-xl">
            Полная конфиденциальность и безопасность в работе.
          </p>

          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-gray-900 font-semibold border-0 px-4 sm:px-5 md:px-8 py-3 sm:py-4 md:py-6 text-[10px] sm:text-xs md:text-sm lg:text-base w-full sm:w-auto"
          >
            Получить FinX Card
            <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Dual cards (front & back) */}
        <div className="relative flex items-center justify-center lg:justify-end min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[400px] scale-[0.4] sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100 -ml-8 sm:ml-0">
          {/* Back Card (VISA side) */}
          <div 
            ref={backCardRef}
            className={`absolute w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-400 shadow-2xl shadow-lime-500/30 p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-1000 ease-out ${
              backCardVisible ? 'opacity-100 translate-y-8 sm:translate-y-10 md:translate-y-12 translate-x-6 sm:translate-x-7 md:translate-x-8 rotate-[3deg] scale-100' : 'opacity-0 translate-y-16 sm:translate-y-20 md:translate-y-24 translate-x-12 sm:translate-x-14 md:translate-x-16 rotate-[10deg] scale-90'
            }`}
            style={{ zIndex: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl" />
            
            <div className="relative flex justify-end">
              <div className="w-16 h-16 rounded-full bg-gray-800/10 border-2 border-gray-800/20 flex items-center justify-center">
                <Radio className="w-8 h-8 text-gray-800/80" />
              </div>
            </div>

            <div className="relative flex justify-between items-end">
              <div className="flex-1" />
              <div className="text-right">
                <div className="text-gray-900 font-bold text-2xl tracking-tight mb-1">DEBIT</div>
                <div className="text-gray-900 font-black text-5xl tracking-tight italic -mt-1">VISA</div>
              </div>
            </div>
          </div>

          {/* Front Card */}
          <div 
            ref={frontCardRef}
            className={`relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] h-[200px] sm:h-[250px] md:h-[300px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500 via-lime-500 to-lime-400 shadow-2xl shadow-emerald-500/40 p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-1000 delay-150 ease-out ${
              frontCardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-[-3deg] scale-100' : 'opacity-0 -translate-y-8 sm:-translate-y-10 md:-translate-y-12 -translate-x-6 sm:-translate-x-7 md:-translate-x-8 rotate-[-10deg] scale-90'
            }`}
            style={{ zIndex: 2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-3xl" />
            
            <div className="relative flex justify-end">
              <div className="text-gray-900 text-sm font-semibold">
                FinX processing
              </div>
            </div>

            <div className="relative space-y-6 -mt-8">
              <div className="space-y-3 ml-8">
                <div className="w-16 h-14 rounded-xl bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-lg flex items-center justify-center relative overflow-hidden border border-gray-500/50">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)',
                  }} />
                  <img 
                    src={fxLogo} 
                    alt="FinX" 
                    className="w-10 h-10 relative z-10 opacity-60"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-1 text-gray-900">
                  <span className="text-xl">••••</span>
                  <span className="mx-1">•</span>
                  <span className="text-xl">••••</span>
                  <span className="mx-1">•</span>
                  <span className="text-xl">••••</span>
                  <span className="mx-1">•</span>
                  <span className="text-xl font-bold tracking-wider">8849</span>
                </div>
                
                <div className="flex items-center gap-0">
                  <div className="w-8 h-8 rounded-full bg-red-500 opacity-90" />
                  <div className="w-8 h-8 rounded-full bg-amber-500 opacity-90 -ml-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};