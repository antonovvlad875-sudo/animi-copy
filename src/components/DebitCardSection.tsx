import { Radio } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import fxLogo from '@/assets/fx-logo.png';

export const DebitCardSection = () => {
  const { ref: frontCardRef, isVisible: frontCardVisible } = useScrollAnimation(0.2);
  const { ref: backCardRef, isVisible: backCardVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div 
          ref={contentRef}
          className={`space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-1000 ease-out text-center lg:text-left ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
            <span className="text-lime-400">Подключи свои карты</span> и начни <span className="text-lime-400">зарабатывать</span> принимая платежи
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
            Полная конфиденциальность и безопасность в работе.
          </p>
        </div>

        {/* Right content - Dual cards (front & back) */}
        <div className="relative flex items-center justify-center lg:justify-end h-[200px] sm:h-[240px] md:h-[280px] lg:h-[320px] mt-8 lg:mt-0">
          {/* Back Card (VISA side) */}
          <div 
            ref={backCardRef}
            className={`absolute right-0 w-56 sm:w-64 md:w-80 lg:max-w-[400px] h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-lime-400 via-lime-500 to-emerald-400 shadow-2xl shadow-lime-500/30 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-1000 ease-out ${
              backCardVisible ? 'opacity-100 translate-y-6 sm:translate-y-8 md:translate-y-10 lg:translate-y-12 translate-x-4 sm:translate-x-5 md:translate-x-6 lg:translate-x-8 rotate-[3deg] scale-100' : 'opacity-0 translate-y-12 sm:translate-y-16 md:translate-y-20 lg:translate-y-24 translate-x-8 sm:translate-x-10 md:translate-x-12 lg:translate-x-16 rotate-[10deg] scale-90'
            }`}
            style={{ zIndex: 1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl sm:rounded-3xl" />
            
            <div className="relative flex justify-end">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-800/10 border-2 border-gray-800/20 flex items-center justify-center">
                <Radio className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-gray-800/80" />
              </div>
            </div>

            <div className="relative flex justify-between items-end">
              <div className="flex-1" />
              <div className="text-right">
                <div className="text-gray-900 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-tight mb-0.5 sm:mb-1">DEBIT</div>
                <div className="text-gray-900 font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight italic -mt-0.5 sm:-mt-1">VISA</div>
              </div>
            </div>
          </div>

          {/* Front Card */}
          <div 
            ref={frontCardRef}
            className={`absolute left-0 w-56 sm:w-64 md:w-80 lg:max-w-[400px] h-[140px] sm:h-[160px] md:h-[200px] lg:h-[240px] rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-br from-emerald-500 via-lime-500 to-lime-400 shadow-2xl shadow-emerald-500/40 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-all duration-1000 delay-150 ease-out ${
              frontCardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-[-3deg] scale-100' : 'opacity-0 -translate-y-6 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12 -translate-x-4 sm:-translate-x-5 md:-translate-x-6 lg:-translate-x-8 rotate-[-10deg] scale-90'
            }`}
            style={{ zIndex: 2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-xl sm:rounded-2xl md:rounded-3xl" />
            
            <div className="relative flex justify-end">
              <div className="text-gray-900 text-[10px] sm:text-xs md:text-sm font-semibold">
                FinX processing
              </div>
            </div>

            <div className="relative space-y-3 sm:space-y-4 md:space-y-6 -mt-4 sm:-mt-6 md:-mt-8">
              <div className="space-y-2 sm:space-y-3 ml-4 sm:ml-6 md:ml-8">
                <div className="w-10 h-9 sm:w-12 sm:h-10 md:w-14 md:h-12 lg:w-16 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 shadow-lg flex items-center justify-center relative overflow-hidden border border-gray-500/50">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/20" />
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 3px)',
                  }} />
                  <img 
                    src={fxLogo} 
                    alt="FinX" 
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 relative z-10 opacity-60"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 sm:pt-3 md:pt-4">
                <div className="flex items-center gap-0.5 sm:gap-1 text-gray-900 text-xs sm:text-base md:text-lg lg:text-xl">
                  <span>••••</span>
                  <span className="mx-0.5">•</span>
                  <span>••••</span>
                  <span className="mx-0.5">•</span>
                  <span>••••</span>
                  <span className="mx-0.5">•</span>
                  <span className="font-bold tracking-wider">8849</span>
                </div>
                
                <div className="flex items-center gap-0">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-red-500 opacity-90" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-amber-500 opacity-90 -ml-2 sm:-ml-2.5 md:-ml-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};