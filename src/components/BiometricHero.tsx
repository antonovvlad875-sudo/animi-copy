import { FingerprintScanner } from './FingerprintScanner';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
export const BiometricHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-6 md:px-8 py-12 sm:py-20 md:py-24 overflow-hidden">
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
          
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-xl">Обрабатываем 100% заявок по Российской Федерации </p>

          <Button size="lg" className="group bg-transparent border-2 border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-3">
            VIEW PRODUCTS
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Biometric cards */}
        <div className="relative flex items-center justify-center lg:justify-end scale-[0.4] sm:scale-[0.6] md:scale-75 lg:scale-90 xl:scale-100 -ml-8 sm:ml-0">
          {/* Fingerprint Scanner Card */}
          <div className="relative w-56 sm:w-64 md:w-72 h-80 sm:h-[340px] md:h-96 rounded-2xl sm:rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-emerald-500/40 shadow-2xl shadow-emerald-500/30 p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center overflow-hidden" style={{
          transform: 'translateX(-15px) sm:translateX(-20px) md:translateX(-30px) rotate(-5deg)',
          zIndex: 1
        }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-lime-500/5 to-transparent" />
            
            {/* Glowing top accent line */}
            <div className="absolute top-6 sm:top-8 left-4 sm:left-6 right-4 sm:right-6 h-1 bg-gradient-to-r from-lime-400/90 via-emerald-500/70 to-lime-400/20 rounded-full shadow-lg shadow-lime-500/50" />
            
            {/* Fingerprint container */}
            <div className="relative mt-8 sm:mt-10 md:mt-12 w-full flex items-center justify-center">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full bg-gradient-to-br from-emerald-500/10 to-lime-500/10 blur-xl animate-pulse" />
                </div>
                <FingerprintScanner />
              </div>
            </div>
            
            {/* Bottom indicator text */}
            <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center">
              <p className="text-emerald-400/60 text-[10px] sm:text-xs font-mono tracking-wider">БИОМЕТРИЧЕСКОЕ СКАНИРОВАНИЕ</p>
            </div>
          </div>

          {/* Digital Identity Card */}
          <div className="relative w-64 sm:w-72 md:w-80 h-40 sm:h-48 md:h-52 rounded-2xl sm:rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-lime-500/40 shadow-2xl shadow-lime-500/30 p-3 sm:p-4 md:p-6 overflow-hidden" style={{
          transform: 'translateX(15px) sm:translateX(20px) md:translateX(30px) rotate(3deg)',
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
              <div className="text-[10px] sm:text-xs font-semibold text-lime-400 tracking-widest">DIGITAL IDENTITY</div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-lime-400/20 border border-lime-400/40 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                  {/* Animated glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent animate-pulse" />
                  <div className="relative z-10">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-lime-400" />
                    <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-emerald-400 absolute -bottom-1 -right-1 drop-shadow-lg" />
                  </div>
                </div>

                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <div className="h-1.5 sm:h-2 bg-gradient-to-r from-emerald-500/40 to-lime-500/40 rounded-full w-full shadow-lg shadow-emerald-500/20" />
                  <div className="h-1.5 sm:h-2 bg-gradient-to-r from-emerald-500/40 to-lime-500/40 rounded-full w-3/4 shadow-lg shadow-emerald-500/20" />
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    <div className="h-1.5 sm:h-2 bg-lime-500/30 rounded-full shadow-inner" />
                    <div className="h-1.5 sm:h-2 bg-lime-500/30 rounded-full shadow-inner" />
                  </div>
                </div>
              </div>

              {/* Connection line */}
              <svg className="absolute -left-12 sm:-left-16 md:-left-20 top-1/2 w-12 sm:w-16 md:w-20 h-2 -translate-y-1/2" style={{
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