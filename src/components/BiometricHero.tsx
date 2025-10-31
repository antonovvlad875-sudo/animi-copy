import { FingerprintScanner } from './FingerprintScanner';
import { User, Lock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export const BiometricHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Industry Leader in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Biometrics Technology
            </span>
            .
          </h1>
          
          <p className="text-lg text-gray-400 max-w-xl">
            Advanced fingerprint recognition and digital identity solutions for a secure future.
          </p>

          <Button 
            size="lg"
            className="group bg-transparent border-2 border-emerald-500/50 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 transition-all duration-300"
          >
            VIEW PRODUCTS
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Biometric cards */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Fingerprint Scanner Card */}
          <div 
            className="relative w-72 h-96 rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 p-6 flex flex-col items-center justify-center"
            style={{
              transform: 'translateX(-30px) rotate(-5deg)',
              zIndex: 1
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-transparent" />
            
            {/* Yellow accent line */}
            <div className="absolute top-8 left-6 right-6 h-1 bg-gradient-to-r from-yellow-500/80 to-yellow-500/20 rounded-full" />
            
            <div className="relative mt-12">
              <FingerprintScanner />
            </div>
          </div>

          {/* Digital Identity Card */}
          <div 
            className="relative w-80 h-52 rounded-3xl backdrop-blur-md bg-gradient-to-br from-cyan-900/20 to-emerald-900/20 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 p-6"
            style={{
              transform: 'translateX(30px) rotate(3deg)',
              zIndex: 2
            }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/5 via-transparent to-emerald-500/5" />
            
            <div className="relative h-full flex flex-col justify-between">
              <div className="text-xs font-semibold text-emerald-400 tracking-widest">
                DIGITAL IDENTITY
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="relative">
                    <User className="w-7 h-7 text-emerald-400" />
                    <Lock className="w-4 h-4 text-cyan-400 absolute -bottom-1 -right-1" />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-emerald-500/30 rounded-full w-full" />
                  <div className="h-2 bg-emerald-500/30 rounded-full w-3/4" />
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="h-2 bg-cyan-500/20 rounded-full" />
                    <div className="h-2 bg-cyan-500/20 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Connection line */}
              <svg 
                className="absolute -left-20 top-1/2 w-20 h-2 -translate-y-1/2"
                style={{ zIndex: -1 }}
              >
                <line 
                  x1="0" 
                  y1="1" 
                  x2="80" 
                  y2="1" 
                  stroke="rgba(16, 185, 129, 0.3)" 
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="80" cy="1" r="3" fill="rgba(16, 185, 129, 0.6)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
