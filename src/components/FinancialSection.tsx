import { Smartphone, CreditCard, Bitcoin, TrendingUp, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const FinancialSection = () => {
  const { ref: phoneRef, isVisible: phoneVisible } = useScrollAnimation(0.2);
  const { ref: cardBgRef, isVisible: cardBgVisible } = useScrollAnimation(0.2);
  const { ref: greenCardRef, isVisible: greenCardVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-fade-in">
        {/* Left content - Phone mockup */}
        <div className="relative flex items-center justify-center lg:justify-start order-2 lg:order-1">
          {/* Digital Card Background */}
          <div 
            ref={cardBgRef}
            className={`absolute right-0 w-80 h-52 rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-emerald-500/40 shadow-2xl shadow-emerald-500/30 overflow-hidden transition-all duration-1000 ease-out ${
              cardBgVisible ? 'opacity-100 translate-x-0 translate-y-0 rotate-[-5deg] scale-100' : 'opacity-0 translate-x-32 translate-y-16 rotate-[10deg] scale-75'
            }`}
            style={{ zIndex: 1, transform: cardBgVisible ? 'rotate(-5deg) translateX(50px)' : undefined }}>
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
            className={`relative w-64 h-40 rounded-2xl bg-gradient-to-br from-emerald-500 to-lime-600 shadow-2xl shadow-emerald-500/50 p-6 flex flex-col justify-between transition-all duration-1000 delay-100 ease-out ${
              greenCardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-[3deg] scale-100' : 'opacity-0 -translate-y-20 translate-x-16 rotate-[20deg] scale-75'
            }`}
            style={{ zIndex: 2, transform: greenCardVisible ? 'rotate(3deg) translateY(-20px)' : undefined }}>
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs text-white/70 font-mono">****</div>
            </div>
            <div>
              <div className="text-white/80 text-xs mb-1">Цифровая карта</div>
              <div className="text-white font-bold text-lg">•••• 8849</div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div 
            ref={phoneRef}
            className={`relative w-72 h-[500px] rounded-[3rem] bg-gray-900 border-8 border-gray-800 shadow-2xl overflow-hidden transition-all duration-1000 delay-200 ease-out ${
              phoneVisible ? 'opacity-100 scale-100 -translate-x-10' : 'opacity-0 scale-75 translate-x-20 -translate-y-32'
            }`}
            style={{ zIndex: 3 }}>
            {/* Phone notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10" />
            
            {/* Phone screen */}
            <div className="w-full h-full bg-white p-6 pt-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-gray-900 font-bold text-xl">FinX</h3>
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                </div>
              </div>

              {/* Balance */}
              <div className="mb-6">
                <div className="text-gray-600 text-sm mb-1">Баланс</div>
                <div className="text-gray-900 font-bold text-4xl mb-2">₽2,847,500</div>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span>Счёт: 0000</span>
                  <span>БИК: 0000</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 bg-emerald-50 text-emerald-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-emerald-100 transition-colors">
                  Пополнить
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                  Вывести
                </button>
              </div>

              {/* Paychecks indicator */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600">Зарплата</span>
              </div>

              {/* Save & Invest */}
              <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl p-4 mb-4 border border-emerald-100">
                <div className="text-sm text-gray-600 mb-1">Накопления</div>
                <div className="flex justify-between items-center mb-2">
                  <div className="text-gray-900 font-bold text-2xl">₽850,000</div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-xs text-emerald-600 font-medium">₽150,000 до цели</div>
              </div>

              {/* Bitcoin */}
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-1">
                  <Bitcoin className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-gray-600">Биткоин</span>
                </div>
                <div className="text-gray-900 font-bold text-xl">₽605</div>
                <div className="text-xs text-green-600">+0.188 сегодня</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="space-y-8 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">
              Цифровые финансы
            </span>
            {' '}будущего
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl">
            Управляйте своими активами с помощью передовых биометрических технологий. 
            Безопасность, скорость и удобство в одном приложении.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Мобильные платежи</h3>
                <p className="text-gray-400 text-sm">Мгновенные переводы с защитой отпечатком пальца</p>
              </div>
            </div>

            <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 rounded-xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-lime-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Виртуальные карты</h3>
                <p className="text-gray-400 text-sm">Создавайте цифровые карты для безопасных покупок</p>
              </div>
            </div>

            <div className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                <Bitcoin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Криптовалюта</h3>
                <p className="text-gray-400 text-sm">Инвестируйте в цифровые активы одним касанием</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="group bg-emerald-500 hover:bg-emerald-600 text-white border-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            НАЧАТЬ СЕЙЧАС
            <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
