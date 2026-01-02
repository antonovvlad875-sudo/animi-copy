import { useEffect } from "react";
import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { ArrowLeft, UserCog, TrendingUp, Clock, Award, Shield, Wallet, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Operator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      {/* Dark overlay to blur/darken background */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-0" />
      <div className="relative z-10">
        <Header />
        
        {/* Back button */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <Link to="/">
            <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад на главную
            </Button>
          </Link>
        </div>

        {/* Info Section */}
        <section className="relative px-4 sm:px-6 md:px-8 pb-8">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/40 rounded-2xl p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">💸</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">
                  Преимущества для операторов и партнёров
                </h2>
              </div>
              
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Мы верим, что успех системы начинается с людей, которые её создают.
                  Поэтому FinX предлагает одни из лучших условий на рынке:
                </p>
                
                <ul className="space-y-3 text-base sm:text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-1">✓</span>
                    <span><strong className="text-emerald-400">15%</strong> от суммы принятых платежей на карту.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-1">✓</span>
                    <span><strong className="text-emerald-400">+3%</strong> бонуса при выводе средств.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-1">✓</span>
                    <span><strong className="text-emerald-400">+1%</strong> надбавки за ночные смены (с 23:00 до 06:00).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold mt-1">✓</span>
                    <span><strong className="text-emerald-400">Выгодный курс обмена</strong>, который позволяет зарабатывать еще больше.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold mt-1">✓</span>
                    <span>Гибкий график, поддержка 24/7, и стабильные выплаты без задержек.</span>
                  </li>
                </ul>
                
                <p className="text-lg italic border-l-4 border-cyan-400 pl-4 py-2 bg-cyan-900/20 rounded-r">
                  FinX — это команда профессионалов, где каждый оператор — ключевой элемент большой финансовой системы.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-400/20 border border-cyan-400/40 mb-4">
                <UserCog className="w-10 h-10 text-cyan-400" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-cyan-400">Условия для операторов</span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Присоединяйтесь к команде FinX и получайте стабильный доход с выгодными условиями сотрудничества
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {/* Benefit 1 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Высокие комиссии</h3>
                  <p className="text-gray-400">
                    Получайте 15% с каждой заведенной транзакции
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Быстрые выплаты</h3>
                  <p className="text-gray-400">
                    Ежедневные автоматические выплаты на ваш счет без задержек
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Бонусы за объемы</h3>
                  <p className="text-gray-400">
                    Специальные премии при достижении плановых показателей
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Полная поддержка</h3>
                  <p className="text-gray-400">
                    24/7 техническая поддержка и менеджер для решения любых вопросов
                  </p>
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <Wallet className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Без холдов</h3>
                  <p className="text-gray-400">
                    Работа без замораживания средств. Все транзакции обрабатываются моментально
                  </p>
                </div>
              </div>

              {/* Benefit 6 */}
              <div className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Рост доходов</h3>
                  <p className="text-gray-400">
                    Масштабируйте свой бизнес и увеличивайте заработок вместе с FinX
                  </p>
                </div>
              </div>
            </div>

            {/* Conditions Table */}
            <div className="backdrop-blur-md bg-gradient-to-br from-cyan-900/20 to-cyan-800/10 border border-cyan-500/30 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-6 text-center">
                Условия работы
              </h2>
              
              <div className="space-y-6">
                {/* Deposit */}
                <div className="p-6 rounded-xl bg-cyan-900/20 border border-cyan-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Wallet className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">Залог</h3>
                      <p className="text-gray-300">От 10 000 рублей</p>
                      <p className="text-sm text-gray-500 mt-1">Необходим для начала работы и возвращается при завершении сотрудничества</p>
                    </div>
                  </div>
                </div>

                {/* Commission */}
                <div className="p-6 rounded-xl bg-cyan-900/20 border border-cyan-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-emerald-400 mb-2">Комиссия за транзакцию</h3>
                      <p className="text-gray-300 text-2xl font-bold">15%</p>
                      <p className="text-sm text-gray-500 mt-1">От суммы каждой заведенной транзакции. Процент зависит от объема оборота</p>
                    </div>
                  </div>
                </div>

                {/* Withdrawal Fee */}
                <div className="p-6 rounded-xl bg-cyan-900/20 border border-cyan-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Wallet className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">Комиссия на вывод</h3>
                      <p className="text-gray-300 text-2xl font-bold">3%</p>
                      <p className="text-sm text-gray-500 mt-1">От суммы при выводе средств со счета</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/40 rounded-2xl p-8 sm:p-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-4">
                  Готовы начать работу?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Свяжитесь с нами для получения подробной информации и начала сотрудничества
                </p>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg">
                      Связаться с нами
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border-cyan-500/30 z-50">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Operator;
