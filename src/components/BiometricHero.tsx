import { FingerprintScanner } from './FingerprintScanner';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
export const BiometricHero = () => {
  return <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-lime-400">Система оплаты</span>{' '}
            <span className="text-cyan-400">FinX</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl my-0 py-0 px-0 mx-0">Обрабатываем 100% заявок по Российской Федерации </p>

          <Button size="lg" className="group bg-transparent border-2 border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300">
            VIEW PRODUCTS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Biometric cards */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Fingerprint Scanner Card */}
          <div className="relative w-72 h-96 rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-emerald-500/40 shadow-2xl shadow-emerald-500/30 p-6 flex flex-col items-center justify-center overflow-hidden" style={{
          transform: 'translateX(-30px) rotate(-5deg)',
          zIndex: 1
        }}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-lime-500/5 to-transparent" />
            
            {/* Glowing top accent line */}
            <div className="absolute top-8 left-6 right-6 h-1 bg-gradient-to-r from-lime-400/90 via-emerald-500/70 to-lime-400/20 rounded-full shadow-lg shadow-lime-500/50" />
            
            {/* Fingerprint container */}
            <div className="relative mt-12 w-full flex items-center justify-center">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500/10 to-lime-500/10 blur-xl animate-pulse" />
                </div>
                <FingerprintScanner />
              </div>
            </div>
            
            {/* Bottom indicator text */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-emerald-400/60 text-xs font-mono tracking-wider">БИОМЕТРИЧЕСКОЕ СКАНИРОВАНИЕ</p>
            </div>
          </div>

          {/* Digital Identity Card */}
          <div className="relative w-80 h-52 rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-lime-500/40 shadow-2xl shadow-lime-500/30 p-6 overflow-hidden" style={{
          transform: 'translateX(30px) rotate(3deg)',
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
              <div className="text-xs font-semibold text-lime-400 tracking-widest">DIGITAL IDENTITY</div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-lime-400/20 border border-lime-400/40 flex items-center justify-center backdrop-blur-sm relative overflow-hidden">
                  {/* Animated glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent animate-pulse" />
                  <div className="relative z-10">
                    <User className="w-7 h-7 text-lime-400" />
                    <Lock className="w-4 h-4 text-emerald-400 absolute -bottom-1 -right-1 drop-shadow-lg" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-gradient-to-r from-emerald-500/40 to-lime-500/40 rounded-full w-full shadow-lg shadow-emerald-500/20" />
                  <div className="h-2 bg-gradient-to-r from-emerald-500/40 to-lime-500/40 rounded-full w-3/4 shadow-lg shadow-emerald-500/20" />
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="h-2 bg-lime-500/30 rounded-full shadow-inner" />
                    <div className="h-2 bg-lime-500/30 rounded-full shadow-inner" />
                  </div>
                </div>
              </div>

              {/* Connection line */}
              <svg className="absolute -left-20 top-1/2 w-20 h-2 -translate-y-1/2" style={{
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