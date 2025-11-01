import { Smartphone, Clock, Percent, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const PartnerConditionsSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/3 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div 
        ref={contentRef}
        className={`relative z-10 max-w-5xl mx-auto w-full text-center space-y-6 sm:space-y-10 md:space-y-12 transition-all duration-1000 ease-out ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Header */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-lime-500/10 border border-lime-500/30">
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-wider text-lime-400">
              ДЛЯ ПАРТНЕРОВ
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight px-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">
              Лучшие условия в индустрии
            </span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Начните зарабатывать с FinX уже сегодня. Гибкий график, высокие проценты и полная прозрачность.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-4xl mx-auto">
          {/* Benefit 1 */}
          <div className="group relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-2xl sm:rounded-3xl transition-all duration-300" />
            <div className="relative space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Работа с мобильного</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Работайте из любой точки мира с удобного мобильного приложения
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-2xl sm:rounded-3xl transition-all duration-300" />
            <div className="relative space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center mx-auto">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-lime-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Гибкий график</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Работайте в удобное для вас время без жестких ограничений
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-2xl sm:rounded-3xl transition-all duration-300" />
            <div className="relative space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Percent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-emerald-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Высокая комиссия</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Получайте от <span className="text-lime-400 font-bold">8% до 12%</span> от суммы принятых транзакций
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="group relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-2xl sm:rounded-3xl transition-all duration-300" />
            <div className="relative space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center mx-auto">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-lime-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">Дополнительный доход</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Получайте дополнительный процент за вывод средств клиентами
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2 sm:pt-6 md:pt-8">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 text-white border-0 px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 text-sm sm:text-base md:text-lg shadow-2xl shadow-emerald-500/30 w-full sm:w-auto"
          >
            Стать партнером
            <CheckCircle2 className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
