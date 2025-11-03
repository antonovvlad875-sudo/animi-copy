import { FingerprintScanner } from './FingerprintScanner';
import { User, Lock, ArrowRight, Store, UserCog } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
export const BiometricHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-lime-600 mb-3 sm:mb-4">
            Система оплаты{' '}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-green-600">
              FinX платежное решение нового поколения
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">Обрабатываем 100% заявок по Российской Федерации </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link to="/merchant" className="w-full sm:w-auto">
              <Button size="lg" className="group bg-transparent border-2 border-lime-500/50 hover:bg-lime-500/10 text-lime-400 hover:text-lime-300 transition-all duration-300 w-full text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-3 sm:py-4 h-auto">
                <Store className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Мерчант
              </Button>
            </Link>
            
            <Link to="/operator" className="w-full sm:w-auto">
              <Button size="lg" className="group bg-transparent border-2 border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 hover:text-cyan-300 transition-all duration-300 w-full text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-3 sm:py-4 h-auto">
                <UserCog className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Оператор
              </Button>
            </Link>
          </div>
        </div>

        {/* Right content - Biometric cards */}
        <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px]">
          {/* Fingerprint Scanner Card */}
          <div className="absolute left-0 w-44 sm:w-52 md:w-60 lg:w-64 h-64 sm:h-72 md:h-80 lg:h-[340px] rounded-2xl sm:rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-emerald-500/40 shadow-2xl shadow-emerald-500/30 p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center overflow-hidden" style={{
          transform: 'rotate(-5deg)',
          zIndex: 1
        }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-lime-500/5 to-transparent" />
            
            {/* Glowing top accent line */}
            <div className="absolute top-4 sm:top-5 md:top-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 h-0.5 sm:h-1 bg-gradient-to-r from-lime-400/90 via-emerald-500/70 to-lime-400/20 rounded-full shadow-lg shadow-lime-500/50" />
            
            {/* Fingerprint container */}
            <div className="relative mt-6 sm:mt-8 md:mt-10 w-full flex items-center justify-center scale-75 sm:scale-85 md:scale-90 lg:scale-100">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full bg-gradient-to-br from-emerald-500/10 to-lime-500/10 blur-xl animate-pulse" />
                </div>
                <FingerprintScanner />
              </div>
            </div>
            
            {/* Bottom indicator text */}
            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-0 right-0 text-center px-2">
              <p className="text-emerald-400/60 text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-mono tracking-wider">БИОМЕТРИЧЕСКОЕ СКАНИРОВАНИЕ</p>
            </div>
          </div>

          {/* Digital Identity Card */}
          <div className="absolute right-0 w-52 sm:w-60 md:w-72 lg:w-80 h-32 sm:h-36 md:h-44 lg:h-48 rounded-2xl sm:rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-lime-500/40 shadow-2xl shadow-lime-500/30 p-4 sm:p-5 md:p-6 overflow-hidden" style={{
          transform: 'rotate(3deg)',
          zIndex: 2
        }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-lime-500/5 via-transparent to-emerald-500/5" />
            
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} />
            </div>
            
            <div className="relative h-full flex flex-col justify-between">
              <div className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-semibold text-lime-400 tracking-widest">DIGITAL IDENTITY</div>

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-400/20 to-lime-400/20 border border-lime-400/40 flex items-center justify-center backdrop-blur-sm relative overflow-hidden flex-shrink-0">
                  {/* Animated glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent animate-pulse" />
                  <div className="relative z-10">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-lime-400" />
                    <Lock className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-emerald-400 absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 drop-shadow-lg" />
                  </div>
                </div>

                <div className="flex-1 space-y-1 sm:space-y-1.5 md:space-y-2 min-w-0">
                  <div className="h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-emerald-500/40 to-lime-500/40 rounded-full w-full shadow-lg shadow-emerald-500/20" />
                  <div className="h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-emerald-500/40 to-lime-500/40 rounded-full w-3/4 shadow-lg shadow-emerald-500/20" />
                  <div className="grid grid-cols-2 gap-1 sm:gap-1.5 md:gap-2 mt-1 sm:mt-1.5 md:mt-2">
                    <div className="h-1 sm:h-1.5 md:h-2 bg-lime-500/30 rounded-full shadow-inner" />
                    <div className="h-1 sm:h-1.5 md:h-2 bg-lime-500/30 rounded-full shadow-inner" />
                  </div>
                </div>
              </div>

              {/* Connection line - hidden on small screens */}
              <svg className="hidden sm:block absolute -left-8 sm:-left-12 md:-left-16 lg:-left-20 top-1/2 w-8 sm:w-12 md:w-16 lg:w-20 h-2 -translate-y-1/2" style={{
              zIndex: -1
            }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{
                    stopColor: 'rgba(16, 185, 129, 0.1)',
                    stopOpacity: 1
                  }} />
                    <stop offset="100%" style={{
                    stopColor: 'rgba(16, 185, 129, 0.6)',
                    stopOpacity: 1
                  }} />
                  </linearGradient>
                </defs>
                <line x1="0" y1="1" x2="80" y2="1" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="4 4">
                  <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite" />
                </line>
                <circle cx="80" cy="1" r="3" fill="rgba(16, 185, 129, 0.8)">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>;
};