import { useEffect } from "react";
import { ConstellationCanvas } from "@/components/ConstellationCanvas";
import { Header } from "@/components/Header";
import { ArrowLeft, Zap, Lock, DollarSign, Globe, Dices, ShoppingBag, Bitcoin, TrendingUp, Users, Clock, BarChart3, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: Globe,
      title: "Онлайн-процессинг",
      description: "Для любых направлений бизнеса"
    },
    {
      icon: DollarSign,
      title: "Гибкая система комиссий",
      description: "И реферальных выплат"
    },
    {
      icon: Zap,
      title: "Быстрая интеграция",
      description: "Через API"
    },
    {
      icon: Lock,
      title: "Популярные методы оплаты",
      description: "Карты, крипта, кошельки и локальные провайдеры"
    },
    {
      icon: Users,
      title: "Персональные настройки",
      description: "Под задачи клиента и его партнёров"
    }
  ];

  const industries = [
    {
      icon: Dices,
      title: "iGaming / Гемблинг",
      description: "Высокая пропускная способность, мгновенные пополнения и надёжные выплаты без задержек."
    },
    {
      icon: Bitcoin,
      title: "Крипто-платформы и обменники",
      description: "Приём криптовалюты, авто-конвертация и мгновенные переводы."
    },
    {
      icon: BarChart3,
      title: "Финтех-проекты и SaaS-платформы",
      description: "Гибкое управление платежами, отчётность и автоматизация расчётов с пользователями."
    },
    {
      icon: ShoppingBag,
      title: "E-commerce и онлайн-сервисы",
      description: "Удобная интеграция, поддержка мультивалютности и работа с разными странами."
    },
    {
      icon: TrendingUp,
      title: "Маркетплейсы и партнёрские сети",
      description: "Распределение комиссий и выплат между участниками в режиме реального времени."
    }
  ];

  const advantages = [
    {
      icon: Zap,
      title: "Автоматизация",
      description: "Система пополнений и выводов работает без ручных подтверждений"
    },
    {
      icon: Clock,
      title: "Высокая скорость",
      description: "Обработка транзакций и моментальные зачисления"
    },
    {
      icon: BarChart3,
      title: "Прозрачная аналитика",
      description: "Гибкая настройка долей для рефералов и партнёров"
    },
    {
      icon: Shield,
      title: "Поддержка 24/7",
      description: "Индивидуальные решения под ваш тип бизнеса"
    }
  ];

  return (
    <div className="w-full relative min-h-screen">
      <ConstellationCanvas />
      <div className="relative z-10">
        <Header />

        {/* Back Button */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <Link to="/">
            <Button variant="ghost" className="text-lime-400 hover:text-lime-300 hover:bg-lime-500/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-lime-500">
              Наши Решения
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Комплексные платёжные решения для любого направления бизнеса
            </p>
          </div>

          {/* Main Features */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-lime-400">
              ⚙️ Основные возможности
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-lime-900/30 border border-emerald-500/40 hover:border-lime-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-lime-400">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-400">
              💼 Мы подключаем
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 border border-cyan-500/40 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                        <industry.icon className="w-7 h-7 text-gray-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-emerald-400">{industry.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">
              ⚡ Почему нас выбирают
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-lime-900/30 to-emerald-900/30 border border-lime-500/40 hover:border-lime-500/60 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                        <advantage.icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-lime-400 mb-2">{advantage.title}</h3>
                        <p className="text-gray-300">{advantage.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16 px-6 rounded-3xl backdrop-blur-md bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border border-lime-500/40">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-lime-400">
              Готовы начать?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения индивидуального решения под ваш бизнес
            </p>
            <Link to="/support">
              <Button size="lg" className="bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-400 hover:to-emerald-400 text-gray-900 font-semibold px-8 py-6 text-lg">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Solutions;
