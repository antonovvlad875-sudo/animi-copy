import { CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const DebitCardSection = () => {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left content */}
        <div 
          ref={contentRef}
          className={`space-y-8 transition-all duration-1000 ease-out ${
            contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="inline-block">
            <div className="text-sm font-bold tracking-wider text-primary/80 mb-2">
              FINX DEBIT CARD
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">
              Обновите вашу дебетовую карту с помощью{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              FinX Card
            </span>
            <span className="text-foreground">
              —она работает везде, где принимают Visa
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            Биометрическая защита, мгновенные транзакции и полный контроль над вашими финансами. Будущее платежей уже здесь.
          </p>

          <Button 
            size="lg" 
            className="group bg-foreground hover:bg-foreground/90 text-background border-0 px-8 py-6 text-base"
          >
            Получить FinX Card
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Right content - Stacked cards */}
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Background card (shadow effect) */}
          <div 
            ref={cardRef}
            className={`absolute w-full max-w-[500px] h-[320px] rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl transition-all duration-1000 ease-out ${
              cardVisible ? 'opacity-100 translate-y-8 translate-x-4 rotate-[-2deg] scale-100' : 'opacity-0 translate-y-20 translate-x-8 rotate-[5deg] scale-90'
            }`}
            style={{ zIndex: 1 }}
          />

          {/* Main card */}
          <div 
            className={`relative w-full max-w-[500px] h-[320px] rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl shadow-primary/30 p-8 flex flex-col justify-between transition-all duration-1000 delay-100 ease-out ${
              cardVisible ? 'opacity-100 translate-y-0 translate-x-0 rotate-0 scale-100' : 'opacity-0 -translate-y-10 -translate-x-4 rotate-[-5deg] scale-90'
            }`}
            style={{ zIndex: 2 }}
          >
            {/* Card chip and amount */}
            <div className="flex justify-between items-start">
              <div className="space-y-4">
                {/* Chip */}
                <div className="w-14 h-12 rounded-lg bg-background/20 backdrop-blur-md border border-background/30 flex items-center justify-center">
                  <div className="w-10 h-9 rounded bg-gradient-to-br from-background/40 to-background/10 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-background" />
                  </div>
                </div>
                
                {/* Amount display */}
                <div className="text-background/90 font-mono text-sm">
                  <div className="text-background/70 text-xs mb-1">Баланс</div>
                  <div className="text-2xl font-bold">$reesehills</div>
                </div>
              </div>

              {/* Contactless icon */}
              <div className="w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping">
                    <Sparkles className="w-6 h-6 text-background/50" />
                  </div>
                  <Sparkles className="w-6 h-6 text-background" />
                </div>
              </div>
            </div>

            {/* Card number and branding */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <span className="mx-2 text-background/60">•</span>
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <span className="mx-2 text-background/60">•</span>
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <div className="w-2 h-2 rounded-full bg-background/80" />
                <span className="mx-2 text-background/60">•</span>
                <span className="text-background font-mono font-bold">8849</span>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-background/70 text-xs uppercase tracking-wider mb-1">Cardholder</div>
                  <div className="text-background font-semibold uppercase tracking-wide">FinX User</div>
                </div>
                
                {/* VISA logo */}
                <div className="text-right">
                  <div className="text-background font-bold text-2xl tracking-tighter italic">DEBIT</div>
                  <div className="text-background font-black text-3xl tracking-tight italic -mt-1">VISA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
