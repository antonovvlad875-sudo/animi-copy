import { Users2, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export const ReferralSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 overflow-hidden">
      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div 
        ref={contentRef}
        className={`relative z-10 max-w-4xl mx-auto w-full text-center transition-all duration-1000 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center">
            <Users2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-emerald-400" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-lime-400 mb-6 sm:mb-8">
          Реферальная система
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          Приглашайте партнёров и зарабатывайте с каждой их транзакции!
          <br />
          Настройте свой процент и долю партнёра — всё прозрачно, гибко и автоматически.
        </p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12">
          <div className="flex items-center gap-3 text-emerald-400">
            <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="text-base sm:text-lg font-medium">Гибкие проценты</span>
          </div>
          <div className="flex items-center gap-3 text-lime-400">
            <Users2 className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="text-base sm:text-lg font-medium">Автоматические начисления</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/referral">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-gray-900 font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-xl sm:rounded-2xl shadow-2xl shadow-lime-500/30 border-0 transition-all duration-300 hover:scale-105"
          >
            Узнать больше
          </Button>
        </Link>
      </div>
    </section>
  );
};
