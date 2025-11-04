import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { Users2, TrendingUp, Settings, Zap, BarChart3, DollarSign, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Referral = () => {
  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-0">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-24 sm:py-32">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          {/* Back button */}
          <Link to="/" className="absolute top-8 left-4 sm:left-8 z-20">
            <Button variant="ghost" className="text-gray-300 hover:text-lime-400 hover:bg-lime-500/10">
              <ArrowLeft className="w-5 h-5 mr-2" />
              На главную
            </Button>
          </Link>

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center">
                <Users2 className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-emerald-400" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">
                Зарабатывайте вместе
              </span>
              <br />
              <span className="text-white">
                с реферальной системой FinX процессинга
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
              Приглашайте партнёров, настраивайте свои проценты и зарабатывайте больше!
              <br />
              Наша реферальная система — это гибкий инструмент, который позволяет вам самим определять условия сотрудничества.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="backdrop-blur-md bg-gray-900/40 border border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center mb-4 sm:mb-6">
                  <Settings className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-lime-400 mb-3 sm:mb-4">
                  Гибкая настройка
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Вы сами решаете, какой процент получить себе и какой предложить партнёру — например, 5% ему и 6% себе
                </p>
              </div>

              {/* Feature 2 */}
              <div className="backdrop-blur-md bg-gray-900/40 border border-lime-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-lime-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-lime-500/20 to-emerald-500/20 border border-lime-500/30 flex items-center justify-center mb-4 sm:mb-6">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">
                  Автоматические начисления
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Начисления происходят автоматически с каждой транзакции. Система сама всё посчитает!
                </p>
              </div>

              {/* Feature 3 */}
              <div className="backdrop-blur-md bg-gray-900/40 border border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center mb-4 sm:mb-6">
                  <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-lime-400 mb-3 sm:mb-4">
                  Прозрачная отчётность
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Все настройки прозрачны. Отслеживайте доходы в режиме реального времени
                </p>
              </div>

              {/* Feature 4 */}
              <div className="backdrop-blur-md bg-gray-900/40 border border-lime-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-lime-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-lime-500/20 to-emerald-500/20 border border-lime-500/30 flex items-center justify-center mb-4 sm:mb-6">
                  <TrendingUp className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">
                  Масштабируемость
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Привлекайте неограниченное количество партнёров и создавайте многоуровневые структуры
                </p>
              </div>

              {/* Feature 5 */}
              <div className="backdrop-blur-md bg-gray-900/40 border border-emerald-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500/20 to-lime-500/20 border border-emerald-500/30 flex items-center justify-center mb-4 sm:mb-6">
                  <DollarSign className="w-7 h-7 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-lime-400 mb-3 sm:mb-4">
                  Пассивный доход
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Зарабатывайте с каждой транзакции ваших партнёров без дополнительных усилий
                </p>
              </div>

              {/* Feature 6 */}
              <div className="backdrop-blur-md bg-gray-900/40 border border-lime-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-lime-500/50 transition-all duration-300 hover:scale-105">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-lime-500/20 to-emerald-500/20 border border-lime-500/30 flex items-center justify-center mb-4 sm:mb-6">
                  <Users2 className="w-7 h-7 sm:w-8 sm:h-8 text-lime-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3 sm:mb-4">
                  Простое управление
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Интуитивный интерфейс для управления партнёрами и отслеживания статистики
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-lime-400 mb-12 sm:mb-16">
              Как это работает
            </h2>

            <div className="space-y-8 sm:space-y-12 text-left">
              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg sm:text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Настройте условия
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Определите свой процент и долю для партнёра. Например: 5% партнёру, 6% себе. Все настройки гибкие и могут быть изменены в любой момент.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg sm:text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Пригласите партнёров
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    Поделитесь уникальной реферальной ссылкой с потенциальными партнёрами. Они регистрируются и начинают работать с процессингом.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center flex-shrink-0 text-gray-900 font-bold text-lg sm:text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    Зарабатывайте автоматически
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                    С каждой транзакции ваших партнёров система автоматически начисляет вам процент. Работайте, привлекайте, делитесь и зарабатывайте!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 mb-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-md bg-gray-900/40 border border-emerald-500/30 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-lime-400 mb-4 sm:mb-6">
              Готовы начать зарабатывать?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed">
              Станьте нашим партнёром и начните получать пассивный доход уже сегодня
            </p>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-lime-400 to-emerald-400 hover:from-lime-500 hover:to-emerald-500 text-gray-900 font-bold text-base sm:text-lg px-10 sm:px-14 py-6 sm:py-8 rounded-xl sm:rounded-2xl shadow-2xl shadow-lime-500/30 border-0 transition-all duration-300 hover:scale-105"
                >
                  Стать партнёром
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-lime-500/30 z-50">
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-400">
                  Для сотрудничества:
                </div>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://t.me/FinX_support_ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    @FinX_support_ru
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a 
                    href="https://t.me/FINX_SUPER" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    @FINX_SUPER
                  </a>
                </DropdownMenuItem>
                <div className="px-2 py-1.5 text-xs font-semibold text-gray-400 mt-2">
                  Почта для коммерческих предложений:
                </div>
                <DropdownMenuItem asChild>
                  <a 
                    href="mailto:finx.partners@gmail.com"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="h-4 w-4" />
                    finx.partners@gmail.com
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Referral;
