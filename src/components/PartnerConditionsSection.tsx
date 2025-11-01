import { Smartphone, Clock, Percent, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const PartnerConditionsSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div 
        ref={contentRef}
        className={`relative z-10 max-w-5xl mx-auto w-full text-center space-y-12 transition-all duration-1000 ease-out ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/30">
            <span className="text-sm font-bold tracking-wider text-lime-400">
              ДЛЯ ПАРТНЕРОВ
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-lime-400">Лучшие условия</span> <span className="text-cyan-400">в индустрии</span>
          </h2>
          
          <p className="text-lg text-lime-400 max-w-2xl mx-auto">
            Начните зарабатывать с FinX уже сегодня. Гибкий график, высокие проценты и полная прозрачность.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Benefit 1 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300" />
            <div className="relative space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Smartphone className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400">Работа с мобильного</h3>
              <p className="text-lime-400">
                Работайте из любой точки мира с удобного мобильного приложения
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300" />
            <div className="relative space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center mx-auto">
                <Clock className="w-7 h-7 text-lime-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400">Гибкий график</h3>
              <p className="text-lime-400">
                Работайте в удобное для вас время без жестких ограничений
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300" />
            <div className="relative space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <Percent className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400">Высокая комиссия</h3>
              <p className="text-lime-400">
                Получайте от <span className="text-cyan-400 font-bold">8% до 12%</span> от суммы принятых транзакций
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-lime-900/20 border border-lime-500/30 hover:border-lime-500/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-500/0 to-emerald-500/0 group-hover:from-lime-500/5 group-hover:to-emerald-500/5 rounded-3xl transition-all duration-300" />
            <div className="relative space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center mx-auto">
                <TrendingUp className="w-7 h-7 text-lime-400" />
              </div>
              <h3 className="text-xl font-bold text-cyan-400">Дополнительный доход</h3>
              <p className="text-lime-400">
                Получайте дополнительный процент за вывод средств клиентами
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-8">
          <Button 
            size="lg" 
            className="group bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600 text-white border-0 px-10 py-7 text-lg shadow-2xl shadow-emerald-500/30"
          >
            Стать партнером
            <CheckCircle2 className="ml-2 h-6 w-6 group-hover:scale-110 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
