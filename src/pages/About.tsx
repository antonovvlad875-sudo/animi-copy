import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { ArrowLeft, Zap, Lock, DollarSign, Globe, Brain, Sparkles, TrendingUp, Users, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-10">
        <Header />
        
        {/* Back button */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <Link to="/">
            <Button variant="ghost" className="text-brand-cyan hover:text-brand-cyan-light hover:bg-brand-cyan/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Назад на главную
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto">
            {/* Main Title */}
            <div className="text-center space-y-6 mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-emerald/20 border border-brand-cyan/40 mb-4">
                <Sparkles className="w-10 h-10 text-brand-cyan" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-brand-emerald">FinX</span>
                <span className="text-white"> — Финансовый Прорыв</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-emerald">
                в Индустрии Процессинга
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                FinX — это не просто система оплаты. Это новый стандарт в мире финансовых технологий, объединяющий скорость, надежность и масштаб. Мы создаем инфраструктуру, через которую проходят платежи крупнейших представителей айгейминга, гемблинга, маркетплейсов, а также малого и крупного бизнеса по всей России и за её пределами.
              </p>
            </div>

            {/* Who We Are */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-cyan/20 to-card/50 border border-brand-cyan/40 rounded-2xl p-8 sm:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-emerald/30 border border-brand-cyan/40 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-brand-cyan" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-cyan">
                  Кто мы
                </h2>
              </div>
              
              <div className="space-y-6 text-foreground/80 text-base sm:text-lg">
                <p className="leading-relaxed">
                  <strong className="text-brand-emerald">FinX</strong> — это высокотехнологичная процессинговая экосистема, которая обеспечивает бесшовную обработку платежей 24/7. Наша платформа поддерживает все современные методы приема и вывода средств, обеспечивая безопасность и стабильность на уровне ведущих мировых решений.
                </p>
                
                <div className="p-6 rounded-xl bg-gradient-to-r from-brand-emerald/20 to-brand-cyan/20 border border-brand-emerald/30">
                  <p className="text-xl font-bold text-brand-emerald mb-2">
                    98% всех заявок
                  </p>
                  <p className="text-foreground/80">
                    Благодаря передовым алгоритмам и собственной архитектуре, мы обрабатываем 98% всех заявок на территории РФ, обеспечивая мгновенные транзакции и максимальный аптайм системы.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Clients */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-emerald/20 to-card/50 border border-brand-emerald/40 rounded-2xl p-8 sm:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-emerald/30 to-brand-cyan/30 border border-brand-emerald/40 flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-emerald" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald">
                  Наши клиенты и партнёры
                </h2>
              </div>
              
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Нам доверяют лидеры отрасли — от динамичных стартапов до международных площадок. <strong className="text-brand-emerald">FinX</strong> — это выбор тех, кто ценит скорость, надёжность и прозрачность.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <Users className="w-8 h-8 text-brand-emerald mb-3" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">
                    Айгейминг и гемблинг-проекты
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Стабильные приёмы и выводы средств без задержек
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <TrendingUp className="w-8 h-8 text-brand-emerald mb-3" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">
                    Маркетплейсы
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Автоматизация платежей между продавцами и покупателями
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <DollarSign className="w-8 h-8 text-brand-emerald mb-3" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">
                    Бизнес любого масштаба
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    От индивидуальных предпринимателей до корпоративных гигантов
                  </p>
                </div>
              </div>
            </div>

            {/* Operator Benefits */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-cyan/20 to-card/50 border border-brand-cyan/40 rounded-2xl p-8 sm:p-10 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/30 to-brand-emerald/30 border border-brand-cyan/40 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-brand-emerald" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-cyan">
                  Преимущества для операторов и партнёров
                </h2>
              </div>
              
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Мы верим, что успех системы начинается с людей, которые её создают. Поэтому <strong className="text-brand-emerald">FinX</strong> предлагает одни из лучших условий на рынке:
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30">
                  <div className="text-3xl font-bold text-brand-emerald mb-2">9–11%</div>
                  <p className="text-foreground/80">от суммы принятых платежей на карту</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30">
                  <div className="text-3xl font-bold text-brand-emerald mb-2">+3%</div>
                  <p className="text-foreground/80">бонуса при выводе средств</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30">
                  <div className="text-3xl font-bold text-brand-emerald mb-2">+1%</div>
                  <p className="text-foreground/80">надбавки за ночные смены (с 23:00 до 06:00)</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center">
                  <Clock className="w-8 h-8 text-brand-cyan mr-4" />
                  <p className="text-foreground/80">Гибкий график, поддержка 24/7, и стабильные выплаты без задержек</p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-brand-cyan/20 to-brand-emerald/20 border border-brand-cyan/30">
                <p className="text-lg text-foreground/80 italic text-center">
                  <strong className="text-brand-emerald">FinX</strong> — это команда профессионалов, где каждый оператор — ключевой элемент большой финансовой системы.
                </p>
              </div>
            </div>

            {/* Why FinX */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-emerald/20 to-card/50 border border-brand-emerald/40 rounded-2xl p-8 sm:p-10 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-emerald/30 to-brand-cyan/30 border border-brand-emerald/40 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-emerald" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-emerald">
                  Почему FinX
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <Zap className="w-10 h-10 text-brand-emerald mb-4" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">⚡ 98% автоматизации</h3>
                  <p className="text-muted-foreground">Заявки обрабатываются автоматически</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <Lock className="w-10 h-10 text-brand-emerald mb-4" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">🔒 Безопасность</h3>
                  <p className="text-muted-foreground">Максимальная защита и конфиденциальность данных</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <DollarSign className="w-10 h-10 text-brand-emerald mb-4" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">💰 Лучшие комиссии</h3>
                  <p className="text-muted-foreground">Бонусная система для сотрудников и партнёров</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <Globe className="w-10 h-10 text-brand-emerald mb-4" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">🌍 География</h3>
                  <p className="text-muted-foreground">Работаем по всей России и выходим на международный уровень</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <Brain className="w-10 h-10 text-brand-emerald mb-4" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">🧠 Свои технологии</h3>
                  <p className="text-muted-foreground">Собственные разработки, никакого посредничества</p>
                </div>

                <div className="p-6 rounded-xl bg-brand-emerald/10 border border-brand-emerald/30">
                  <Shield className="w-10 h-10 text-brand-emerald mb-4" />
                  <h3 className="text-lg font-bold text-brand-emerald mb-2">🌟 Надежность</h3>
                  <p className="text-muted-foreground">Стабильность на уровне ведущих мировых решений</p>
                </div>
              </div>
            </div>

            {/* Final Statement */}
            <div className="backdrop-blur-md bg-gradient-to-br from-brand-cyan/30 to-brand-emerald/20 border border-brand-cyan/50 rounded-2xl p-8 sm:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cyan/30 to-brand-emerald/30 border border-brand-cyan/50 mb-6">
                <Sparkles className="w-8 h-8 text-brand-cyan" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                <span className="text-brand-emerald">FinX</span>
                <span className="text-white"> — это не просто процессинг.</span>
              </h2>
              <p className="text-xl sm:text-2xl font-bold text-brand-emerald mb-6">
                Это финтех будущего.
              </p>
              
              <div className="space-y-4 text-lg text-foreground/80 max-w-3xl mx-auto">
                <p className="leading-relaxed">
                  Мы не следуем за трендами — мы их задаем. <strong className="text-brand-emerald">FinX</strong> — это разрыв шаблонов и новая планка эффективности для всей индустрии.
                </p>
                <p className="text-xl font-semibold text-brand-cyan">
                  Наши решения уже сегодня определяют, как будут выглядеть финансовые технологии завтрашнего дня.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
