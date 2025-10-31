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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-lime-600">
            Industry Leader in{' '}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-green-600">
Твоя уникальная возможность ...
          </span>
            .
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl my-0 py-0 px-0 mx-0">Обрабатываем 100% заявок по Российской Федирации </p>

          <Button size="lg" className="group bg-transparent border-2 border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300">
            VIEW PRODUCTS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Biometric cards */}
        <div className="relative flex items-center justify-center lg:justify-end gap-8">
          {/* Fingerprint Scanner Card */}
          <div className="relative w-64 h-80 rounded-3xl backdrop-blur-md overflow-hidden" style={{
            transform: 'translateY(20px)',
            zIndex: 1
          }}>
            {/* Gradient background - teal */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-800/60 to-teal-900/80" />
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.4)]" />
            
            {/* Corner notches */}
            <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg" />
            
            <div className="relative h-full flex flex-col items-center justify-center p-6">
              {/* Yellow scanning line */}
              <div className="absolute top-12 left-6 right-6 h-1 bg-gradient-to-r from-yellow-500/0 via-yellow-500/80 to-yellow-500/0 rounded-full animate-[scan_3s_ease-in-out_infinite]" />
              
              <div className="relative mt-8">
                <FingerprintScanner />
              </div>
            </div>
            
            {/* Connection line to right card */}
            <svg className="absolute -right-8 top-1/2 w-16 h-2 -translate-y-1/2" style={{
              zIndex: 10
            }}>
              <line x1="0" y1="1" x2="64" y2="1" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="64" cy="1" r="4" fill="rgba(34, 211, 238, 0.8)" className="animate-pulse" />
            </svg>
          </div>

          {/* Digital Identity Card */}
          <div className="relative w-96 h-60 rounded-3xl backdrop-blur-md overflow-hidden" style={{
            transform: 'translateY(-20px)',
            zIndex: 2
          }}>
            {/* Gradient background - teal to yellow/gold */}
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-teal-800/60 to-yellow-600/40" />
            
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,0.4)]" />
            
            {/* Corner notches */}
            <div className="absolute top-3 left-3 w-10 h-10 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-10 h-10 border-r-2 border-t-2 border-cyan-400/50 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-10 h-10 border-l-2 border-b-2 border-cyan-400/50 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg" />
            
            <div className="relative h-full flex flex-col justify-between p-8">
              <div className="text-sm font-semibold text-cyan-300 tracking-[0.3em] uppercase">Digital Identity</div>

              <div className="flex items-center gap-8">
                {/* User icon with glow effect */}
                <div className="relative">
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-cyan-400/30 blur-2xl" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-teal-500/40 to-cyan-500/30 border-2 border-cyan-400/60 flex items-center justify-center backdrop-blur-sm shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                    <div className="relative">
                      <User className="w-10 h-10 text-cyan-200" strokeWidth={2.5} />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-cyan-400/90 flex items-center justify-center">
                        <Lock className="w-3.5 h-3.5 text-teal-900" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data lines */}
                <div className="flex-1 space-y-3">
                  <div className="h-2.5 bg-gradient-to-r from-teal-400/70 to-teal-400/20 rounded-full w-full" />
                  <div className="h-2.5 bg-gradient-to-r from-teal-400/70 to-teal-400/20 rounded-full w-full" />
                  <div className="h-2.5 bg-gradient-to-r from-teal-400/70 to-teal-400/20 rounded-full w-4/5" />
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="h-2.5 bg-gradient-to-r from-teal-400/50 to-teal-400/10 rounded-full" />
                    <div className="h-2.5 bg-gradient-to-r from-teal-400/50 to-teal-400/10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};