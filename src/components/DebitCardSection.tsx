import { CreditCard, Sparkles, ArrowRight, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const DebitCardSection = () => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: shadowCardRef, isVisible: shadowCardVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div 
          ref={contentRef}
          className={`space-y-8 transition-all duration-1000 ease-out ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="inline-block">
            <div className="text-sm font-bold tracking-wider text-lime-400/80 mb-2">
              FINX DEBIT CARD
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Обновите вашу дебетовую карту с помощью{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-400">
              FinX Card
            </span>
            —она работает везде, где принимают Visa
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl">
            Биометрическая защита, мгновенные транзакции и полный контроль над вашими финансами. Будущее платежей уже здесь.
          </p>

          <Button 
            size="lg" 
            className="group bg-emerald-500 hover:bg-emerald-600 text-white border-0 px-8 py-6 text-base"
          >
            Получить FinX Card
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Stacked cards */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Background shadow card */}
          <div 
            ref={shadowCardRef}
            className={`absolute w-full max-w-[500px] h-[320px] rounded-3xl backdrop-blur-md bg-gradient-to-br from-lime-900/20 to-emerald-900/20 border border-lime-500/20 shadow-2xl shadow-lime-500/20 overflow-hidden transition-all duration-1000 ease-out ${
              shadowCardVisible ? 'opacity-100 translate-y-8 translate-x-4 rotate-[-2deg] scale-100' : 'opacity-0 translate-y-20 translate-x-8 rotate-[5deg] scale-90'
            }`}
            style={{ zIndex: 1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(132,204,22,0.15)_0%,_transparent_50%)]" />
            {/* Dot pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(132,204,22,0.2) 1px, transparent 1px)',
              backgroundSize: '8px 8px'
            }} />
          </div>

          {/* Main card */}
          <div 
            ref={cardRef}
            className={`relative w-full max-w-[500px] h-[320px] rounded-3xl bg-gradient-to-br from-emerald-500 via-lime-500 to-emerald-400 shadow-2xl shadow-emerald-500/40 p-8 flex flex-col justify-between transition-all duration-1000 delay-100 ease-out ${
              cardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-y-10 -translate-x-4 rotate-[-5deg] scale-90'
            }`}
            style={{ zIndex: 2 }}
          >
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-3xl" />
            
            {/* Card chip and amount */}
            <div className="relative flex justify-between items-start">
              <div className="space-y-4">
                {/* Chip */}
                <div className="w-14 h-12 rounded-lg bg-gray-800/40 backdrop-blur-md border border-gray-700/50 flex items-center justify-center">
                  <div className="w-10 h-9 rounded bg-gradient-to-br from-gray-700/60 to-gray-800/40 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
                
                {/* Amount display */}
                <div className="text-gray-900 font-mono text-sm">
                  <div className="text-gray-800/80 text-xs mb-1">Баланс</div>
                  <div className="text-2xl font-bold">$reesehills</div>
                </div>
              </div>

              {/* Contactless icon */}
              <div className="w-12 h-12 rounded-full bg-gray-800/20 backdrop-blur-sm border border-gray-700/30 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping opacity-50">
                    <Sparkles className="w-6 h-6 text-gray-800" />
                  </div>
                  <Sparkles className="w-6 h-6 text-gray-800" />
                </div>
              </div>
            </div>

            {/* Card number and branding */}
            <div className="relative space-y-4">
              <div className="flex items-center gap-1 text-gray-900">
                <span className="text-xl">••••</span>
                <span className="mx-1">•</span>
                <span className="text-xl">••••</span>
                <span className="mx-1">•</span>
                <span className="text-xl">••••</span>
                <span className="mx-1">•</span>
                <span className="text-xl font-bold tracking-wider">8849</span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-gray-800/80 text-xs uppercase tracking-wider mb-1">Cardholder</div>
                  <div className="text-gray-900 font-semibold uppercase tracking-wide">FINX USER</div>
                </div>
                
                {/* VISA logo */}
                <div className="text-right">
                  <div className="text-gray-900 font-bold text-xl tracking-tight mb-0.5">DEBIT</div>
                  <div className="text-gray-900 font-black text-3xl tracking-tight italic -mt-1">VISA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
