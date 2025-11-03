import { Store, UserCog, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export const BiometricHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 md:px-8 py-12 sm:py-20 md:py-24 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 sm:w-48 md:w-64 lg:w-96 h-32 sm:h-48 md:h-64 lg:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-3 sm:space-y-6 md:space-y-8">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-lime-600">
            Система оплаты{' '}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-green-600">FinX</span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-xl">
            Обрабатываем 100% заявок по Российской Федерации
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link to="/merchant">
              <Button size="lg" className="group bg-transparent border-2 border-lime-500/50 hover:bg-lime-500/10 text-lime-400 hover:text-lime-300 transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm md:text-base px-6 sm:px-8 md:px-10 py-2 sm:py-3">
                <Store className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Мерчант
              </Button>
            </Link>
            
            <Link to="/operator">
              <Button size="lg" className="group bg-transparent border-2 border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm md:text-base px-6 sm:px-8 md:px-10 py-2 sm:py-3">
                <UserCog className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Оператор
              </Button>
            </Link>
          </div>
        </div>

        {/* Right content - Merchant and Operator cards */}
        <div className="relative flex items-center justify-center lg:justify-end h-[400px] scale-75 sm:scale-90 lg:scale-100">
          {/* Merchant Card */}
          <div className="relative w-72 h-80 rounded-3xl backdrop-blur-md bg-gradient-to-br from-lime-900/40 via-emerald-900/30 to-lime-900/20 border border-lime-500/50 shadow-2xl shadow-lime-500/20 p-6 overflow-hidden" style={{
            transform: 'rotate(3deg) translateY(-20px)',
            zIndex: 2
          }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-500/10 via-transparent to-emerald-500/5" />
            
            {/* Glowing top accent line */}
            <div className="absolute top-8 left-6 right-6 h-1 bg-gradient-to-r from-lime-400/90 via-emerald-500/70 to-lime-400/20 rounded-full shadow-lg shadow-lime-500/50" />
            
            <div className="relative h-full flex flex-col items-center justify-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-lime-500/20 to-emerald-500/20 blur-2xl animate-pulse" />
                </div>
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-lime-400/20 to-emerald-400/20 border-2 border-lime-400/40 flex items-center justify-center backdrop-blur-sm">
                  <Store className="w-12 h-12 text-lime-400" />
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-lime-400">Мерчант</h3>
                <p className="text-sm text-gray-400 px-4">Приём платежей для вашего бизнеса</p>
              </div>

              <Link to="/merchant" className="w-full">
                <Button className="w-full bg-lime-500/20 hover:bg-lime-500/30 border border-lime-400/50 text-lime-400 hover:text-lime-300 transition-all duration-300">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Operator Card */}
          <div className="absolute right-0 w-72 h-80 rounded-3xl backdrop-blur-md bg-gradient-to-br from-cyan-900/40 via-emerald-900/30 to-cyan-900/20 border border-cyan-500/50 shadow-2xl shadow-cyan-500/20 p-6 overflow-hidden" style={{
            transform: 'rotate(-5deg) translateX(50px)',
            zIndex: 1
          }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/5" />
            
            {/* Glowing top accent line */}
            <div className="absolute top-8 left-6 right-6 h-1 bg-gradient-to-r from-cyan-400/90 via-emerald-500/70 to-cyan-400/20 rounded-full shadow-lg shadow-cyan-500/50" />
            
            <div className="relative h-full flex flex-col items-center justify-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 blur-2xl animate-pulse" />
                </div>
                <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 border-2 border-cyan-400/40 flex items-center justify-center backdrop-blur-sm">
                  <UserCog className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-bold text-cyan-400">Оператор</h3>
                <p className="text-sm text-gray-400 px-4">Управление платёжной системой</p>
              </div>

              <Link to="/operator" className="w-full">
                <Button className="w-full bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-400 hover:text-cyan-300 transition-all duration-300">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
