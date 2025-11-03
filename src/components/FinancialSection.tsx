import { ArrowDownUp, Zap, Route, Split, Users, RefreshCw, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PhoneAppScreen } from './PhoneAppScreen';

export const FinancialSection = () => {
  const { ref: phoneRef, isVisible: phoneVisible } = useScrollAnimation(0.2);
  const { ref: cardBgRef, isVisible: cardBgVisible } = useScrollAnimation(0.2);
  const { ref: greenCardRef, isVisible: greenCardVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/3 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center animate-fade-in">
        {/* Left content - Phone mockup */}
        <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1 h-[280px] sm:h-[350px] md:h-[450px] lg:h-[500px] scale-75 sm:scale-90 md:scale-100">
          {/* Digital Card Background */}
          <div 
            ref={cardBgRef}
            className={`absolute right-0 sm:right-0 w-36 sm:w-52 md:w-64 lg:w-80 h-24 sm:h-32 md:h-40 lg:h-52 rounded-xl sm:rounded-2xl md:rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-emerald-500/40 shadow-2xl shadow-emerald-500/30 overflow-hidden transition-all duration-1000 ease-out ${
              cardBgVisible ? 'opacity-100 translate-x-0 translate-y-0 rotate-[-5deg] scale-100' : 'opacity-0 translate-x-32 translate-y-16 rotate-[10deg] scale-75'
            }`}
            style={{ zIndex: 1, transform: cardBgVisible ? 'rotate(-5deg) translateX(15px) sm:translateX(30px) md:translateX(40px) lg:translateX(50px)' : undefined }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(132,204,22,0.2)_0%,_transparent_50%)]" />
            {/* Dot pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(132,204,22,0.3) 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }} />
          </div>

          {/* Green Card */}
          <div 
            ref={greenCardRef}
            className={`relative w-28 sm:w-44 md:w-52 lg:w-64 h-20 sm:h-28 md:h-32 lg:h-40 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-600 shadow-2xl shadow-emerald-500/50 p-2 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-between transition-all duration-1000 delay-100 ease-out ${
              greenCardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-[3deg] scale-100' : 'opacity-0 -translate-y-20 translate-x-16 rotate-[20deg] scale-75'
            }`}
            style={{ zIndex: 2, transform: greenCardVisible ? 'rotate(3deg) translateY(-8px) sm:translateY(-12px) md:translateY(-16px) lg:translateY(-20px)' : undefined }}>
            <div className="flex justify-between items-start">
              <div className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-md sm:rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-2.5 h-2.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="text-[8px] sm:text-[10px] md:text-xs text-white/70 font-mono">****</div>
            </div>
            <div>
              <div className="text-white/80 text-[7px] sm:text-[9px] md:text-xs mb-0.5 sm:mb-1">Цифровая карта</div>
              <div className="text-white font-bold text-[10px] sm:text-xs md:text-base lg:text-lg">•••• 8849</div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div 
            ref={phoneRef}
            className={`relative w-40 sm:w-56 md:w-64 lg:w-72 h-[280px] sm:h-[380px] md:h-[450px] lg:h-[500px] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-gray-900 border-3 sm:border-4 md:border-6 lg:border-8 border-gray-800 shadow-2xl overflow-hidden transition-all duration-1000 delay-200 ease-out ${
              phoneVisible ? 'opacity-100 scale-100 -translate-x-2 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-10' : 'opacity-0 scale-75 translate-x-20 -translate-y-32'
            }`}
            style={{ zIndex: 3 }}>
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 lg:w-32 h-3 sm:h-4 md:h-5 lg:h-6 bg-gray-800 rounded-b-lg sm:rounded-b-xl md:rounded-b-2xl z-10" />
            
            {/* Phone screen - App */}
            <PhoneAppScreen />
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2 animate-fade-in text-center lg:text-left" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-lime-400">
            Беспроблемные выплаты и рефанды
          </h2>

          <div className="space-y-4 sm:space-y-5 mt-6 sm:mt-8">
            <div className="flex items-start gap-3 sm:gap-4 md:gap-5 animate-fade-in text-left" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-emerald-400" />
              </div>
              <div>
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed">Молниеносные выплаты на карты, электронные кошельки и банковские счета.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 md:gap-5 animate-fade-in text-left" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center flex-shrink-0">
                <ArrowDownUp className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-lime-400" />
              </div>
              <div>
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed">Автоматические и ручные варианты выплат.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 md:gap-5 animate-fade-in text-left" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Route className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-emerald-400" />
              </div>
              <div>
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed">Маршрутизируйте каждую транзакцию в соответствии с предопределенными атрибутами.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 md:gap-5 animate-fade-in text-left" style={{ animationDelay: '0.65s', animationFillMode: 'both' }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center flex-shrink-0">
                <Split className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-lime-400" />
              </div>
              <div>
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed">Разделите крупные выплаты на несколько транзакций.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 md:gap-5 animate-fade-in text-left" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-emerald-400" />
              </div>
              <div>
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed">Отправляйте средства неограниченному количеству клиентов и партнеров посредством пакетных выплат.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 md:gap-5 animate-fade-in text-left" style={{ animationDelay: '0.75s', animationFillMode: 'both' }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center flex-shrink-0">
                <RefreshCw className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-lime-400" />
              </div>
              <div>
                <p className="text-gray-300 font-medium text-sm sm:text-base md:text-lg leading-relaxed">Автоматическая динамическая конвертация валюты для повышения эффективности.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
