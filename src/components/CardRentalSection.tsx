import { CreditCard, Percent, Handshake, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from './ui/button';

export const CardRentalSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative px-4 sm:px-6 md:px-8 py-10 sm:py-14 overflow-hidden">
      {/* Animated glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 rounded-full blur-3xl animate-pulse" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
        }`}
      >
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Animated border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 rounded-2xl sm:rounded-3xl animate-pulse opacity-70" />
          
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* Left icon block */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center">
                  <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-amber-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30">
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-amber-400">
                    АРЕНДА КАРТ
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                  Аренда карт под{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                    6% от суммы залива
                  </span>
                </h3>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
                  Приглашаем дропов и дроповодов к взаимовыгодному сотрудничеству. Прозрачные условия, стабильные объёмы и своевременные выплаты.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                  <div className="flex items-center gap-2 text-amber-400/80 text-xs sm:text-sm">
                    <Percent className="w-4 h-4" />
                    <span>Выгодный процент</span>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400/80 text-xs sm:text-sm">
                    <Handshake className="w-4 h-4" />
                    <span>Надёжное партнёрство</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0">
                <a href="https://t.me/FinX_support_ru" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-xl shadow-xl shadow-amber-500/25 border-0 transition-all duration-300 hover:scale-105">
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Связаться
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
